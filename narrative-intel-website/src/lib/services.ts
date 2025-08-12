import { Service } from '@/types'

export const services: Service[] = [
  {
    id: 'niq-audit',
    title: 'nIQ Audit: Measuring Your Narrative Intelligence',
    duration: '1 month',
    description: 'A comprehensive assessment designed to measure and strengthen your organization\'s narrative intelligence capacity.',
    outputs: [
      'Comprehensive diagnostic report outlining areas of narrative coherence and fragmentation',
      'Baseline nIQ score that can evolve over time',
      'Custom framework for building semantic alignment across teams and functions'
    ],
    outcomes: [
      'Step-change in how your organization understands itself',
      'High-resolution view of your current semantic ecosystem',
      'Understanding of how meaning is being created, lost, or misaligned across teams'
    ],
    tiers: [
      {
        name: 'Essential',
        description: 'Core audit including diagnostic report, nIQ score, and narrative coherence framework',
        price: '$12,000'
      },
      {
        name: 'Extended',
        description: 'Includes staff interviews, semantic analysis, and early-stage ontology or taxonomy mapping',
        price: '$16,000'
      },
      {
        name: 'Comprehensive',
        description: 'Adds internal workshops, strategic facilitation, and data tooling as needed',
        price: '$20,000+'
      }
    ]
  },
  {
    id: 'narrative-mapping',
    title: 'Narrative Mapping & Strategic Insight',
    duration: '3 months',
    description: 'Sustained, high-touch support in identifying relevant meaning-rich data, generating deep insights, and translating those insights into action.',
    outputs: [
      'Biweekly Narrative Briefings: synthesized insight reports tracking emergent metaphors, discursive shifts, and strategic openings',
      'Data Support & Advisory: help with identifying and integrating the correct internal or public data',
      'Strategic Intervention Design: support in developing communication or narrative-based interventions',
      'Impact Monitoring Framework: guidance on how to assess narrative traction and build lightweight semantic M&E system'
    ],
    outcomes: [
      'Live capacity for narrative foresight and intervention',
      'Move from isolated signals to structured sense-making',
      'Embedded thinking partner and narrative intelligence team',
      'Advanced analytics and ML tools for narrative data at scale'
    ],
    tiers: [
      {
        name: 'Core',
        description: 'Includes POV workshop, biweekly briefings, ongoing advisory, and basic insight synthesis and narrative analysis',
        price: '$10,000 (3 months)'
      },
      {
        name: 'Enhanced',
        description: 'Adds data sourcing, custom NLP/ML pipelines, intervention design, and early M&E framework',
        price: '$25,000 (3 months)'
      },
      {
        name: 'Comprehensive',
        description: 'Full semantic tooling support, co-designed strategy sessions, and detailed outcome monitoring and custom dashboards',
        price: '$30,000+ (3 months)'
      },
      {
        name: 'Retainer',
        description: 'All of the above, with guaranteed strategic support, flexible advisory time, and expanded narrative/data capacity',
        price: '$10,000 per month (Min 6 months)'
      }
    ]
  },
  {
    id: 'building-capacity',
    title: 'Building nIQ Capacity',
    duration: '6-10 months',
    description: 'A deep, cohort-based program designed to embed narrative intelligence into the core of your organization.',
    outputs: [
      'A trained cohort of certified narrative practitioners with shared conceptual foundation',
      'A live narrative intelligence system embedded in organizational strategy and operations',
      'Custom-built tools and workflows to support ongoing narrative sensing and intervention',
      'Organizational sense-making practices aligned with your purpose and field',
      'A culture of reflexive meaning-making that improves coordination, clarity, and action'
    ],
    outcomes: [
      'Innate capacity for narrative intelligence distributed across key teams',
      'Ability to perceive and respond to narrative shifts in real time',
      'Align data, communication, and decision-making through shared semantic lens',
      'Build coherence between vision, voice, and action',
      'Operate with strategic adaptability in complex and contested environments'
    ],
    tiers: [
      {
        name: 'Up to 5 people',
        description: 'Small team or leadership cohort. Full curriculum, strategic facilitation, light advisory tooling',
        price: '$40,000'
      },
      {
        name: '6–10 people',
        description: 'Mid-sized team or cross-functional group. Includes complete training, live support, and custom integration design',
        price: '$55,000'
      },
      {
        name: '11–15 people',
        description: 'Whole cohort with deep organizational reach. Includes tailored implementation, practice embedding, and internal capacity transfer',
        price: '$70,000'
      },
      {
        name: '15+ people',
        description: 'For large organizations or federated teams. Includes layered facilitation, internal trainer development, and scalable narrative systems',
        price: 'Custom'
      }
    ]
  }
]