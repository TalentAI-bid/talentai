const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables
dotenv.config({ path: path.join(__dirname, '../.env') });

// Import models
const User = require('../models/UserModel');
const Profile = require('../models/ProfileModel');
const InterviewAssessment = require('../models/InterviewAssessmentModel');

async function checkUser() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✓ Connected to MongoDB\n');

    // Find user by email
    const user = await User.findOne({ email: 'finley.lee@yopmail.com' });

    if (!user) {
      console.log('❌ User not found with email: finley.lee@yopmail.com');
      await mongoose.connection.close();
      return;
    }

    console.log('✓ User found:');
    console.log(`  - ID: ${user._id}`);
    console.log(`  - Username: ${user.username}`);
    console.log(`  - Email: ${user.email}`);
    console.log(`  - Role: ${user.role}`);
    console.log(`  - Profile ID: ${user.profile}\n`);

    // Find profile
    const profile = await Profile.findById(user.profile);

    if (!profile) {
      console.log('❌ Profile not found');
      await mongoose.connection.close();
      return;
    }

    console.log('✓ Profile found:');
    console.log(`  - Profile ID: ${profile._id}`);
    console.log(`  - Type: ${profile.type}`);
    console.log(`  - Name: ${profile.firstName} ${profile.lastName}`);
    console.log(`  - Current Quota: ${profile.quota || 0}`);
    console.log(`  - Current Skills: ${profile.skills?.length || 0}`);
    console.log(`  - Current Assessments: ${profile.interviewDetails?.length || 0}\n`);

    // Show current skills
    if (profile.skills && profile.skills.length > 0) {
      console.log('Current Skills:');
      profile.skills.forEach((skill, index) => {
        console.log(`  ${index + 1}. ${skill.name}`);
        console.log(`     - Proficiency: ${skill.proficiencyLevel} (${skill.experienceLevel})`);
        console.log(`     - Score: ${skill.ScoreTest}`);
        console.log(`     - Tests Passed: ${skill.NumberTestPassed}`);
      });
      console.log('');
    }

    // Show current assessments
    if (profile.interviewDetails && profile.interviewDetails.length > 0) {
      console.log('Current Assessments:');
      const assessments = await InterviewAssessment.find({
        _id: { $in: profile.interviewDetails }
      });

      assessments.forEach((assessment, index) => {
        console.log(`  ${index + 1}. ${assessment.metadata?.skill || 'Unknown'}`);
        console.log(`     - Type: ${assessment.metadata?.type}`);
        console.log(`     - Score: ${assessment.interviewData?.finalReport?.scores?.overall || 'N/A'}`);
        console.log(`     - Status: ${assessment.status}`);
        console.log(`     - Created: ${assessment.createdAt}`);
      });
    } else {
      console.log('No existing assessments found.');
    }

    console.log('\n✓ Ready to add new assessments!');
    console.log(`\nProfile ID to use: ${profile._id}`);

    await mongoose.connection.close();
    console.log('\n✓ Database connection closed');
  } catch (error) {
    console.error('Error:', error);
    await mongoose.connection.close();
    process.exit(1);
  }
}

checkUser();
