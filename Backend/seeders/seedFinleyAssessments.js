const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables
dotenv.config({ path: path.join(__dirname, '../.env') });

// Import models
const Profile = require('../models/ProfileModel');
const InterviewAssessment = require('../models/InterviewAssessmentModel');

// Profile ID for finley.lee@yopmail.com
const PROFILE_ID = '69408a85bc9ef5f1038f1417';

// Helper to create timestamp
const now = new Date();

// Assessment data
const assessments = [
  {
    // PyTorch Assessment - Score: 75/100 (Senior Level)
    metadata: {
      exportedAt: now,
      type: 'skill',
      skill: 'PyTorch',
      role: 'Machine Learning Engineer',
      category: 'ML Framework',
      proficiency: 'Senior'
    },
    interviewData: {
      sessionId: `pytorch-assessment-finley-${Date.now()}-1`,
      interviewType: 'TECHNICAL_INTERVIEW',
      timestamp: now,

      finalReport: {
        summary: 'Demonstrates strong understanding of PyTorch framework with solid practical experience in neural network implementation and model training. Shows proficiency in tensor operations, autograd mechanics, and model optimization. Good grasp of deep learning architectures including CNNs and RNNs. Could improve in distributed training and advanced optimization techniques.',

        coverage: {
          overall: 75,
          areas: {
            technical_depth: {
              percentage: 78,
              weight: 0.35,
              depth: 'advanced',
              completed: true,
              lastUpdated: now,
              questionsAsked: 8,
              lastQuestionTime: now,
              indicators: [
                {
                  name: 'Neural Network Architecture',
                  covered: true,
                  quality: 8,
                  aiGenerated: true,
                  evidence: [
                    'Explained CNN architecture with conv2d, pooling, and fully connected layers',
                    'Discussed different activation functions (ReLU, Sigmoid, Tanh) and their use cases',
                    'Demonstrated knowledge of batch normalization and dropout for regularization'
                  ],
                  reasoning: 'Strong understanding of neural network components and their applications'
                },
                {
                  name: 'Tensor Operations',
                  covered: true,
                  quality: 8,
                  aiGenerated: true,
                  evidence: [
                    'Proficient with tensor manipulation (reshape, transpose, indexing)',
                    'Understands broadcasting and its implications',
                    'Familiar with GPU tensor operations using .cuda() and device management'
                  ],
                  reasoning: 'Solid grasp of PyTorch tensor fundamentals'
                },
                {
                  name: 'Autograd and Backpropagation',
                  covered: true,
                  quality: 7,
                  aiGenerated: true,
                  evidence: [
                    'Explained computational graph and gradient computation',
                    'Understands when to use torch.no_grad() for inference',
                    'Familiar with gradient accumulation and zeroing gradients'
                  ],
                  reasoning: 'Good understanding of automatic differentiation mechanisms'
                },
                {
                  name: 'Model Training',
                  covered: true,
                  quality: 8,
                  aiGenerated: true,
                  evidence: [
                    'Demonstrated standard training loop implementation',
                    'Knows how to use optimizers (Adam, SGD) and learning rate schedulers',
                    'Understands loss functions for different tasks (CrossEntropy, MSE, BCE)'
                  ],
                  reasoning: 'Proficient in end-to-end model training workflows'
                },
                {
                  name: 'Advanced Optimization',
                  covered: false,
                  quality: 5,
                  aiGenerated: true,
                  evidence: [
                    'Limited experience with mixed precision training',
                    'Basic knowledge of gradient clipping'
                  ],
                  reasoning: 'Area for improvement in advanced optimization techniques'
                }
              ],
              aiAnalysis: {
                qualityScore: 8,
                reasoning: 'Strong technical foundation with room for growth in advanced topics',
                indicators: ['Neural networks', 'Tensor operations', 'Training pipelines']
              }
            },

            problem_approach: {
              percentage: 74,
              weight: 0.25,
              depth: 'intermediate',
              completed: true,
              lastUpdated: now,
              questionsAsked: 6,
              lastQuestionTime: now,
              indicators: [
                {
                  name: 'Debugging Skills',
                  covered: true,
                  quality: 7,
                  aiGenerated: true,
                  evidence: [
                    'Uses print statements and tensor inspection for debugging',
                    'Familiar with PyTorch hooks for gradient inspection',
                    'Checks for NaN/Inf values in tensors'
                  ],
                  reasoning: 'Good debugging practices for deep learning models'
                },
                {
                  name: 'Code Organization',
                  covered: true,
                  quality: 8,
                  aiGenerated: true,
                  evidence: [
                    'Structures models as nn.Module subclasses',
                    'Separates data loading, model definition, and training logic',
                    'Uses config files for hyperparameters'
                  ],
                  reasoning: 'Well-organized code structure following best practices'
                },
                {
                  name: 'Performance Optimization',
                  covered: true,
                  quality: 7,
                  aiGenerated: true,
                  evidence: [
                    'Understands batch size impact on training speed',
                    'Uses DataLoader with multiple workers',
                    'Aware of memory management for large models'
                  ],
                  reasoning: 'Good awareness of performance considerations'
                }
              ],
              aiAnalysis: {
                qualityScore: 7,
                reasoning: 'Methodical approach to problem-solving with good debugging skills',
                indicators: ['Debugging', 'Code structure', 'Performance']
              }
            },

            learning_ability: {
              percentage: 72,
              weight: 0.20,
              depth: 'intermediate',
              completed: true,
              lastUpdated: now,
              questionsAsked: 5,
              lastQuestionTime: now,
              indicators: [
                {
                  name: 'Documentation Usage',
                  covered: true,
                  quality: 8,
                  aiGenerated: true,
                  evidence: [
                    'References PyTorch official documentation regularly',
                    'Follows PyTorch tutorials and examples',
                    'Stays updated with PyTorch releases'
                  ],
                  reasoning: 'Good self-learning habits using official resources'
                },
                {
                  name: 'Adaptability',
                  covered: true,
                  quality: 7,
                  aiGenerated: true,
                  evidence: [
                    'Can adapt code examples to specific use cases',
                    'Learns from error messages and stack traces',
                    'Willing to experiment with different architectures'
                  ],
                  reasoning: 'Shows adaptability in learning new concepts'
                }
              ],
              aiAnalysis: {
                qualityScore: 7,
                reasoning: 'Strong self-learning capabilities with good documentation skills',
                indicators: ['Documentation', 'Adaptability']
              }
            },

            practical_experience: {
              percentage: 76,
              weight: 0.20,
              depth: 'advanced',
              completed: true,
              lastUpdated: now,
              questionsAsked: 7,
              lastQuestionTime: now,
              indicators: [
                {
                  name: 'Computer Vision Projects',
                  covered: true,
                  quality: 8,
                  aiGenerated: true,
                  evidence: [
                    'Built image classification models using ResNet and VGG',
                    'Implemented object detection with YOLO-like architectures',
                    'Experience with transfer learning using pretrained models'
                  ],
                  reasoning: 'Strong practical experience in computer vision tasks'
                },
                {
                  name: 'Model Deployment',
                  covered: true,
                  quality: 7,
                  aiGenerated: true,
                  evidence: [
                    'Exported models using torch.save() and torch.jit.script()',
                    'Basic experience with ONNX export',
                    'Deployed models using Flask/FastAPI'
                  ],
                  reasoning: 'Good practical knowledge of model deployment'
                },
                {
                  name: 'Real-world Applications',
                  covered: true,
                  quality: 8,
                  aiGenerated: true,
                  evidence: [
                    'Worked on production CV models',
                    'Handled real-world datasets with imbalanced classes',
                    'Implemented data augmentation strategies'
                  ],
                  reasoning: 'Solid real-world project experience'
                }
              ],
              aiAnalysis: {
                qualityScore: 8,
                reasoning: 'Extensive practical experience with real-world applications',
                indicators: ['Computer vision', 'Deployment', 'Production systems']
              }
            }
          }
        },

        completedAreas: ['technical_depth', 'problem_approach', 'learning_ability', 'practical_experience'],
        nextRecommendedArea: 'Advanced Optimization Techniques',
        lastUpdated: now,

        aiAnalysis: {
          totalCoverage: 75,
          strongestAreas: ['Practical Experience', 'Technical Depth', 'Model Training'],
          weakestAreas: ['Advanced Optimization', 'Distributed Training'],
          recommendedFocus: [
            'Study mixed precision training with torch.cuda.amp',
            'Learn distributed training with DDP',
            'Explore advanced optimizers like AdamW and LAMB',
            'Practice model quantization and pruning'
          ]
        },

        recommendations: [
          'Deepen knowledge of distributed training using DistributedDataParallel',
          'Explore mixed precision training for faster computation',
          'Study advanced optimization techniques like gradient accumulation and adaptive learning rates',
          'Practice with larger-scale datasets and models',
          'Learn about model quantization for deployment optimization'
        ],

        scores: {
          communication: 74,
          technical_depth: 78,
          problem_approach: 74,
          learning_ability: 72,
          overall: 75
        },

        timestamp: now
      },

      analytics: {
        duration: 2100, // 35 minutes
        messageCount: 26,
        silenceEvents: 2,
        coveragePercentage: 75,
        completedAreas: 4,
        totalAreas: 4,
        averageResponseLength: 145,
        interactionStyle: 'detailed and technical'
      }
    },

    candidateId: PROFILE_ID,
    status: 'completed',
    createdAt: now,
    updatedAt: now
  },

  {
    // LangChain Assessment - Score: 72/100 (Senior Level)
    metadata: {
      exportedAt: now,
      type: 'skill',
      skill: 'LangChain',
      role: 'AI/LLM Engineer',
      category: 'AI Tool',
      proficiency: 'Senior'
    },
    interviewData: {
      sessionId: `langchain-assessment-finley-${Date.now()}-2`,
      interviewType: 'TECHNICAL_INTERVIEW',
      timestamp: now,

      finalReport: {
        summary: 'Shows strong competency in LangChain framework with good understanding of chain composition, prompt engineering, and agent systems. Demonstrates practical experience in building RAG applications and integrating with various LLM providers. Well-versed in memory systems and document processing. Could strengthen knowledge in advanced agent architectures and custom tool creation.',

        coverage: {
          overall: 72,
          areas: {
            technical_depth: {
              percentage: 75,
              weight: 0.35,
              depth: 'advanced',
              completed: true,
              lastUpdated: now,
              questionsAsked: 9,
              lastQuestionTime: now,
              indicators: [
                {
                  name: 'Chain Composition',
                  covered: true,
                  quality: 8,
                  aiGenerated: true,
                  evidence: [
                    'Proficient with LLMChain, SequentialChain, and RouterChain',
                    'Understands chain inputs/outputs and variable passing',
                    'Can compose complex multi-step chains for workflows'
                  ],
                  reasoning: 'Strong understanding of chain architecture and composition'
                },
                {
                  name: 'Prompt Engineering',
                  covered: true,
                  quality: 8,
                  aiGenerated: true,
                  evidence: [
                    'Uses PromptTemplate and ChatPromptTemplate effectively',
                    'Familiar with few-shot prompting and prompt optimization',
                    'Understands prompt variables and formatting'
                  ],
                  reasoning: 'Excellent prompt engineering skills'
                },
                {
                  name: 'Agent Systems',
                  covered: true,
                  quality: 7,
                  aiGenerated: true,
                  evidence: [
                    'Built agents using AgentExecutor and ReAct framework',
                    'Integrated custom tools with agents',
                    'Understands agent decision-making process'
                  ],
                  reasoning: 'Good practical knowledge of agent systems'
                },
                {
                  name: 'Memory Management',
                  covered: true,
                  quality: 8,
                  aiGenerated: true,
                  evidence: [
                    'Used ConversationBufferMemory and ConversationSummaryMemory',
                    'Understands memory persistence and retrieval',
                    'Familiar with vector store memory for long contexts'
                  ],
                  reasoning: 'Strong grasp of memory systems in conversational AI'
                },
                {
                  name: 'Document Processing',
                  covered: true,
                  quality: 7,
                  aiGenerated: true,
                  evidence: [
                    'Experienced with text splitters and document loaders',
                    'Built RAG systems with vector databases',
                    'Knows about different chunking strategies'
                  ],
                  reasoning: 'Good practical experience with document processing pipelines'
                }
              ],
              aiAnalysis: {
                qualityScore: 8,
                reasoning: 'Comprehensive technical knowledge across core LangChain concepts',
                indicators: ['Chains', 'Prompts', 'Agents', 'Memory', 'Documents']
              }
            },

            problem_approach: {
              percentage: 70,
              weight: 0.25,
              depth: 'intermediate',
              completed: true,
              lastUpdated: now,
              questionsAsked: 6,
              lastQuestionTime: now,
              indicators: [
                {
                  name: 'Debugging LangChain Applications',
                  covered: true,
                  quality: 7,
                  aiGenerated: true,
                  evidence: [
                    'Uses verbose mode for debugging chain execution',
                    'Inspects intermediate outputs in chain steps',
                    'Handles LLM API errors and retries'
                  ],
                  reasoning: 'Good debugging practices specific to LangChain'
                },
                {
                  name: 'Integration Strategy',
                  covered: true,
                  quality: 7,
                  aiGenerated: true,
                  evidence: [
                    'Integrates multiple LLM providers (OpenAI, Anthropic, local models)',
                    'Connects vector databases (Pinecone, Chroma, FAISS)',
                    'Uses callbacks for monitoring and logging'
                  ],
                  reasoning: 'Methodical approach to integrating external services'
                },
                {
                  name: 'Error Handling',
                  covered: true,
                  quality: 7,
                  aiGenerated: true,
                  evidence: [
                    'Implements retry logic for API failures',
                    'Validates chain outputs and handles edge cases',
                    'Uses fallback chains for robustness'
                  ],
                  reasoning: 'Good error handling and resilience patterns'
                }
              ],
              aiAnalysis: {
                qualityScore: 7,
                reasoning: 'Systematic problem-solving with focus on robustness',
                indicators: ['Debugging', 'Integration', 'Error handling']
              }
            },

            learning_ability: {
              percentage: 68,
              weight: 0.20,
              depth: 'intermediate',
              completed: true,
              lastUpdated: now,
              questionsAsked: 5,
              lastQuestionTime: now,
              indicators: [
                {
                  name: 'Framework Updates',
                  covered: true,
                  quality: 7,
                  aiGenerated: true,
                  evidence: [
                    'Follows LangChain documentation and changelog',
                    'Adapts to breaking changes in new versions',
                    'Explores new features like LCEL (LangChain Expression Language)'
                  ],
                  reasoning: 'Stays current with rapidly evolving framework'
                },
                {
                  name: 'Community Engagement',
                  covered: true,
                  quality: 7,
                  aiGenerated: true,
                  evidence: [
                    'References LangChain cookbook and examples',
                    'Participates in Discord/GitHub discussions',
                    'Learns from community implementations'
                  ],
                  reasoning: 'Active learning through community resources'
                }
              ],
              aiAnalysis: {
                qualityScore: 7,
                reasoning: 'Good learning agility in fast-paced LLM ecosystem',
                indicators: ['Documentation', 'Community', 'Adaptation']
              }
            },

            practical_experience: {
              percentage: 73,
              weight: 0.20,
              depth: 'advanced',
              completed: true,
              lastUpdated: now,
              questionsAsked: 7,
              lastQuestionTime: now,
              indicators: [
                {
                  name: 'RAG Applications',
                  covered: true,
                  quality: 8,
                  aiGenerated: true,
                  evidence: [
                    'Built production RAG systems with document retrieval',
                    'Optimized retrieval with metadata filtering and hybrid search',
                    'Handled large document corpora with efficient indexing'
                  ],
                  reasoning: 'Strong practical experience with RAG architecture'
                },
                {
                  name: 'Chatbot Development',
                  covered: true,
                  quality: 7,
                  aiGenerated: true,
                  evidence: [
                    'Developed conversational AI with memory persistence',
                    'Implemented context management for long conversations',
                    'Integrated with messaging platforms'
                  ],
                  reasoning: 'Good experience building production chatbots'
                },
                {
                  name: 'Custom Tool Creation',
                  covered: true,
                  quality: 6,
                  aiGenerated: true,
                  evidence: [
                    'Created basic custom tools for agents',
                    'Limited experience with complex tool orchestration',
                    'Some knowledge of tool schemas and validation'
                  ],
                  reasoning: 'Area for growth in advanced tool development'
                }
              ],
              aiAnalysis: {
                qualityScore: 7,
                reasoning: 'Solid practical experience with room for growth in advanced tooling',
                indicators: ['RAG systems', 'Chatbots', 'Production deployment']
              }
            }
          }
        },

        completedAreas: ['technical_depth', 'problem_approach', 'learning_ability', 'practical_experience'],
        nextRecommendedArea: 'Advanced Agent Architectures',
        lastUpdated: now,

        aiAnalysis: {
          totalCoverage: 72,
          strongestAreas: ['RAG Applications', 'Chain Composition', 'Prompt Engineering'],
          weakestAreas: ['Custom Tool Creation', 'Advanced Agents'],
          recommendedFocus: [
            'Master LCEL (LangChain Expression Language) for complex workflows',
            'Build advanced agent architectures with tool orchestration',
            'Study streaming and async patterns in LangChain',
            'Explore LangSmith for production monitoring and debugging'
          ]
        },

        recommendations: [
          'Deepen expertise in custom tool development and agent architectures',
          'Learn LCEL for more efficient chain composition',
          'Practice with streaming responses for better UX',
          'Explore LangSmith for production observability',
          'Study advanced RAG techniques like query expansion and re-ranking'
        ],

        scores: {
          communication: 71,
          technical_depth: 75,
          problem_approach: 70,
          learning_ability: 68,
          overall: 72
        },

        timestamp: now
      },

      analytics: {
        duration: 1950, // 32.5 minutes
        messageCount: 27,
        silenceEvents: 1,
        coveragePercentage: 72,
        completedAreas: 4,
        totalAreas: 4,
        averageResponseLength: 138,
        interactionStyle: 'practical and example-driven'
      }
    },

    candidateId: PROFILE_ID,
    status: 'completed',
    createdAt: now,
    updatedAt: now
  },

  {
    // TensorFlow Assessment - Score: 68/100 (Senior Level)
    metadata: {
      exportedAt: now,
      type: 'skill',
      skill: 'TensorFlow',
      role: 'Machine Learning Engineer',
      category: 'ML Framework',
      proficiency: 'Senior'
    },
    interviewData: {
      sessionId: `tensorflow-assessment-finley-${Date.now()}-3`,
      interviewType: 'TECHNICAL_INTERVIEW',
      timestamp: now,

      finalReport: {
        summary: 'Demonstrates solid understanding of TensorFlow framework with good practical experience in model development using Keras API. Shows competency in model training, data pipelines, and deployment. Familiar with TensorFlow ecosystem including TF Serving and TensorBoard. Could strengthen knowledge in custom layers, advanced training loops, and distributed training strategies.',

        coverage: {
          overall: 68,
          areas: {
            technical_depth: {
              percentage: 70,
              weight: 0.35,
              depth: 'intermediate',
              completed: true,
              lastUpdated: now,
              questionsAsked: 8,
              lastQuestionTime: now,
              indicators: [
                {
                  name: 'Keras API Proficiency',
                  covered: true,
                  quality: 8,
                  aiGenerated: true,
                  evidence: [
                    'Proficient with Sequential and Functional API',
                    'Builds models using keras.layers and custom subclassing',
                    'Understands model compilation and training workflows'
                  ],
                  reasoning: 'Strong command of high-level Keras API'
                },
                {
                  name: 'TensorFlow Core Concepts',
                  covered: true,
                  quality: 7,
                  aiGenerated: true,
                  evidence: [
                    'Understands tensors, operations, and computational graphs',
                    'Familiar with tf.function for graph optimization',
                    'Knows eager execution vs graph mode differences'
                  ],
                  reasoning: 'Good grasp of TensorFlow fundamentals'
                },
                {
                  name: 'Data Pipelines',
                  covered: true,
                  quality: 8,
                  aiGenerated: true,
                  evidence: [
                    'Creates efficient data pipelines with tf.data.Dataset',
                    'Uses map, batch, prefetch for optimization',
                    'Handles large datasets with from_generator and TFRecord'
                  ],
                  reasoning: 'Excellent knowledge of data pipeline construction'
                },
                {
                  name: 'Custom Components',
                  covered: true,
                  quality: 6,
                  aiGenerated: true,
                  evidence: [
                    'Created basic custom layers and loss functions',
                    'Limited experience with complex custom training loops',
                    'Some knowledge of custom metrics and callbacks'
                  ],
                  reasoning: 'Area for improvement in advanced customization'
                },
                {
                  name: 'Model Optimization',
                  covered: true,
                  quality: 6,
                  aiGenerated: true,
                  evidence: [
                    'Basic knowledge of quantization and pruning',
                    'Limited experience with TF Lite conversion',
                    'Understands mixed precision training concepts'
                  ],
                  reasoning: 'Foundational knowledge with room for growth'
                }
              ],
              aiAnalysis: {
                qualityScore: 7,
                reasoning: 'Solid technical foundation with opportunities in advanced topics',
                indicators: ['Keras API', 'Data pipelines', 'Core concepts']
              }
            },

            problem_approach: {
              percentage: 67,
              weight: 0.25,
              depth: 'intermediate',
              completed: true,
              lastUpdated: now,
              questionsAsked: 6,
              lastQuestionTime: now,
              indicators: [
                {
                  name: 'Model Development Workflow',
                  covered: true,
                  quality: 7,
                  aiGenerated: true,
                  evidence: [
                    'Follows structured approach: data prep → model design → training → evaluation',
                    'Uses TensorBoard for experiment tracking',
                    'Implements model checkpointing and early stopping'
                  ],
                  reasoning: 'Good systematic approach to ML development'
                },
                {
                  name: 'Debugging and Profiling',
                  covered: true,
                  quality: 6,
                  aiGenerated: true,
                  evidence: [
                    'Uses tf.debugging for assertions and checks',
                    'Basic profiling with TensorBoard',
                    'Limited experience with advanced profiling tools'
                  ],
                  reasoning: 'Basic debugging skills with room for improvement'
                },
                {
                  name: 'Transfer Learning',
                  covered: true,
                  quality: 8,
                  aiGenerated: true,
                  evidence: [
                    'Effectively uses pretrained models from keras.applications',
                    'Fine-tunes models by freezing/unfreezing layers',
                    'Adapts models for custom tasks'
                  ],
                  reasoning: 'Strong practical skills in transfer learning'
                }
              ],
              aiAnalysis: {
                qualityScore: 7,
                reasoning: 'Methodical development approach with good transfer learning skills',
                indicators: ['Workflow', 'Transfer learning', 'Debugging']
              }
            },

            learning_ability: {
              percentage: 65,
              weight: 0.20,
              depth: 'intermediate',
              completed: true,
              lastUpdated: now,
              questionsAsked: 5,
              lastQuestionTime: now,
              indicators: [
                {
                  name: 'Documentation and Resources',
                  covered: true,
                  quality: 7,
                  aiGenerated: true,
                  evidence: [
                    'References official TensorFlow documentation',
                    'Follows TensorFlow tutorials and guides',
                    'Uses TensorFlow blog for updates'
                  ],
                  reasoning: 'Good use of official learning resources'
                },
                {
                  name: 'Adaptation to Updates',
                  covered: true,
                  quality: 6,
                  aiGenerated: true,
                  evidence: [
                    'Migrated from TF 1.x to TF 2.x patterns',
                    'Somewhat slow to adopt newer features',
                    'Prefers stable, well-documented approaches'
                  ],
                  reasoning: 'Adequate adaptation with preference for stability'
                }
              ],
              aiAnalysis: {
                qualityScore: 6,
                reasoning: 'Solid learning foundation with conservative approach to new features',
                indicators: ['Documentation', 'Stability', 'Gradual adoption']
              }
            },

            practical_experience: {
              percentage: 70,
              weight: 0.20,
              depth: 'advanced',
              completed: true,
              lastUpdated: now,
              questionsAsked: 7,
              lastQuestionTime: now,
              indicators: [
                {
                  name: 'Production Model Deployment',
                  covered: true,
                  quality: 7,
                  aiGenerated: true,
                  evidence: [
                    'Deployed models using TF Serving',
                    'Experience with SavedModel format',
                    'Basic knowledge of model versioning'
                  ],
                  reasoning: 'Good practical deployment experience'
                },
                {
                  name: 'Computer Vision Applications',
                  covered: true,
                  quality: 8,
                  aiGenerated: true,
                  evidence: [
                    'Built CNN models for image classification',
                    'Implemented data augmentation pipelines',
                    'Experience with pretrained models (ResNet, EfficientNet)'
                  ],
                  reasoning: 'Strong CV project experience'
                },
                {
                  name: 'Model Monitoring',
                  covered: true,
                  quality: 6,
                  aiGenerated: true,
                  evidence: [
                    'Uses TensorBoard for training visualization',
                    'Basic metrics tracking in production',
                    'Limited experience with drift detection'
                  ],
                  reasoning: 'Foundational monitoring practices with growth potential'
                }
              ],
              aiAnalysis: {
                qualityScore: 7,
                reasoning: 'Solid practical experience with focus on computer vision',
                indicators: ['Deployment', 'Computer vision', 'Production systems']
              }
            }
          }
        },

        completedAreas: ['technical_depth', 'problem_approach', 'learning_ability', 'practical_experience'],
        nextRecommendedArea: 'Advanced Custom Components',
        lastUpdated: now,

        aiAnalysis: {
          totalCoverage: 68,
          strongestAreas: ['Keras API', 'Data Pipelines', 'Transfer Learning'],
          weakestAreas: ['Custom Training Loops', 'Advanced Optimization', 'Distributed Training'],
          recommendedFocus: [
            'Master custom training loops with GradientTape',
            'Learn distributed training with tf.distribute',
            'Explore TFX for production ML pipelines',
            'Study model optimization techniques (quantization, pruning)',
            'Practice with TensorFlow Extended (TFX) ecosystem'
          ]
        },

        recommendations: [
          'Deepen knowledge of custom training loops and GradientTape',
          'Learn distributed training strategies for large-scale models',
          'Explore TensorFlow Extended (TFX) for production pipelines',
          'Practice model optimization for edge deployment',
          'Study advanced callbacks and custom metrics implementation'
        ],

        scores: {
          communication: 67,
          technical_depth: 70,
          problem_approach: 67,
          learning_ability: 65,
          overall: 68
        },

        timestamp: now
      },

      analytics: {
        duration: 1800, // 30 minutes
        messageCount: 26,
        silenceEvents: 2,
        coveragePercentage: 68,
        completedAreas: 4,
        totalAreas: 4,
        averageResponseLength: 132,
        interactionStyle: 'structured and methodical'
      }
    },

    candidateId: PROFILE_ID,
    status: 'completed',
    createdAt: now,
    updatedAt: now
  }
];

async function seedAssessments() {
  try {
    console.log('Starting assessment seeder for finley.lee@yopmail.com...\n');

    console.log('Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✓ Connected to MongoDB\n');

    // Verify profile exists
    const profile = await Profile.findById(PROFILE_ID);
    if (!profile) {
      console.log('❌ Profile not found!');
      await mongoose.connection.close();
      return;
    }

    console.log(`✓ Profile found: ${profile.firstName} ${profile.lastName}\n`);
    console.log('Creating assessments...\n');

    const results = [];

    for (const assessmentData of assessments) {
      console.log(`Creating ${assessmentData.metadata.skill} assessment...`);

      // Create assessment
      const assessment = new InterviewAssessment(assessmentData);
      await assessment.save();

      console.log(`  ✓ Assessment created with ID: ${assessment._id}`);
      console.log(`    - Skill: ${assessmentData.metadata.skill}`);
      console.log(`    - Score: ${assessmentData.interviewData.finalReport.scores.overall}/100`);
      console.log(`    - Coverage: ${assessmentData.interviewData.finalReport.coverage.overall}%`);
      console.log(`    - Session ID: ${assessmentData.interviewData.sessionId}\n`);

      results.push({
        skill: assessmentData.metadata.skill,
        id: assessment._id,
        score: assessmentData.interviewData.finalReport.scores.overall
      });

      // Add to profile's interviewDetails
      if (!profile.interviewDetails.includes(assessment._id)) {
        profile.interviewDetails.push(assessment._id);
      }

      // Increment quota
      profile.quota = (profile.quota || 0) + 1;

      // Update or add skill
      const existingSkillIndex = profile.skills.findIndex(
        s => s.name === assessmentData.metadata.skill
      );

      const score = assessmentData.interviewData.finalReport.scores.overall;
      let proficiencyLevel;
      let experienceLevel;

      // Calculate proficiency based on score
      if (score >= 80) {
        proficiencyLevel = 5;
        experienceLevel = 'Expert';
      } else if (score >= 60) {
        proficiencyLevel = 4;
        experienceLevel = 'Senior';
      } else if (score >= 40) {
        proficiencyLevel = 3;
        experienceLevel = 'Mid Level';
      } else if (score >= 20) {
        proficiencyLevel = 2;
        experienceLevel = 'Junior';
      } else {
        proficiencyLevel = 1;
        experienceLevel = 'Entry Level';
      }

      if (existingSkillIndex !== -1) {
        // Update existing skill
        profile.skills[existingSkillIndex].ScoreTest = score;
        profile.skills[existingSkillIndex].proficiencyLevel = proficiencyLevel;
        profile.skills[existingSkillIndex].experienceLevel = experienceLevel;
        profile.skills[existingSkillIndex].NumberTestPassed =
          (profile.skills[existingSkillIndex].NumberTestPassed || 0) + 1;
        profile.skills[existingSkillIndex].Levelconfirmed = proficiencyLevel - 1;

        console.log(`  ✓ Updated existing skill: ${assessmentData.metadata.skill}`);
      } else {
        // Add new skill
        profile.skills.push({
          name: assessmentData.metadata.skill,
          proficiencyLevel: proficiencyLevel,
          experienceLevel: experienceLevel,
          NumberTestPassed: 1,
          ScoreTest: score,
          Levelconfirmed: proficiencyLevel - 1,
          isPrimary: true
        });

        console.log(`  ✓ Added new skill: ${assessmentData.metadata.skill}`);
      }
    }

    // Save profile
    await profile.save();
    console.log('\n✓ Profile updated successfully\n');

    // Summary
    console.log('═══════════════════════════════════════════════════════');
    console.log('SEEDING COMPLETE');
    console.log('═══════════════════════════════════════════════════════');
    console.log(`User: ${profile.firstName} ${profile.lastName} (${profile.userId})`);
    console.log(`Profile ID: ${PROFILE_ID}`);
    console.log(`New Quota: ${profile.quota}`);
    console.log(`Total Assessments: ${profile.interviewDetails.length}`);
    console.log(`Total Skills: ${profile.skills.length}\n`);

    console.log('Assessments Added:');
    results.forEach((result, index) => {
      console.log(`  ${index + 1}. ${result.skill}`);
      console.log(`     - Assessment ID: ${result.id}`);
      console.log(`     - Score: ${result.score}/100`);
    });

    console.log('\n═══════════════════════════════════════════════════════\n');

    await mongoose.connection.close();
    console.log('✓ Database connection closed');

  } catch (error) {
    console.error('❌ Error during seeding:', error);
    await mongoose.connection.close();
    process.exit(1);
  }
}

seedAssessments();
