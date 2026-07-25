import { GrammarLesson } from '@/types';

export const grammarLessons: GrammarLesson[] = [
  {
    "id": "alphabet",
    "title": "English Alphabet & Sounds",
    "level": "A1",
    "shortDesc": "Master the 26 letters, basic phonics, and pronunciation rules.",
    "shortDescKhmer": "រៀនអក្សរទាំង ២៦ ការបញ្ចេញសំឡេង និងច្បាប់ប្រកបពាក្យមូលដ្ឋាន។",
    "explanation": "The English alphabet consists of 26 letters: 5 vowels (A, E, I, O, U) and 21 consonants. Understanding alphabet pronunciation and phonetic sounds is crucial for spelling and pronunciation.",
    "explanationKhmer": "អក្សរក្រមភាសាអង់គ្លេសមាន ២៦ តួ៖ ស្រៈ ៥ តួ (A, E, I, O, U) និងព្យញ្ជនៈ ២១ តួ។ ការយល់ដឹងអំពីការបញ្ចេញសំឡេងអក្សរក្រម និងសំឡេងសូរស័ព្ទ គឺមានសារៈសំខាន់ខ្លាំងណាស់សម្រាប់ការប្រកប និងការបញ្ចេញសំឡេង។",
    "formula": "A, B, C... (26 Letters) | Vowels: A, E, I, O, U | Consonants: B, C, D...",
    "formulaKhmer": "តួអក្សរ ២៦ | ស្រៈ: A, E, I, O, U | ព្យញ្ជនៈ: B, C, D, F, G...",
    "whenToUse": [
      "Use letter names when spelling out names or codes.",
      "Use phonetic sounds (phonics) to blend letters and read new words."
    ],
    "whenToUseKhmer": [
      "ប្រើប្រាស់ឈ្មោះអក្សរនៅពេលប្រកបឈ្មោះ ឬកូដផ្សេងៗ។",
      "ប្រើប្រាស់សំឡេងសូរស័ព្ទ (Phonics) ដើម្បីផ្សំអក្សរ និងអានពាក្យថ្មីៗ។"
    ],
    "positiveExamples": [
      "A is for Apple (/ˈæp.əl/)",
      "B is for Book (/bʊk/)",
      "C is for Cat (/kæt/)"
    ],
    "positiveExamplesKhmer": [
      "A សម្រាប់ពាក្យ Apple (ផ្លែប៉ោម)",
      "B សម្រាប់ពាក្យ Book (សៀវភៅ)",
      "C សម្រាប់ពាក្យ Cat (ឆ្មា)"
    ],
    "negativeExamples": [
      "Vowels do not always have a single sound (e.g., \"cat\" /æ/ vs. \"car\" /ɑː/).",
      "Consonants like \"C\" do not only sound hard (e.g., \"cat\" /k/ vs. \"city\" /s/)."
    ],
    "negativeExamplesKhmer": [
      "ស្រៈមិនមែនតែងតែមានសំឡេងតែមួយនោះទេ (ឧទាហរណ៍៖ \"cat\" សំឡេង /æ/ និង \"car\" សំឡេង /ɑː/)។",
      "ព្យញ្ជនៈដូចជា \"C\" មិនមែនមានតែសំឡេងរឹងនោះទេ (ឧទាហរណ៍៖ \"cat\" សំឡេង /k/ និង \"city\" សំឡេង /s/)។"
    ],
    "questionForm": "How do you spell your name? | Can you repeat that letter?",
    "questionFormKhmer": "តើអ្នកប្រកបឈ្មោះរបស់អ្នកយ៉ាងដូចម្តេច? | តើអ្នកអាចអានតួអក្សរនោះឡើងវិញបានទេ?",
    "visualTimeline": "[Letter Sound] --> [Word Blend] --> [Sentence Pronunciation]",
    "visualTimelineKhmer": "[សំឡេងអក្សរ] --> [ការផ្សំពាក្យ] --> [ការបញ្ចេញសំឡេងប្រយោគ]",
    "examples": [
      {
        "english": "A - B - C - D - E - F - G",
        "translation": "Alphabet names practice.",
        "translationKhmer": "ការអនុវត្តឈ្មោះអក្សរក្រម។"
      }
    ],
    "tips": [
      "Practice the distinction between \"B\" (/biː/) and \"V\" (/viː/).",
      "Vowels are the heart of syllables; every English word must contain a vowel sound."
    ],
    "commonMistakes": [
      {
        "incorrect": "Pronouncing \"recipe\" as /res-aip/.",
        "correct": "Pronouncing \"recipe\" as /ˈres.ə.pi/.",
        "explanation": "Many English words are not pronounced exactly as they are written due to irregular phonetics."
      }
    ],
    "summary": "The English alphabet has 26 letters. Vowels (a, e, i, o, u) can make short or long sounds. Consonants have fixed or conditional sounds.",
    "summaryKhmer": "អក្សរក្រមអង់គ្លេសមាន ២៦ តួ។ ស្រៈ (a, e, i, o, u) អាចបង្កើតសំឡេងខ្លី ឬវែង។ ព្យញ្ជនៈមានសំឡេងថេរ ឬសំឡេងតាមលក្ខខណ្ឌ។",
    "practiceQuestions": [
      {
        "id": "alp-q1",
        "question": "How many vowels are in the English alphabet?",
        "options": [
          "3",
          "5",
          "7"
        ],
        "correctAnswer": "5"
      },
      {
        "id": "alp-q2",
        "question": "Which of the following is a consonant?",
        "options": [
          "A",
          "E",
          "F"
        ],
        "correctAnswer": "F"
      }
    ]
  },
  {
    "id": "articles",
    "title": "Articles (A, An, The)",
    "level": "A1",
    "shortDesc": "Learn how and when to use the English articles 'a', 'an', and 'the' correctly with singular and plural nouns.",
    "shortDescKhmer": "ស្វែងយល់ពីរបៀប និងពេលណាត្រូវប្រើប្រាស់អត្ថបទ (Articles) 'a', 'an' និង 'the' ក្នុងភាសាអង់គ្លេសឱ្យបានត្រឹមត្រូវ។",
    "explanation": "Articles are words that define a noun as specific or unspecific. In English, there are two types of articles: Definite ('the') and Indefinite ('a', 'an').\n\n1. **Indefinite Articles ('A' and 'An')**: We use 'a' or 'an' with singular, countable nouns when we are talking about something in general, or for the first time. Use 'a' before consonant sounds (e.g., *a cat*, *a university*) and 'an' before vowel sounds (e.g., *an apple*, *an hour*).\n\n2. **Definite Article ('The')**: We use 'the' with specific singular or plural nouns when the listener or reader already knows which thing we are talking about, or when there is only one of something (e.g., *the sun*, *the moon*).",
    "explanationKhmer": "Articles គឺជាពាក្យដែលកំណត់នាមថាជាក់លាក់ ឬមិនជាក់លាក់។ ក្នុងភាសាអង់គ្លេស មាន articles ពីរប្រភេទគឺ Definite ('the') និង Indefinite ('a', 'an')។\n\n១. **Indefinite Articles ('A' និង 'An')**: យើងប្រើ 'a' ឬ 'an' ជាមួយនឹងនាមឯកវចនៈដែលរាប់បាន នៅពេលដែលយើងនិយាយអំពីអ្វីមួយជាទូទៅ ឬជាលើកដំបូង។ ប្រើ 'a' មុនសំឡេងព្យញ្ជនៈ និងប្រើ 'an' មុនសំឡេងស្រៈ។\n\n២. **Definite Article ('The')**: យើងប្រើ 'the' ជាមួយនឹងនាមជាក់លាក់ទាំងឯកវចនៈ និងពហុវចនៈ នៅពេលដែលអ្នកស្តាប់ ឬអ្នកអានដឹងរួចហើយថាហ្វូង ឬវត្ថុអ្វីដែលយើងកំពុងនិយាយដល់ ឬនៅពេលដែលមានតែមួយគត់ក្នុងលោក។",
    "formula": "Article ('a'/'an'/'the') + Noun",
    "formulaKhmer": "អត្ថបទ ('a'/'an'/'the') + នាម",
    "whenToUse": [
      "Use 'a' or 'an' for singular countable nouns mentioned for the first time.",
      "Use 'the' for specific nouns that both the speaker and listener know.",
      "Use 'the' when there is only one of something in the context or world."
    ],
    "whenToUseKhmer": [
      "ប្រើ 'a' ឬ 'an' ចំពោះនាមឯកវចនៈដែលរាប់បាន ដែលទើបតែលើកឡើងជាលើកដំបូង។",
      "ប្រើ 'the' ចំពោះនាមជាក់លាក់ដែលទាំងអ្នកនិយាយ និងអ្នកស្តាប់បានដឹងស្គាល់រួចហើយ។",
      "ប្រើ 'the' នៅពេលដែលមានរបស់អ្វីមួយតែមួយគត់ក្នុងបរិបទ ឬក្នុងពិភពលោក។"
    ],
    "positiveExamples": [
      "I have a dog and a cat.",
      "The sun is very hot today."
    ],
    "positiveExamplesKhmer": [
      "ខ្ញុំមានឆ្កែមួយ និងឆ្មា១។",
      "ព្រះអាទិត្យគឺក្តៅខ្លាំងណាស់ថ្ងៃនេះ។"
    ],
    "negativeExamples": [
      "I saw dog in the street.",
      "She wants buy an car."
    ],
    "negativeExamplesKhmer": [
      "ខ្ញុំបានឃើញឆ្កែនៅលើផ្លូវ។ (ខ្វះ article)",
      "នាងចង់ទិញឡាន១។ (ខ្វះ article និងការប្រើប្រាស់ผิด)"
    ],
    "questionForm": "Is this a/an/the [noun]?",
    "questionFormKhmer": "ទម្រង់សំណួរ៖ តើនេះជា [នាម] មែនទេ?",
    "visualTimeline": "General/Unknown (A/An) -> Specific/Known (The)",
    "visualTimelineKhmer": "ទូទៅ/មិនស្គាល់ (A/An) -> ជាក់លាក់/ស្គាល់រួច (The)",
    "examples": [
      {
        "english": "She is reading a book.",
        "translation": "She is reading any book, for the first time.",
        "translationKhmer": "នាងកំពុងអានសៀវភៅមួយក្បាល។",
        "note": "'Book' starts with a consonant sound, so we use 'a'."
      },
      {
        "english": "Please close the door.",
        "translation": "Both speakers know which specific door to close.",
        "translationKhmer": "សូមបិទទ្វារនោះផង។",
        "note": "We use 'the' because the listener knows the specific door."
      }
    ],
    "tips": [
      "Remember that 'an' is based on the *sound* of the first letter, not the letter itself (e.g., *an hour* because 'h' is silent).",
      "Do not use 'a' or 'an' with plural nouns or uncountable nouns."
    ],
    "commonMistakes": [
      {
        "incorrect": "I want to eat apple.",
        "correct": "I want to eat an apple.",
        "explanation": "Singular countable nouns like 'apple' require an article ('a' or 'an') before them."
      }
    ],
    "summary": "Use 'a' and 'an' for general singular nouns, and 'the' for specific nouns.",
    "summaryKhmer": "ប្រើ 'a' និង 'an' សម្រាប់នាមឯកវចនៈទូទៅ និង 'the' សម្រាប់នាមជាក់លាក់។",
    "practiceQuestions": [
      {
        "id": "q1",
        "question": "Choose the correct article: I saw ___ elephant at the zoo.",
        "options": [
          "a",
          "an",
          "the",
          "no article"
        ],
        "correctAnswer": "an"
      },
      {
        "id": "q2",
        "question": "Choose the correct article: Can you pass me ___ salt, please?",
        "options": [
          "a",
          "an",
          "the",
          "none"
        ],
        "correctAnswer": "the"
      }
    ]
  },
  {
    "id": "be-verb",
    "title": "To Be Verb (Am / Is / Are)",
    "level": "A1",
    "shortDesc": "Master the basic present tense forms of the verb 'to be' (am, is, are) to introduce yourself, describe people, and state locations.",
    "shortDescKhmer": "ស្វែងយល់ពីទម្រង់បច្ចុប្បន្នកាលមូលដ្ឋាននៃកិរិយាសព្ទ 'to be' (am, is, are) ដើម្បីណែនាំខ្លួនឯង ពណ៌នាអំពីមនុស្ស និងប្រាប់ទីតាំង។",
    "explanation": "The verb 'to be' is one of the most important verbs in the English language. In the simple present tense, it changes its form depending on the subject: 'am', 'is', or 'are'. We use 'I' with 'am', singular nouns and pronouns ('he', 'she', 'it') with 'is', and plural nouns and pronouns ('we', 'you', 'they') with 'are'.\n\nThese verbs do not show an action like 'run' or 'eat'. Instead, they act like a bridge connecting the subject to a description, a profession, an age, a feeling, or a place. Understanding 'am, is, are' is the essential first step to forming basic sentences in English.",
    "explanationKhmer": "កិរិយាសព្ទ 'to be' គឺជាកិរិយាសព្ទដ៏សំខាន់បំផុតមួយក្នុងភាសាអង់គ្លេស។ នៅកាលបច្ចុប្បន្នកាលធម្មតា វាប្តូរទម្រង់អាស្រ័យលើប្រធានគឺ៖ 'am', 'is', ឬ 'are'។ យើងប្រើ 'I' ជាមួយ 'am' នាមឯកវចនៈ និងសព្វនាម ('he', 'she', 'it') ជាមួយ 'is' ហើយនាមពហុវចនៈ និងសព្វនាម ('we', 'you', 'they') ជាមួយ 'are'។\n\nកិរិយាសព្ទទាំងនេះមិនបង្ហាញពីសកម្មភាពដូចជា 'រត់' ឬ 'ញ៉ាំ' នោះទេ។ ប៉ុន្តែពួកវាដើរតួជាស្ពានភ្ជាប់ប្រធានទៅនឹងការពណ៌នា មុខរបរ អាយុ អារម្មណ៍ ឬទីកន្លែង។ ការយល់ដឹងពី 'am, is, are' គឺជាជំហានដំបូងដ៏សំខាន់បំផុតក្នុងការបង្កើតប្រយោគមូលដ្ឋានជាភាសាអង់គ្លេស។",
    "formula": "Subject + am / is / are + Complement (Noun / Adjective / Place)",
    "formulaKhmer": "ប្រធាន (Subject) + am / is / are + ពាក្យបំពេញ (នាម / គុណនាម / ទីកន្លែង)",
    "whenToUse": [
      "To state your name or identity",
      "To describe feelings, conditions, or physical traits",
      "To tell your profession, nationality, or age"
    ],
    "whenToUseKhmer": [
      "ដើម្បីប្រាប់ឈ្មោះ ឬអត្តសញ្ញាណរបស់អ្នក",
      "ដើម្បីពណ៌នាអារម្មណ៍ លក្ខខណ្ឌ ឬរូបរាងកាយ",
      "ដើម្បីប្រាប់មុខរបរ សញ្ជាតិ ឬអាយុរបស់អ្នក"
    ],
    "positiveExamples": [
      "I am a student.",
      "She is happy today."
    ],
    "positiveExamplesKhmer": [
      "ខ្ញុំគឺជាសិស្សម្នាក់។",
      "គាត់ (ស្រី) មានសេចក្តីសុខថ្ងៃនេះ។"
    ],
    "negativeExamples": [
      "I am not tired.",
      "They are not at home."
    ],
    "negativeExamplesKhmer": [
      "ខ្ញុំមិនអស់កម្លាំងទេ។",
      "ពួកគេមិននៅផ្ទះទេ។"
    ],
    "questionForm": "Am / Is / Are + Subject + Complement + ?",
    "questionFormKhmer": "Am / Is / Are + ប្រធាន (Subject) + ពាក្យបំពេញ + ?",
    "visualTimeline": "Present state or condition (Now)",
    "visualTimelineKhmer": "ស្ថានភាព ឬលក្ខខណ្ឌបច្ចុប្បន្ន (ឥឡូវនេះ)",
    "examples": [
      {
        "english": "I am twenty years old.",
        "translation": "Stating age using the 'to be' verb",
        "translationKhmer": "ខ្ញុំមានអាយុម្ភៃឆ្នាំ។",
        "note": "In English, we use 'to be' for age, not 'to have'."
      },
      {
        "english": "Paris is a beautiful city.",
        "translation": "Describing a place with 'is' for singular noun",
        "translationKhmer": "ប៉ារីសគឺជាទីក្រុងដ៏ស្រស់ស្អាតមួយ។",
        "note": "Paris is singular, so we use 'is'."
      },
      {
        "english": "We are ready for the test.",
        "translation": "Expressing a joint condition using 'are'",
        "translationKhmer": "ពួកយើងរួចរាល់ហើយសម្រាប់ពេលប្រឡង។",
        "note": "'We' is plural, so it takes 'are'."
      }
    ],
    "tips": [
      "Remember the golden rule: I = am, He/She/It = is, We/You/They = are.",
      "Use contractions in speaking to sound more natural (e.g., I'm, You're, He's, She's, It's, We're, They're)."
    ],
    "commonMistakes": [
      {
        "incorrect": "She are a doctor.",
        "correct": "She is a doctor.",
        "explanation": "'She' is a singular pronoun, so it must use 'is', not 'are'."
      },
      {
        "incorrect": "I happy.",
        "correct": "I am happy.",
        "explanation": "You cannot omit the 'to be' verb in English descriptive sentences. Always include 'am'."
      }
    ],
    "summary": "The verb 'to be' links the subject to a description or identity, changing to 'am', 'is', or 'are' depending on the subject pronoun.",
    "summaryKhmer": "កិរិយាសព្ទ 'to be' ភ្ជាប់ប្រធានទៅនឹងការពណ៌នា ឬអត្តសញ្ញាណ ដោយប្តូរទៅជា 'am', 'is', ឬ 'are' អាស្រ័យលើសព្វនាមប្រធាន។",
    "practiceQuestions": [
      {
        "id": "q1",
        "question": "Choose the correct form: My brother _____ a teacher.",
        "options": [
          "am",
          "is",
          "are",
          "be"
        ],
        "correctAnswer": "is"
      },
      {
        "id": "q2",
        "question": "Choose the correct form: You _____ very kind.",
        "options": [
          "am",
          "is",
          "are",
          "be"
        ],
        "correctAnswer": "are"
      }
    ]
  },
  {
    "id": "can-cant",
    "title": "Modal: Can / Can't",
    "level": "A1",
    "shortDesc": "Express ability, permission, and requests.",
    "shortDescKhmer": "បង្ហាញអំពីសមត្ថភាព ការអនុញ្ញាត និងការស្នើសុំ។",
    "explanation": "The modal verb \"can\" expresses ability to do something, permission, or possibilities. Its negative form is \"cannot\" (or the contraction \"can't\"). It is followed by the bare infinitive.",
    "explanationKhmer": "កិរិយាសព្ទជំនួយ (Modal Verb) \"can\" បង្ហាញអំពីសមត្ថភាពអាចធ្វើអ្វីមួយ ការអនុញ្ញាត ឬលទ្ធភាព។ ទម្រង់បដិសេធរបស់វាគឺ \"cannot\" (ឬទម្រង់កាត់ \"can't\")។ វាត្រូវបានតាមពីក្រោយដោយកិរិយាសព្ទដើមគ្មាន \"to\" (Bare Infinitive)។",
    "formula": "Subject + can/can't + Verb (Base form) | Can + Subject + Verb?",
    "formulaKhmer": "ប្រធាន + can/can't + កិរិយាសព្ទដើម | Can + ប្រធាន + កិរិយាសព្ទដើម?",
    "whenToUse": [
      "To speak about learned skills (I can speak English).",
      "To ask for or give permission (You can go now)."
    ],
    "whenToUseKhmer": [
      "ដើម្បីនិយាយអំពីជំនាញដែលបានរៀន (ខ្ញុំអាចនិយាយភាសាអង់គ្លេសបាន)។",
      "ដើម្បីសុំ ឬផ្តល់ការអនុញ្ញាត (អ្នកអាចទៅបានហើយ)។"
    ],
    "positiveExamples": [
      "I can swim.",
      "She can write code."
    ],
    "positiveExamplesKhmer": [
      "ខ្ញុំអាចហែលទឹកបាន។",
      "នាងអាចសរសេរកូដបាន។"
    ],
    "negativeExamples": [
      "He can't swim.",
      "We cannot open the gate."
    ],
    "negativeExamplesKhmer": [
      "គាត់មិនអាចហែលទឹកបានទេ។",
      "ពួកយើងមិនអាចបើកទ្វារបានទេ។"
    ],
    "questionForm": "Can you help me? | Where can we buy tickets?",
    "questionFormKhmer": "តើអ្នកអាចជួយខ្ញុំបានទេ? | តើយើងអាចទិញសំបុត្រនៅឯណា?",
    "visualTimeline": "[Ability State] ====> (Action Execution)",
    "visualTimelineKhmer": "[ស្ថានភាពសមត្ថភាព] ====> (ការអនុវត្តសកម្មភាព)",
    "examples": [
      {
        "english": "You can sit here.",
        "translation": "Giving permission.",
        "translationKhmer": "អ្នកអាចអង្គុយទីនេះបាន។"
      }
    ],
    "tips": [
      "Do not add \"s\" to \"can\" for singular subjects (he/she/it): say \"She can dance,\" not \"She cans dance.\"",
      "Never put \"to\" after can: say \"I can speak,\" not \"I can to speak.\""
    ],
    "commonMistakes": [
      {
        "incorrect": "He can to speak English.",
        "correct": "He can speak English.",
        "explanation": "The modal verb \"can\" must be followed by a bare infinitive verb without \"to\"."
      }
    ],
    "summary": "Use \"can\" for abilities and permission. Never follow it with \"to\" and do not modify \"can\" for third-person singular subjects.",
    "summaryKhmer": "ប្រើ \"can\" សម្រាប់សមត្ថភាព និងការអនុញ្ញាត។ មិនត្រូវតាមពីក្រោយដោយ \"to\" ឡើយ ហើយមិនត្រូវប្តូររូបរាង \"can\" ចំពោះប្រធានឯកវចនៈឡើយ។",
    "practiceQuestions": [
      {
        "id": "cnc-q1",
        "question": "Which sentence is correct?",
        "options": [
          "She can sings.",
          "She can to sing.",
          "She can sing."
        ],
        "correctAnswer": "She can sing."
      },
      {
        "id": "cnc-q2",
        "question": "Choose the correct negative option: \"They ______ drive a car.\"",
        "options": [
          "cant",
          "can't",
          "doesn't can"
        ],
        "correctAnswer": "can't"
      }
    ]
  },
  {
    "id": "demonstratives",
    "title": "Demonstratives (This, That, These, Those)",
    "level": "A1",
    "shortDesc": "Demonstratives are words used to point to specific objects based on their distance and quantity.",
    "shortDescKhmer": "ពាក្យចង្អុលបង្ហាញ (Demonstratives) គឺជាពាក្យដែលប្រើដើម្បីចង្អុលទៅកាន់វត្ថុជាក់លាក់ណាមួយដោយផ្អែកលើចម្ងាយនិងចំនួនរបស់វា។",
    "explanation": "### Understanding Demonstratives\n\nIn English, we use four specific words called 'demonstratives' to identify things near or far from us. The choice depends on two factors: \n1. **Distance**: Is the object close or far?\n2. **Number**: Is the object singular (one) or plural (more than one)?\n\n- **This**: Use for one object that is nearby.\n- **That**: Use for one object that is far away.\n- **These**: Use for two or more objects that are nearby.\n- **Those**: Use for two or more objects that are far away.",
    "explanationKhmer": "### ការយល់ដឹងអំពីពាក្យចង្អុលបង្ហាញ\n\nនៅក្នុងភាសាអង់គ្លេស យើងប្រើពាក្យបួនដែលហៅថា 'demonstratives' ដើម្បីសម្គាល់វត្ថុដែលនៅជិតឬឆ្ងាយពីយើង។ ការជ្រើសរើសប្រើប្រាស់អាស្រ័យលើកត្តាពីរ៖ \n១. **ចម្ងាយ**៖ តើវត្ថុនោះនៅជិតឬឆ្ងាយ?\n២. **ចំនួន**៖ តើវត្ថុនោះមានចំនួនមួយ (ឯកវចនៈ) ឬច្រើនជាងមួយ (ពហុវចនៈ)?\n\n- **This**៖ ប្រើសម្រាប់វត្ថុមួយដែលនៅជិត។\n- **That**៖ ប្រើសម្រាប់វត្ថុមួយដែលនៅឆ្ងាយ។\n- **These**៖ ប្រើសម្រាប់វត្ថុពីរឬច្រើនដែលនៅជិត។\n- **Those**៖ ប្រើសម្រាប់វត្ថុពីរឬច្រើនដែលនៅឆ្ងាយ។",
    "formula": "Demonstrative + (Noun) + (is/are) + ...",
    "formulaKhmer": "ពាក្យចង្អុលបង្ហាញ + (នាម) + (is/are) + ...",
    "whenToUse": [
      "Identifying an object held in your hand.",
      "Pointing to something across the room.",
      "Referring to objects in a group or plural items."
    ],
    "whenToUseKhmer": [
      "ការសម្គាល់វត្ថុដែលកំពុងកាន់ក្នុងដៃ។",
      "ការចង្អុលទៅអ្វីមួយដែលនៅម្ខាងទៀតនៃបន្ទប់។",
      "ការយោងទៅលើវត្ថុដែលមានច្រើនឬជាក្រុម។"
    ],
    "positiveExamples": [
      "This is my pen.",
      "These are my books."
    ],
    "positiveExamplesKhmer": [
      "នេះគឺជាប៊ិចរបស់ខ្ញុំ។",
      "ទាំងនេះគឺជាសៀវភៅរបស់ខ្ញុំ។"
    ],
    "negativeExamples": [
      "This are my pen.",
      "That is those pens."
    ],
    "negativeExamplesKhmer": [
      "ខុស៖ This មិនត្រូវប្រើជាមួយ are ទេ។",
      "ខុស៖ ការប្រើ that ជាមួយពហុវចនៈ (those) គឺមិនត្រឹមត្រូវទេ។"
    ],
    "questionForm": "Demonstrative + (Noun) + is/are...?",
    "questionFormKhmer": "ប្រើពាក្យចង្អុលបង្ហាញដើរតួជាប្រធាន រួចតាមដោយកិរិយាសព្ទជំនួយ (is/are)។",
    "visualTimeline": "Near (Present) vs Far (Distance).",
    "visualTimelineKhmer": "ជិត (បច្ចុប្បន្ន) ទល់នឹង ឆ្ងាយ (ចម្ងាយ)។",
    "examples": [
      {
        "english": "This is an apple.",
        "translation": "I am holding one apple close to me.",
        "translationKhmer": "នេះគឺជាផ្លែប៉ោមមួយ។",
        "note": "Use 'This' for singular, near objects."
      },
      {
        "english": "Those are birds.",
        "translation": "I am pointing at multiple birds far away.",
        "translationKhmer": "ទាំងនោះគឺជាសត្វស្លាប។",
        "note": "Use 'Those' for plural, far objects."
      }
    ],
    "tips": [
      "Remember: S-I-N-G-U-L-A-R uses 'is', P-L-U-R-A-L uses 'are'.",
      "Think of 'This/These' as 'near me' and 'That/Those' as 'not near me'."
    ],
    "commonMistakes": [
      {
        "incorrect": "These is my bag.",
        "correct": "This is my bag.",
        "explanation": "These is for plural objects; for a single bag, you must use This."
      }
    ],
    "summary": "Use This/These for items near you, and That/Those for items far away, ensuring you match the singular/plural verb.",
    "summaryKhmer": "ប្រើ This/These សម្រាប់របស់ដែលនៅជិត និង That/Those សម្រាប់របស់ដែលនៅឆ្ងាយ ដោយត្រូវប្រាកដថាប្រើកិរិយាសព្ទ 'is' ឬ 'are' ឱ្យបានត្រឹមត្រូវ។",
    "practiceQuestions": [
      {
        "id": "q1",
        "question": "Which word should you use for a pen that is in your hand?",
        "options": [
          "This",
          "That",
          "Those",
          "These"
        ],
        "correctAnswer": "This"
      },
      {
        "id": "q2",
        "question": "Choose the correct sentence.",
        "options": [
          "These is my friends.",
          "These are my friends.",
          "This are my friends.",
          "That are my friends."
        ],
        "correctAnswer": "These are my friends."
      }
    ]
  },
  {
    "id": "imperatives",
    "title": "Imperative Sentences & Requests",
    "level": "A1",
    "shortDesc": "Learn how to give direct commands, instructions, and polite requests using imperative sentences.",
    "shortDescKhmer": "ស្វែងយល់ពីរបៀបផ្តល់បញ្ជាផ្ទាល់ ការណែនាំ និងសំណើទន់ភ្លន់ដោយប្រើប្រាស់ប្រយោគបញ្ជា។",
    "explanation": "Imperative sentences are used to give commands, instructions, give warnings, or make requests. The most important rule about imperative sentences in English is that they do not need a subject. The subject \"you\" is always understood, so we start the sentence directly with the base form of a verb.\n\nTo make an imperative sentence negative, simply add \"Don't\" (or \"Do not\") before the base verb. If you want to make a command sound more polite, you can add the word \"Please\" at the beginning or at the end of the sentence.",
    "explanationKhmer": "ប្រយោគបញ្ជាត្រូវបានប្រើដើម្បីផ្តល់បញ្ជា ការណែនាំ ការព្រមាន ឬធ្វើសំណើ។ ច្បាប់ដ៏សំខាន់បំផុតអំពីប្រយោគបញ្ជាគឺថាពួកវាមិនត្រូវការប្រធានទេ។ ប្រធាន \"you\" គឺត្រូវគេយល់ជាស្រេច ដូច្នេះយើងចាប់ផ្តើមប្រយោគដោយផ្ទាល់ជាមួយទម្រង់ដើមនៃកិរិយាសព្ទ។\n\nដើម្បីធ្វើឱ្យប្រយោគបញ្ជាក្លាយជាអវិជ្ជមាន គ្រាន់តែបន្ថែមពាក្យ \"Don't\" (ឬ \"Do not\") មុនកិរិយាសព្ទដើម។ ប្រសិនបើអ្នកចង់ធ្វើឱ្យការបញ្ជាស្តាប់ទៅកាន់តែสุភាព អ្នកអាចបន្ថែមពាក្យ \"Please\" នៅដើម ឬចុងប្រយោគ។",
    "formula": "Base Verb + Object / Complement",
    "formulaKhmer": "កិរិយាសព្ទដើម + កម្មបទ / បំពេញបទ",
    "whenToUse": [
      "Giving direct orders or commands",
      "Giving instructions or directions",
      "Making polite requests or suggestions"
    ],
    "whenToUseKhmer": [
      "ការផ្តល់បញ្ជា ឬការបង្គាប់ដោយផ្ទាល់",
      "ការផ្តល់ការណែនាំ ឬទិសដៅ",
      "ការធ្វើសំណើ ឬយោបល់ដោយសុភាព"
    ],
    "positiveExamples": [
      "Open the door.",
      "Listen to the teacher."
    ],
    "positiveExamplesKhmer": [
      "សូមបើកទ្វារ។",
      "ស្តាប់គ្រូបង្រៀន។"
    ],
    "negativeExamples": [
      "Don't touch that!",
      "Don't be late."
    ],
    "negativeExamplesKhmer": [
      "កុំប៉ះរបស់នោះ!",
      "កុំមកយឺត។"
    ],
    "questionForm": "Not applicable for direct imperatives",
    "questionFormKhmer": "មិនមានសម្រាប់ប្រយោគបញ្ជាផ្ទាល់ទេ",
    "visualTimeline": "Present / Immediate Future Action",
    "visualTimelineKhmer": "សកម្មភាពបច្ចុប្បន្ន ឬអនាគតភ្លាមៗ",
    "examples": [
      {
        "english": "Sit down, please.",
        "translation": "Take a seat politely.",
        "translationKhmer": "សូមអង្គុយចុះ។",
        "note": "Adding 'please' makes the command a polite request."
      },
      {
        "english": "Don't speak loudly in the library.",
        "translation": "Keep your voice down.",
        "translationKhmer": "កុំនិយាយខ្លាំងៗនៅក្នុងបណ្ណាល័យ។",
        "note": "Use 'Don't' before the verb for negative commands."
      }
    ],
    "tips": [
      "Always use the base form of the verb (e.g., 'Go', not 'Goes' or 'Went').",
      "You can make any imperative polite by adding 'Please'."
    ],
    "commonMistakes": [
      {
        "incorrect": "You open the door.",
        "correct": "Open the door.",
        "explanation": "Imperative sentences do not include the subject 'You' because it is already understood."
      }
    ],
    "summary": "Use the base verb to give commands and add 'Don't' for negative commands without using a subject.",
    "summaryKhmer": "ប្រើកិរិយាសព្ទដើមដើម្បីផ្តល់បញ្ជា និងបន្ថែម 'Don't' សម្រាប់បញ្ជាអវិជ្ជមានដោយមិនបាច់ប្រើប្រធានទេ។",
    "practiceQuestions": [
      {
        "id": "q1",
        "question": "Which sentence is a correct imperative?",
        "options": [
          "You close the window.",
          "Closes the window.",
          "Close the window.",
          "Closing the window."
        ],
        "correctAnswer": "Close the window."
      },
      {
        "id": "q2",
        "question": "Choose the correct negative imperative.",
        "options": [
          "Don't run in the hallway.",
          "Not run in the hallway.",
          "No run in the hallway.",
          "Doesn't run in the hallway."
        ],
        "correctAnswer": "Don't run in the hallway."
      }
    ]
  },
  {
    "id": "possessives",
    "title": "Possessive Adjectives & Pronouns",
    "level": "A1",
    "shortDesc": "Learn how to show ownership in English using possessive adjectives (like my, your) and possessive pronouns (like mine, yours).",
    "shortDescKhmer": "ស្វែងយល់ពីរបៀបបង្ហាញភាពជាម្ចាស់នៅក្នុងភាសាអង់គ្លេសដោយប្រើគុណនាមបង្ហាញភាពជាម្ចាស់ (ដូចជា my, your) និងសនាមបង្ហាញភាពជាម្ចាស់ (ដូចជា mine, yours)។",
    "explanation": "Possessive adjectives (my, your, his, her, its, our, their) are used before a noun to show who owns something. They always come directly before the noun they describe.\n\nPossessive pronouns (mine, yours, his, hers, ours, theirs) replace a noun and a possessive adjective to avoid repeating information. They stand alone without a noun following them.",
    "explanationKhmer": "គុណនាមបង្ហាញភាពជាម្ចាស់ (my, your, his, her, its, our, their) ត្រូវបានប្រើនៅពីមុខនាមដើម្បីបង្ហាញថាអ្នកណាជាម្ចាស់របស់អ្វីមួយ។ ពួកវាតែងតែមកនៅពីមុខនាមដែលវាពណ៌នា។\n\nសនាមបង្ហាញភាពជាម្ចាស់ (mine, yours, his, hers, ours, theirs) ជំនួសให้นាមនិងគុណនាមបង្ហាញភាពជាម្ចាស់ដើម្បីជៀសវាងការនិយាយដដែលៗ។ ពួកវាឈរតែឯងដោយគ្មាននាមតាមក្រោយទេ។",
    "formula": "Possessive Adjective + Noun OR Noun + Be Verb + Possessive Pronoun",
    "formulaKhmer": "គុណនាមបង្ហាញភាពជាម្ចាស់ + នាម ឬ នាម + កិរិយាសព្ទ Be + សនាមបង្ហាញភាពជាម្ចាស់",
    "whenToUse": [
      "To show ownership or possession of an item",
      "To describe family or personal relationships",
      "To talk about body parts and personal belongings"
    ],
    "whenToUseKhmer": [
      "ដើម្បីបង្ហាញភាពជាម្ចាស់ ឬកម្មសិទ្ធិលើរបស់របរណាមួយ",
      "ដើម្បីពណ៌នាអំពីគ្រួសារ ឬទំនាក់ទំនងផ្ទាល់ខ្លួន",
      "ដើម្បីនិយាយអំពីផ្នែកផ្សេងៗនៃរាងកាយ និងសម្ភារៈផ្ទាល់ខ្លួន"
    ],
    "positiveExamples": [
      "This is my book.",
      "The red car is mine."
    ],
    "positiveExamplesKhmer": [
      "នេះគឺជាសៀវភៅរបស់ខ្ញុំ។",
      "ឡានពណ៌ក្រហមនោះគឺជាប់របស់ខ្ញុំ។"
    ],
    "negativeExamples": [
      "This is mine book.",
      "That is her."
    ],
    "negativeExamplesKhmer": [
      "នេះគឺជាសៀវភៅរបស់ខ្ញុំ (ខុសវេយ្យាករណ៍)។",
      "នោះគឺជា(នាង)របស់នាង (ខុសវេយ្យាករណ៍)។"
    ],
    "questionForm": "Whose + Noun + is this/that?",
    "questionFormKhmer": "សំនួរជាមួយ Whose ដើម្បីសួររកកម្មសិទ្ធិ",
    "visualTimeline": "Ownership is a permanent or ongoing state of belonging.",
    "visualTimelineKhmer": "ភាពជាម្ចាស់គឺជាស្ថានភាពអចិន្ត្រៃយ៍ ឬបន្តបន្ទាប់គ្នានៃការកាន់កាប់។",
    "examples": [
      {
        "english": "This is my pen.",
        "translation": "This pen belongs to me.",
        "translationKhmer": "នេះគឺជាប៊ិចរបស់ខ្ញុំ។",
        "note": "'My' is a possessive adjective placed before the noun 'pen'."
      },
      {
        "english": "That pen is mine.",
        "translation": "That pen belongs to me.",
        "translationKhmer": "ប៊ិចនោះគឺជាប់របស់ខ្ញុំ។",
        "note": "'Mine' is a possessive pronoun used at the end without a noun."
      }
    ],
    "tips": [
      "Remember: Possessive adjectives need a noun after them (my car), but possessive pronouns do not (the car is mine).",
      "Notice that 'its' (possessive adjective) does not have an apostrophe, unlike 'it's' (it is)."
    ],
    "commonMistakes": [
      {
        "incorrect": "This is a mine bag.",
        "correct": "This is my bag. / This bag is mine.",
        "explanation": "Do not put an article (a/an/the) before possessive pronouns, and do not use a possessive pronoun directly before a noun."
      }
    ],
    "summary": "Use possessive adjectives before nouns (my book) and possessive pronouns alone without nouns (the book is mine).",
    "summaryKhmer": "ប្រើប្រាស់គុណនាមបង្ហាញភាពជាម្ចាស់នៅពីមុខនាម (my book) និងសនាមបង្ហាញភាពជាម្ចាស់ដោយគ្មាននាមតាមក្រោយ (the book is mine)។",
    "practiceQuestions": [
      {
        "id": "q1",
        "question": "This is ___ cat. Her name is Luna.",
        "options": [
          "my",
          "mine",
          "I",
          "me"
        ],
        "correctAnswer": "my"
      },
      {
        "id": "q2",
        "question": "That blue jacket is not yours, it is ___.",
        "options": [
          "my",
          "her",
          "his",
          "he"
        ],
        "correctAnswer": "his"
      }
    ]
  },
  {
    "id": "prepositions-place-time",
    "title": "Prepositions of Place & Time (In, On, At)",
    "level": "A1",
    "shortDesc": "Master how to use the prepositions 'in', 'on', and 'at' correctly for both places and times.",
    "shortDescKhmer": "ស្វែងយល់ពីរបៀបប្រើប្រាស់បុរបទ «in», «on» និង «at» ឱ្យបានត្រឹមត្រូវសម្រាប់ទីកន្លែង និងពេលវេលា។",
    "explanation": "Prepositions of place and time are essential words that help us specify where things are located and when events happen. The three most common prepositions—'at', 'on', and 'in'—follow a general rule of a pyramid: from the most specific to the most general.\n\nFor Time:\n- **At** is used for precise times (e.g., *at 3:00 PM, at midnight, at lunchtime*).\n- **On** is used for days and dates (e.g., *on Monday, on July 4th, on my birthday*).\n- **In** is used for longer periods like months, years, seasons, and centuries (e.g., *in January, in 2026, in the summer*).\n\nFor Place:\n- **At** is used for a specific point or exact location (e.g., *at the door, at home, at the bus stop*).\n- **On** is used for surfaces or lines (e.g., *on the table, on the wall, on the floor*).\n- **In** is used for enclosed spaces or areas (e.g., *in a room, in a box, in Paris*).",
    "explanationKhmer": "បុរបទនៃទីកន្លែង និងពេលវេលា គឺជាពាក្យសំខាន់ៗដែលជួយឱ្យយើងបញ្ជាក់ពីទីតាំងរបស់វត្ថុ និងពេលណាដែលព្រឹត្តិការណ៍ណាមួយកើតឡើង។ បុរបទទាំងបីដែលប្រើញឹកញាប់បំផុតគឺ «at», «on» និង «in» ដែលមានទូទៅដូចជាពីរចនាសម្ព័ន្ធពីជាក់លាក់ទៅទូលំទូលាយ។\n\nសម្រាប់ពេលវេលា៖\n- **At** ប្រើសម្រាប់ពេលវេលាជាក់លាក់ (ឧទាហរណ៍៖ *at 3:00 PM, at midnight*)\n- **On** ប្រើសម្រាប់ថ្ងៃ និងកាលបរិច្ឆេទ (ឧទាហរណ៍៖ *on Monday, on July 4th*)\n- **In** ប្រើសម្រាប់រយៈពេលយូរដូចជាខែ ឆ្នាំ រដូវ និងសតវត្សរ៍ (ឧទាហរណ៍៖ *in January, in 2026*)\n\nសម្រាប់ទីកន្លែង៖\n- **At** ប្រើសម្រាប់ចំណុចជាក់លាក់ ឬទីតាំងពិតប្រាកដ (ឧទាហរណ៍៖ *at home, at the door*)\n- **On** ប្រើសម្រាប់ផ្ទៃរាបស្មើ ឬនៅលើបន្ទាត់ (ឧទាហរណ៍៖ *on the table, on the wall*)\n- **In** ប្រើសម្រាប់កន្លែងបិទជិត ឬតំបន់ធំ (ឧទាហរណ៍៖ *in a room, in Paris*)",
    "formula": "Preposition (At / On / In) + Time / Place Word",
    "formulaKhmer": "បុរបទ (At / On / In) + ពាក្យពេលវេលា / ទីកន្លែង",
    "whenToUse": [
      "Use 'at' for exact times and precise locations.",
      "Use 'on' for specific days, dates, and flat surfaces.",
      "Use 'in' for months, years, seasons, and enclosed spaces."
    ],
    "whenToUseKhmer": [
      "ប្រើ «at» សម្រាប់ពេលវេលាជាក់លាក់ និងទីតាំងជាក់លាក់។",
      "ប្រើ «on» សម្រាប់ថ្ងៃជាក់លាក់ កាលបរិច្ឆេទ និងផ្ទៃរាបស្មើ។",
      "ប្រើ «in» សម្រាប់ខែ ឆ្នាំ រដូវ និងកន្លែងបិទជិត។"
    ],
    "positiveExamples": [
      "I wake up at 7:00 AM in the morning.",
      "She lives in a house in London."
    ],
    "positiveExamplesKhmer": [
      "ខ្ញុំភ្ញាក់ពីគេងនៅម៉ោង ៧:០០ ព្រឹក។",
      "នាងរស់នៅក្នុងផ្ទះមួយក្នុងទីក្រុងឡុងដ៍។"
    ],
    "negativeExamples": [
      "I was born in Monday.",
      "He is at the room."
    ],
    "negativeExamplesKhmer": [
      "ខ្ញុំកើតនៅថ្ងៃចន្ទ។ (ខុស ត្រូវប្រើ on)",
      "គាត់ស្ថិតនៅក្នុងបន្ទប់។ (ខុស ត្រូវប្រើ in)"
    ],
    "questionForm": "Where/When + Verb + Subject + Preposition...?",
    "questionFormKhmer": "សំណួរចាប់ផ្តើមដោយ Where/When + កិរិយាសព្ទ + ប្រធាន + បុរបទ...?",
    "visualTimeline": "Specific (At) -> General Day/Surface (On) -> Broad Period/Enclosed Space (In)",
    "visualTimelineKhmer": "ជាក់លាក់ (At) -> ថ្ងៃ/ផ្ទៃរាបស្មើ (On) -> រយៈពេលទូលំទូលាយ/កន្លែងបិទជិត (In)",
    "examples": [
      {
        "english": "The meeting is at 2 PM on Tuesday in June.",
        "translation": "An example combining time from specific to broad.",
        "translationKhmer": "កិច្ចប្រជុំគឺនៅម៉ោង ២ រសៀល ថ្ងៃអង្គារ ក្នុងខែមិថុនា។",
        "note": "Notice the progression: at (time) -> on (day) -> in (month)."
      },
      {
        "english": "My keys are on the table in the kitchen.",
        "translation": "An example showing flat surface (on) and enclosed space (in).",
        "translationKhmer": "សោរបស់ខ្ញុំនៅលើតុក្នុងបន្ទប់បាយ។",
        "note": "Use 'on' for surfaces and 'in' for rooms."
      }
    ],
    "tips": [
      "Think of a pyramid: 'At' is the tip (very specific), 'On' is the middle (days/surfaces), and 'In' is the base (large spaces/long times).",
      "Always remember: 'at night', but 'in the morning' and 'in the afternoon'."
    ],
    "commonMistakes": [
      {
        "incorrect": "I will see you on the morning.",
        "correct": "I will see you in the morning.",
        "explanation": "Parts of the day like morning, afternoon, and evening take 'in', not 'on'."
      },
      {
        "incorrect": "She is at the car.",
        "correct": "She is in the car.",
        "explanation": "A car is an enclosed space, so we use 'in', not 'at'."
      }
    ],
    "summary": "Use 'at' for exact times/points, 'on' for days/surfaces, and 'in' for longer periods/enclosed spaces.",
    "summaryKhmer": "ប្រើ «at» សម្រាប់ពេលវេលា/ទីតាំងជាក់លាក់, «on» សម្រាប់ថ្ងៃ/ផ្ទៃរាបស្មើ និង «in» សម្រាប់រយៈពេលយូរ/កន្លែងបិទជិត។",
    "practiceQuestions": [
      {
        "id": "q1",
        "question": "My birthday is ___ July.",
        "options": [
          "at",
          "on",
          "in",
          "under"
        ],
        "correctAnswer": "in"
      },
      {
        "id": "q2",
        "question": "Please put the book ___ the desk.",
        "options": [
          "in",
          "at",
          "on",
          "to"
        ],
        "correctAnswer": "on"
      }
    ]
  },
  {
    "id": "present-continuous",
    "title": "Present Continuous Tense",
    "level": "A1",
    "shortDesc": "The Present Continuous tense describes actions that are happening right now at this moment.",
    "shortDescKhmer": "កាល Present Continuous ប្រើសម្រាប់ពិពណ៌នាអំពីសកម្មភាពដែលកំពុងតែកើតឡើងនៅពេលបច្ចុប្បន្ន។",
    "explanation": "The Present Continuous tense is formed by using the verb 'to be' (am/is/are) followed by the main verb with an '-ing' ending. It is used to show that an activity is in progress at the time of speaking. \n\nWhen adding '-ing' to verbs, most verbs simply take the ending (e.g., walk -> walking). If a verb ends in a silent 'e', remove the 'e' before adding '-ing' (e.g., make -> making). If a verb ends in a short vowel and a consonant, double the final consonant (e.g., sit -> sitting).",
    "explanationKhmer": "កាល Present Continuous ត្រូវបានបង្កើតឡើងដោយប្រើកិរិយាស័ព្ទ 'to be' (am/is/are) បូកនឹងកិរិយាស័ព្ទដើមដែលថែម '-ing' នៅខាងចុង។ វាត្រូវបានប្រើដើម្បីបង្ហាញថាសកម្មភាពមួយកំពុងតែប្រព្រឹត្តទៅនៅពេលដែលយើងកំពុងនិយាយ។ \n\nនៅពេលថែម '-ing' ទៅលើកិរិយាស័ព្ទ ភាគច្រើនយើងគ្រាន់តែថែម '-ing' ពីក្រោយតែម្តង (ដូចជា walk -> walking)។ ប្រសិនបើកិរិយាស័ព្ទបញ្ចប់ដោយអក្សរ 'e' ដែលមិនបញ្ចេញសំឡេង យើងត្រូវលុប 'e' ចេញសិនមុននឹងថែម '-ing' (ដូចជា make -> making)។ ប្រសិនបើកិរិយាស័ព្ទបញ្ចប់ដោយស្រៈខ្លីមួយ និងព្យញ្ជនៈមួយ យើងត្រូវថែមព្យញ្ជនៈនោះមួយតួទៀតមុននឹងថែម '-ing' (ដូចជា sit -> sitting)។",
    "formula": "Subject + am/is/are + Verb-ing",
    "formulaKhmer": "ប្រធាន (Subject) + am/is/are + កិរិយាស័ព្ទថែម ing",
    "whenToUse": [
      "Actions happening right now.",
      "Temporary situations that are happening around this time.",
      "Planned future arrangements."
    ],
    "whenToUseKhmer": [
      "សកម្មភាពដែលកំពុងកើតឡើងនៅពេលឥឡូវនេះ។",
      "ស្ថានភាពបណ្តោះអាសន្នដែលកំពុងកើតឡើងក្នុងអំឡុងពេលនេះ។",
      "ការគ្រោងទុកសម្រាប់ពេលអនាគត។"
    ],
    "positiveExamples": [
      "I am eating lunch.",
      "She is reading a book."
    ],
    "positiveExamplesKhmer": [
      "ខ្ញុំកំពុងញ៉ាំអាហារថ្ងៃត្រង់។",
      "នាងកំពុងអានសៀវភៅ។"
    ],
    "negativeExamples": [
      "I am not eating lunch.",
      "She is not reading a book."
    ],
    "negativeExamplesKhmer": [
      "ខ្ញុំមិនកំពុងញ៉ាំអាហារថ្ងៃត្រង់ទេ។",
      "នាងមិនកំពុងអានសៀវភៅទេ។"
    ],
    "questionForm": "Am/Is/Are + Subject + Verb-ing + ?",
    "questionFormKhmer": "ដាក់ Am/Is/Are មកខាងមុខប្រធាន រួចតាមដោយកិរិយាស័ព្ទថែម ing",
    "visualTimeline": "Past <--- [Present Continuous] ---> Future",
    "visualTimelineKhmer": "អតីតកាល <--- [កាលកំពុងប្រព្រឹត្តទៅ] ---> អនាគតកាល",
    "examples": [
      {
        "english": "They are playing football in the park.",
        "translation": "The group is currently engaged in the activity of football.",
        "translationKhmer": "ពួកគេកំពុងលេងបាល់ទាត់នៅក្នុងសួនច្បារ។",
        "note": "Use 'are' because 'they' is plural."
      },
      {
        "english": "He is running to catch the bus.",
        "translation": "The action of running is happening this very second.",
        "translationKhmer": "គាត់កំពុងរត់ដើម្បីចាប់ឡានក្រុងឱ្យទាន់។",
        "note": "Note the double 'n' in 'running'."
      }
    ],
    "tips": [
      "Always remember the 'to be' verb; never say 'I eating' instead of 'I am eating'.",
      "Look for time markers like 'now', 'at the moment', or 'currently' to know when to use this tense."
    ],
    "commonMistakes": [
      {
        "incorrect": "She reading a book.",
        "correct": "She is reading a book.",
        "explanation": "You must include the auxiliary verb 'is' before the verb 'reading'."
      }
    ],
    "summary": "Use the Present Continuous to describe actions happening now by combining 'to be' with a verb ending in '-ing'.",
    "summaryKhmer": "ប្រើកាល Present Continuous ដើម្បីពិពណ៌នាអំពីសកម្មភាពដែលកំពុងកើតឡើងនៅពេលនេះ ដោយផ្សំកិរិយាស័ព្ទ 'to be' ជាមួយនឹងកិរិយាស័ព្ទដែលថែម '-ing'។",
    "practiceQuestions": [
      {
        "id": "q1",
        "question": "What is the correct form: 'I ____ my homework'?",
        "options": [
          "am doing",
          "is doing",
          "are doing",
          "doing"
        ],
        "correctAnswer": "am doing"
      },
      {
        "id": "q2",
        "question": "Choose the correct sentence:",
        "options": [
          "They is playing.",
          "They are playing.",
          "They playing.",
          "They are play."
        ],
        "correctAnswer": "They are playing."
      }
    ]
  },
  {
    "id": "present-simple",
    "title": "Present Simple Tense",
    "level": "A1",
    "shortDesc": "Learn how to use the Present Simple tense to talk about habits, facts, and routines in English.",
    "shortDescKhmer": "ស្វែងយល់ពីរបៀបប្រើប្រាស់កាលបច្ចុប្បន្នកាលសាមញ្ញ (Present Simple Tense) ដើម្បីនិយាយអំពីទម្លាប់ ការពិត និងកិច្ចការប្រចាំថ្ងៃជាភាសាអង់គ្លេស។",
    "explanation": "The Present Simple tense is one of the most important tenses in English. We use it to describe actions that happen regularly, general truths, and permanent situations. When forming sentences with I, you, we, and they, we use the base form of the verb. However, when using he, she, or it, we must add an '-s' or '-es' to the end of the main verb. For negative sentences and questions, we rely on the auxiliary verbs 'do' and 'does'.\n\nUnderstanding this tense helps you express yourself clearly when discussing your daily life, hobbies, and simple facts about the world around you.",
    "explanationKhmer": "កាលបច្ចុប្បន្នកាលសាមញ្ញ (Present Simple) គឺជាកាលដ៏សំខាន់បំផុតមួយក្នុងភាសាអង់គ្លេស។ យើងប្រើវាដើម្បីពិពណ៌នាអំពីសកម្មភាពដែលកើតឡើងជាប្រចាំ ការពិតទូទៅ និងស្ថានភាពអចិន្ត្រៃយ៍។ នៅពេលបង្កើតប្រយោគជាមួយ I, you, we និង they យើងប្រើទម្រង់ដើមរបស់កិរិយាសព្ទ។ ប៉ុន្តែនៅពេលប្រើ he, she ឬ it យើងត្រូវបន្ថែម '-s' ឬ '-es' នៅខាងចុងកិរិយាសព្ទសំខាន់។ ចំពោះប្រយោគអវិជ្ជមាន និងប្រយោគសំណួរ យើងប្រើកិរិយាសព្ទជំនួយ 'do' និង 'does'។",
    "formula": "Subject + Verb 1 (s/es for he/she/it) + Object",
    "formulaKhmer": "ប្រធាន + កិរិយាសព្ទទី១ (ថែម s/es សម្រាប់ he/she/it) + កម្មបទ",
    "whenToUse": [
      "To describe habits and daily routines.",
      "To state general facts and universal truths.",
      "To talk about permanent situations or schedules."
    ],
    "whenToUseKhmer": [
      "ដើម្បីពិពណ៌នាអំពីទម្លាប់ និងកិច្ចការប្រចាំថ្ងៃ។",
      "ដើម្បីបង្ហាញពីការពិតទូទៅ និងការពិតក្នុងចក្រវាល។",
      "ដើម្បីនិយាយអំពីស្ថានភាពអចិន្ត្រៃយ៍ ឬកាលវិភាគ។"
    ],
    "positiveExamples": [
      "I wake up at 7 AM every day.",
      "She speaks English very well."
    ],
    "positiveExamplesKhmer": [
      "ខ្ញុំភ្ញាក់ពីគេងនៅម៉ោង ៧ ព្រឹក រាល់ថ្ងៃ។",
      "គាត់ (ស្រី) និយាយភាសាអង់គ្លេសបានយ៉ាងល្អ។"
    ],
    "negativeExamples": [
      "I do not eat meat.",
      "He does not like coffee."
    ],
    "negativeExamplesKhmer": [
      "ខ្ញុំមិនបរិភោគសាច់ទេ។",
      "គាត់ (ប្រុស) មិនចូលចិត្តកាហ្វេទេ។"
    ],
    "questionForm": "Do/Does + Subject + Verb 1 + ?",
    "questionFormKhmer": "Do/Does + ប្រធាន + កិរិយាសព្ទទី១ + ?",
    "visualTimeline": "Past <--- [ Present Simple (Habits / Facts) ] ---> Future",
    "visualTimelineKhmer": "អតីតកាល <--- [ បច្ចុប្បន្នកាលសាមញ្ញ (ទម្លាប់ / ការពិត) ] ---> អនាគតកាល",
    "examples": [
      {
        "english": "Water boils at 100 degrees Celsius.",
        "translation": "Water reaches the boiling point at this specific temperature as a scientific fact.",
        "translationKhmer": "ទឹកពុះនៅសីតុណ្ហភាព ១០០ អង្សាសេ។",
        "note": "Used for a general fact."
      },
      {
        "english": "They play football on weekends.",
        "translation": "They participate in this sport regularly every weekend.",
        "translationKhmer": "ពួកគេលេងបាល់ទាត់នៅថ្ងៃចុងសប្តាហ៍។",
        "note": "Used for a routine habit."
      }
    ],
    "tips": [
      "Remember to add 's' or 'es' to the verb only for third-person singular subjects (he, she, it).",
      "Use 'do not' (don't) for I, you, we, they, and 'does not' (doesn't) for he, she, it in negative sentences."
    ],
    "commonMistakes": [
      {
        "incorrect": "He like apples.",
        "correct": "He likes apples.",
        "explanation": "With third-person singular subjects like 'He', you must add an '-s' to the main verb."
      },
      {
        "incorrect": "She doesn'likes tea.",
        "correct": "She doesn't like tea.",
        "explanation": "When using 'does not' (doesn't), the main verb must be in its base form without '-s'."
      }
    ],
    "summary": "Use the Present Simple tense for habitual actions and general truths, adding 's/es' for he, she, and it.",
    "summaryKhmer": "ប្រើប្រាស់កាលបច្ចុប្បន្នកាលសាមញ្ញសម្រាប់សកម្មភាពទម្លាប់ និងការពិតទូទៅ ដោយបន្ថែម 's/es' សម្រាប់ he, she និង it។",
    "practiceQuestions": [
      {
        "id": "q1",
        "question": "Choose the correct sentence for the third-person singular:",
        "options": [
          "She work in a hospital.",
          "She works in a hospital.",
          "She working in a hospital.",
          "She is work in a hospital."
        ],
        "correctAnswer": "She works in a hospital."
      },
      {
        "id": "q2",
        "question": "Select the correct negative form:",
        "options": [
          "They doesn't play tennis.",
          "They don't plays tennis.",
          "They don't play tennis.",
          "They not play tennis."
        ],
        "correctAnswer": "They don't play tennis."
      }
    ]
  },
  {
    "id": "pronouns",
    "title": "Subject and Object Pronouns",
    "level": "A1",
    "shortDesc": "Learn how to substitute nouns with pronouns (I, you, he, she, it, me, him...).",
    "shortDescKhmer": "រៀនពីរបៀបជំនួសនាមដោយសព្វនាម (I, you, he, she, it, me, him...)។",
    "explanation": "Pronouns are words used to replace nouns to avoid repetition. Subject pronouns perform the action in a sentence (I, you, he, she, it, we, they), while object pronouns receive the action (me, you, him, her, it, us, them).",
    "explanationKhmer": "សព្វនាមគឺជាពាក្យដែលប្រើដើម្បីជំនួសនាម ដើម្បីចៀសវាងការនិយាយដដែលៗ។ សព្វនាមប្រធាន (Subject Pronouns) ធ្វើសកម្មភាពក្នុងប្រយោគ (I, you, he, she, it, we, they) រីឯសព្វនាមកម្មបទ (Object Pronouns) ទទួលរងសកម្មភាព (me, you, him, her, it, us, them)។",
    "formula": "Subject Pronoun + Verb | Subject + Verb + Object Pronoun",
    "formulaKhmer": "សព្វនាមប្រធាន + កិរិយាសព្ទ | ប្រធាន + កិរិយាសព្ទ + សព្វនាមកម្មបទ",
    "whenToUse": [
      "Use subject pronouns at the beginning of a sentence before the main verb.",
      "Use object pronouns after a verb or after a preposition (to, with, for)."
    ],
    "whenToUseKhmer": [
      "ប្រើសព្វនាមប្រធាននៅដើមប្រយោគ មុនកិរិយាសព្ទចម្បង។",
      "ប្រើសព្វនាមកម្មបទបន្ទាប់ពីកិរិយាសព្ទ ឬបន្ទាប់ពីធ្នាក់ (to, with, for)។"
    ],
    "positiveExamples": [
      "She loves her job.",
      "They invited us to the party."
    ],
    "positiveExamplesKhmer": [
      "នាងស្រឡាញ់ការងាររបស់នាង។",
      "ពួកគេបានអញ្ជើញពួកយើងទៅកម្មវិធីជប់លៀង។"
    ],
    "negativeExamples": [
      "Me do not want to go. (Incorrect)",
      "She gave he the book. (Incorrect)"
    ],
    "negativeExamplesKhmer": [
      "Me do not want to go. (ខុស - ត្រូវប្រើ I)",
      "She gave he the book. (ខុស - ត្រូវប្រើ him)"
    ],
    "questionForm": "Did she call you? | Who wants to meet them?",
    "questionFormKhmer": "តើនាងបានទូរស័ព្ទមកអ្នកទេ? | តើនរណាខ្លះចង់ជួបពួកគេ?",
    "visualTimeline": "[Subject Pronoun] --> (Verb Action) --> [Object Pronoun]",
    "visualTimelineKhmer": "[សព្វនាមប្រធាន] --> (សកម្មភាពកិរិយាសព្ទ) --> [សព្វនាមកម្មបទ]",
    "examples": [
      {
        "english": "He saw her at the market.",
        "translation": "He (subject pronoun) saw her (object pronoun).",
        "translationKhmer": "គាត់បានឃើញនាងនៅផ្សារ។"
      }
    ],
    "tips": [
      "Always use a subject pronoun before the verb: say \"She is happy,\" not \"Her is happy.\"",
      "\"It\" is used for animals, inanimate objects, and abstract concepts."
    ],
    "commonMistakes": [
      {
        "incorrect": "John and me went to the store.",
        "correct": "John and I went to the store.",
        "explanation": "When sharing a subject, use \"I\" instead of \"me\" because it represents the subject of the sentence."
      }
    ],
    "summary": "Subject pronouns (I, you, he, she, it, we, they) do the action. Object pronouns (me, you, him, her, it, us, them) receive the action.",
    "summaryKhmer": "សព្វនាមប្រធាន (I, you, he, she, it, we, they) ធ្វើសកម្មភាព។ សព្វនាមកម្មបទ (me, you, him, her, it, us, them) ទទួលរងសកម្មភាព។",
    "practiceQuestions": [
      {
        "id": "pro-q1",
        "question": "Fill in the blank: \"______ am studying cybersecurity.\"",
        "options": [
          "Me",
          "I",
          "Him"
        ],
        "correctAnswer": "I"
      },
      {
        "id": "pro-q2",
        "question": "Choose the correct object pronoun: \"John bought a gift for ______ (Mary).\"",
        "options": [
          "she",
          "her",
          "hers"
        ],
        "correctAnswer": "her"
      }
    ]
  },
  {
    "id": "singular-plural-nouns",
    "title": "Singular & Plural Nouns",
    "level": "A1",
    "shortDesc": "Learn how to name single items and multiple items by forming singular and plural nouns correctly.",
    "shortDescKhmer": "រៀនពីរបៀបហៅឈ្មោះវត្ថុតែមួយ និងវត្ថុច្រើន ដោយការបង្កើតនាមឯកវចនៈ និងពហុវចនៈឱ្យបានត្រឹមត្រូវ។",
    "explanation": "In English, nouns are words used to name people, places, things, or ideas. A noun can be **singular** (meaning one) or **plural** (meaning more than one).\n\n### 1. Most Nouns (Add -s)\nFor most standard nouns, simply add **-s** to the end of the word.\n* **cat** → **cats**\n* **book** → **books**\n* **car** → **cars**\n\n### 2. Nouns ending in -s, -x, -z, -ch, -sh (Add -es)\nWhen a noun ends in these sounds, add **-es** to make it easier to pronounce.\n* **bus** → **buses**\n* **box** → **boxes**\n* **watch** → **watches**\n* **dish** → **dishes**\n\n### 3. Nouns ending in Consonant + -y (Change -y to -ies)\nIf a noun ends in a consonant followed by **y**, drop the **y** and add **-ies**.\n* **baby** → **babies**\n* **city** → **cities**\n* *Note:* If it ends in a **vowel + y**, just add **-s** (e.g., **boy** → **boys**, **key** → **keys**).\n\n### 4. Irregular Plural Nouns\nSome nouns do not follow standard rules and change spelling entirely:\n* **man** → **men**\n* **woman** → **women**\n* **child** → **children**\n* **foot** → **feet**\n* **tooth** → **teeth**\n\n### 5. Unchanging Plural Nouns\nA few nouns stay exactly the same in both singular and plural forms:\n* **fish** → **fish**\n* **sheep** → **sheep**",
    "explanationKhmer": "នៅក្នុងភាសាអង់គ្លេស នាមជារាក្យដែលប្រើសម្រាប់ហៅឈ្មោះមនុស្ស ទីកន្លែង វត្ថុ ឬគំនិត។ នាមអាចជា **ឯកវចនៈ** (មានន័យថា មួយ) ឬ **ពហុវចនៈ** (មានន័យថា ច្រើនជាងមួយ)។\n\n### ១. នាមទូទៅភាគច្រើន (បន្ថែម -s)\nសម្រាប់នាមទូទៅភាគច្រើន គ្រាន់តែបន្ថែម **-s** នៅខាងចុងពាក្យ។\n* **cat** (ឆ្មាមួយ) → **cats** (ឆ្មាច្រើន)\n* **book** (សៀវភៅមួយ) → **books** (សៀវភៅច្រើន)\n* **car** (ឡានមួយ) → **cars** (ឡានច្រើន)\n\n### ២. នាមដែលបញ្ចប់ដោយ -s, -x, -z, -ch, -sh (បន្ថែម -es)\nនៅពេលនាមបញ្ចប់ដោយអក្សរទាំងនេះ ត្រូវបន្ថែម **-es** ដើម្បីងាយស្រួលក្នុងការបញ្ចេញសំឡេង។\n* **bus** → **buses**\n* **box** → **boxes**\n* **watch** → **watches**\n* **dish** → **dishes**\n\n### 3. នាមដែលបញ្ចប់ដោយ ព្យញ្ជនៈ + -y (ប្តូរ -y ទៅជា -ies)\nប្រសិនបើនាមបញ្ចប់ដោយព្យញ្ជនៈ និងអក្សរ **y** ត្រូវលុប **y** ចោល រួចបន្ថែម **-ies**។\n* **baby** → **babies**\n* **city** → **cities**\n* *ចំណាំ:* ប្រសិនបើបញ្ចប់ដោយ **ស្រៈ + y** គ្រាន់តែបន្ថែម **-s** ប៉ុណ្ណោះ (ឧទាហរណ៍៖ **boy** → **boys**, **key** → **keys**)។\n\n### ៤. នាមពហុវចនៈមិនទៀងទាត់ (Irregular Plural Nouns)\nនាមមួយចំនួនមិនដើរតាមច្បាប់ទូទៅទេ ហើយផ្លាស់ប្តូររូបរាងទាំងស្រុង៖\n* **man** → **men**\n* **woman** → **women**\n* **child** → **children**\n* **foot** → **feet**\n* **tooth** → **teeth**\n\n### ៥. នាមដែលមិនប្រែប្រួលរូបរាង\nនាមមួយចំនួនតូចមានទម្រង់ដូចគ្នាទាំងឯកវចនៈ និងពហុវចនៈ៖\n* **fish** → **fish**\n* **sheep** → **sheep**",
    "formula": "Singular Noun + (-s / -es / -ies) = Plural Noun",
    "formulaKhmer": "នាមឯកវចនៈ + (-s / -es / -ies) = នាមពហុវចនៈ",
    "whenToUse": [
      "Use a singular noun when referring to exactly one person, place, or thing.",
      "Use a plural noun when referring to two or more people, places, or things.",
      "Use 'a' or 'an' before singular countable nouns, but never before plural nouns."
    ],
    "whenToUseKhmer": [
      "ប្រើនាមឯកវចនៈ នៅពេលសំដៅលើមនុស្ស ទីកន្លែង ឬវត្ថុតែមួយគត់។",
      "ប្រើនាមពហុវចនៈ នៅពេលសំដៅលើមនុស្ស ទីកន្លែង ឬវត្ថុចាប់ពីពីរឡើងទៅ។",
      "ប្រើ 'a' ឬ 'an' នៅខាងមុខនាមរាប់បានឯកវចនៈ ប៉ុន្តែមិនត្រូវប្រើនៅខាងមុខនាមពហុវចនៈឡើយ។"
    ],
    "positiveExamples": [
      "I have one sister and two brothers.",
      "There are three boxes on the table."
    ],
    "positiveExamplesKhmer": [
      "ខ្ញុំមានបងស្រីម្នាក់ និងបងប្រុសពីរនាក់។",
      "មានប្រអប់បីនៅលើតុ។"
    ],
    "negativeExamples": [
      "I saw two mans at the store. (Incorrect)",
      "She has three childs. (Incorrect)"
    ],
    "negativeExamplesKhmer": [
      "I saw two mans at the store. (មិនត្រឹមត្រូវ)",
      "She has three childs. (មិនត្រឹមត្រូវ)"
    ],
    "questionForm": "How many + Plural Noun + do/does + Subject + have?",
    "questionFormKhmer": "How many + នាមពហុវចនៈ + do/does + ប្រធាន + have?",
    "visualTimeline": "Nouns state facts or conditions and exist independent of verb tense.",
    "visualTimelineKhmer": "នាមបញ្ជាក់អំពីអង្គហេតុ ឬស្ថានភាព ហើយមានអត្ថិភាពដោយមិនអាស្រ័យលើកាលនៃកិរិយាស័ព្ទឡើយ។",
    "examples": [
      {
        "english": "She bought three apples and one banana.",
        "translation": "She purchased a quantity of three apples (plural) and a single banana (singular).",
        "translationKhmer": "នាងបានទិញផ្លែប៉ោមបីផ្លែ និងចេកមួយផ្លែ។",
        "note": "'Apples' ends in -s because it is plural; 'banana' is singular."
      },
      {
        "english": "The children are playing with two dogs.",
        "translation": "Multiple children (irregular plural) are playing with two dogs (regular plural).",
        "translationKhmer": "ក្មេងៗកំពុងលេងជាមួយឆ្កែពីរប្រកបដោយភាពរីករាយ។",
        "note": "'Children' is the irregular plural form of 'child'."
      }
    ],
    "tips": [
      "If a word ends in -ch, -sh, -s, -x, or -z, add -es to make it plural (e.g., box -> boxes).",
      "Never add 's' to irregular plurals like 'children', 'men', or 'women' (do not say 'childrens')."
    ],
    "commonMistakes": [
      {
        "incorrect": "There are five childrens in the classroom.",
        "correct": "There are five children in the classroom.",
        "explanation": "'Children' is already the plural form of 'child'. Do not add an extra '-s'."
      },
      {
        "incorrect": "I washed the dishs after dinner.",
        "correct": "I washed the dishes after dinner.",
        "explanation": "Nouns ending in '-sh' require '-es' to form the plural."
      }
    ],
    "summary": "Use singular nouns for one item and plural nouns for more than one. Most nouns take -s, but words ending in s/sh/ch/x take -es, consonant+y takes -ies, and irregular nouns change completely.",
    "summaryKhmer": "ប្រើនាមឯកវចនៈសម្រាប់វត្ថុមួយ និងនាមពហុវចនៈសម្រាប់វត្ថុច្រើនជាងមួយ។ នាមភាគច្រើនថែម -s ប៉ុន្តែពាក្យបញ្ចប់ដោយ s/sh/ch/x ត្រូវថែម -es ឯ ព្យញ្ជនៈ+y ត្រូវប្តូរជា -ies ហើយនាមមិនទៀងទាត់ត្រូវផ្លាស់ប្តូររូបរាងទាំងស្រុង។",
    "practiceQuestions": [
      {
        "id": "q1",
        "question": "What is the correct plural form of 'city'?",
        "options": [
          "citys",
          "cities",
          "cityes",
          "cites"
        ],
        "correctAnswer": "cities"
      },
      {
        "id": "q2",
        "question": "Which sentence contains a correct plural noun?",
        "options": [
          "There are three mans in the car.",
          "I need two new watchs.",
          "She has two cute babies.",
          "The childrens are sleeping."
        ],
        "correctAnswer": "She has two cute babies."
      }
    ]
  },
  {
    "id": "subject-object-pronouns",
    "title": "Subject & Object Pronouns",
    "level": "A1",
    "shortDesc": "Learn how to use subject pronouns (like I, he, she) to do actions and object pronouns (like me, him, her) to receive actions.",
    "shortDescKhmer": "ស្វែងយល់ពីរបៀបប្រើប្រាស់សព្វនាមប្រធាន (ដូចជា I, he, she) ដើម្បីធ្វើសកម្មភាព និងសព្វនាមកម្មបទ (ដូចជា me, him, her) ដើម្បីទទួលសកម្មភាព។",
    "explanation": "Pronouns are words we use instead of nouns (names, people, things) to make our sentences smoother and avoid repetition. In English grammar, pronouns change their form depending on whether they are doing the action or receiving the action.\n\nSubject pronouns (I, you, he, she, it, we, they) act as the doer of the action. They almost always come before the main verb in a sentence. For example, in the sentence 'She likes coffee', 'She' is the subject pronoun doing the liking.\n\nObject pronouns (me, you, him, her, it, us, them) act as the receiver of the action or come after prepositions. For example, in the sentence 'John helps me', 'me' is the object pronoun receiving the help. Understanding this distinction is fundamental to forming correct basic sentences in English.",
    "explanationKhmer": "សព្វនាមគឺជាពាក្យដែលយើងប្រើជំនួសនាម (ឈ្មោះ មនុស្ស វត្ថុ) ដើម្បីធ្វើឱ្យប្រយោគរបស់យើងកាន់តែរលូន និងជៀសវាងការនិយាយដដែលៗ។ នៅក្នុងវេយ្យាករណ៍អង់គ្លេស សព្វនាមប្តូរទម្រង់អាស្រ័យលើថាតើវាជាអ្នកធ្វើសកម្មភាព ឬជាអ្នកទទួលសកម្មភាព។\n\nសព្វនាមប្រធាន (I, you, he, she, it, we, they) ធ្វើជាអ្នកធ្វើសកម្មភាព។ ពួកវាស្ទើរតែជានិច្ចកាលស្ថិតនៅពីមុនកិរិយាសព្ទគោលក្នុងប្រយោគ។ ឧទាហរណ៍ ក្នុងប្រយោគ 'She likes coffee' ពាក្យ 'She' គឺជាសព្វនាមប្រធានដែលធ្វើសកម្មភាពចូលចិត្ត។\n\nសព្វនាមកម្មបទ (me, you, him, her, it, us, them) ធ្វើជាអ្នកទទួលសកម្មភាព ឬស្ថិតនៅបន្ទាប់ពីបុព្វបទ។ ឧទាហរណ៍ ក្នុងប្រយោគ 'John helps me' ពាក្យ 'me' គឺជាសព្វនាមកម្មបទដែលទទួលការជួយ។ ការយល់ដឹងពីភាពខុសគ្នានេះ គឺជាមូលដ្ឋានគ្រឹះក្នុងការបង្កើតប្រយោគមូលដ្ឋានជាភាសាអង់គ្លេសឱ្យបានត្រឹមត្រូវ។",
    "formula": "Subject Pronoun + Verb + Object Pronoun",
    "formulaKhmer": "សព្វនាមប្រធាន + កិរិយាសព្ទ + សព្វនាមកម្មបទ",
    "whenToUse": [
      "Use subject pronouns when the person or thing is doing the action.",
      "Use object pronouns when the person or thing receives the action of the verb.",
      "Use object pronouns after prepositions (e.g., with, to, for, about)."
    ],
    "whenToUseKhmer": [
      "ប្រើប្រាស់សព្វនាមប្រធាននៅពេលដែលមនុស្ស ឬវត្ថុធ្វើសកម្មភាព។",
      "ប្រើប្រាស់សព្វនាមកម្មបទនៅពេលដែលមនុស្ស ឬវត្ថុទទួលសកម្មភាពនៃកិរិយាសព្ទ។",
      "ប្រើប្រាស់សព្វនាមកម្មបទបន្ទាប់ពីបុព្វបទ (ឧទាហរណ៍៖ with, to, for, about)។"
    ],
    "positiveExamples": [
      "I love him.",
      "She gives them a book."
    ],
    "positiveExamplesKhmer": [
      "ខ្ញុំស្រឡាញ់គាត់។",
      "នាងផ្តល់សៀវភៅមួយដល់ពួកគេ។"
    ],
    "negativeExamples": [
      "Me like apples.",
      "John helps she."
    ],
    "negativeExamplesKhmer": [
      "ខ្ញុំចូលចិត្តផ្លែប៉ោម។ (ខុសវេយ្យាករណ៍)",
      "ចនជួយនាង។ (ខុសវេយ្យាករណ៍)"
    ],
    "questionForm": "Do/Does + Subject Pronoun + Verb + Object Pronoun + ?",
    "questionFormKhmer": "តើកិរិយាសព្ទជំនួយ + សព្វនាមប្រធាន + កិរិយាសព្ទ + សព្វនាមកម្មបទ + ?",
    "visualTimeline": "Subject does the action -> Verb happens -> Object receives the action",
    "visualTimelineKhmer": "ប្រធានធ្វើសកម្មភាព -> កិរិយាសព្ទកើតឡើង -> កម្មបទទទួលសកម្មភាព",
    "examples": [
      {
        "english": "He calls me every day.",
        "translation": "He (subject) performs the action of calling me (object).",
        "translationKhmer": "គាត់ទូរស័ព្ទមកខ្ញុំរាល់ថ្ងៃ។",
        "note": "'He' is the subject pronoun, 'me' is the object pronoun."
      },
      {
        "english": "We understand them.",
        "translation": "We (subject) have the understanding of them (object).",
        "translationKhmer": "ពួកយើងយល់ពីពួកគេ។",
        "note": "'We' does the action, 'them' receives the action."
      }
    ],
    "tips": [
      "Remember the subject pronouns: I, You, He, She, It, We, They.",
      "Remember the object pronouns: me, you, him, her, it, us, them."
    ],
    "commonMistakes": [
      {
        "incorrect": "Him gave the pen to I.",
        "correct": "He gave the pen to me.",
        "explanation": "'Him' is an object pronoun and cannot be the subject. Use 'He'. 'I' cannot be used after the preposition 'to'. Use the object pronoun 'me'."
      }
    ],
    "summary": "Subject pronouns do the action and go before the verb, while object pronouns receive the action and go after the verb or preposition.",
    "summaryKhmer": "សព្វនាមប្រធានធ្វើសកម្មភាព និងស្ថិតនៅមុនកិរិយាសព្ទ រីឯសព្វនាមកម្មបទទទួលសកម្មភាព និងស្ថិតនៅបន្ទាប់ពីកិរិយាសព្ទ ឬបុព្វបទ។",
    "practiceQuestions": [
      {
        "id": "q1",
        "question": "Choose the correct pronoun: '____ like pizza.' (Talking about yourself)",
        "options": [
          "Me",
          "I",
          "Him",
          "My"
        ],
        "correctAnswer": "I"
      },
      {
        "id": "q2",
        "question": "Choose the correct pronoun: 'Sarah called ____ yesterday.' (Talking about your male friend)",
        "options": [
          "he",
          "his",
          "him",
          "they"
        ],
        "correctAnswer": "him"
      }
    ]
  },
  {
    "id": "there-is-are",
    "title": "There is / There are",
    "level": "A1",
    "shortDesc": "State the existence of things and nouns.",
    "shortDescKhmer": "បង្ហាញអំពីវត្តមាន ឬអត្ថិភាពនៃវត្ថុ និងនាមផ្សេងៗ។",
    "explanation": "Use \"There is\" for singular nouns or uncountable nouns. Use \"There are\" for plural nouns. This structure states that something exists in a particular location.",
    "explanationKhmer": "ប្រើ \"There is\" សម្រាប់នាមឯកវចនៈ ឬនាមរាប់មិនបាន។ ប្រើ \"There are\" សម្រាប់នាមពហុវចនៈ។ ទម្រង់រចនាសម្ព័ន្ធនេះបញ្ជាក់ថាមានអ្វីមួយកំពុងមានវត្តមាននៅកន្លែងណាមួយ។",
    "formula": "There is + Singular / Uncountable Noun | There are + Plural Noun",
    "formulaKhmer": "There is + នាមឯកវចនៈ / នាមរាប់មិនបាន | There are + នាមពហុវចនៈ",
    "whenToUse": [
      "To list contents of a room, city, or list.",
      "To mention facts about availability (There is coffee in the kitchen)."
    ],
    "whenToUseKhmer": [
      "ដើម្បីរាយឈ្មោះវត្ថុនៅក្នុងបន្ទប់ ទីក្រុង ឬបញ្ជី។",
      "ដើម្បីបញ្ជាក់ពីការមាននៅដែលអាចរកបាន (មានកាហ្វេនៅក្នុងផ្ទះបាយ)។"
    ],
    "positiveExamples": [
      "There is a book on the desk.",
      "There are many people at the seminar."
    ],
    "positiveExamplesKhmer": [
      "មានសៀវភៅមួយក្បាលនៅលើតុ។",
      "មានមនុស្សជាច្រើននៅក្នុងសិក្ខាសាលា។"
    ],
    "negativeExamples": [
      "There is not any milk left.",
      "There are no cars in the garage."
    ],
    "negativeExamplesKhmer": [
      "មិនមានសល់ទឹកដោះគោទាល់តែសោះ។",
      "មិនមានឡាននៅក្នុងយានដ្ឋានឡើយ។"
    ],
    "questionForm": "Is there a toilet here? | Are there any questions?",
    "questionFormKhmer": "តើមានបង្គន់នៅទីនេះទេ? | តើមានសំណួរអ្វីខ្លះទេ?",
    "visualTimeline": "[Existence Indicator] ---> (Location context)",
    "visualTimelineKhmer": "[សញ្ញាបង្ហាញវត្តមាន] ---> (បរិបទទីតាំង)",
    "examples": [
      {
        "english": "There are twelve months in a year.",
        "translation": "Twelve months is plural, so it uses \"There are\".",
        "translationKhmer": "មានដប់ពីរខែក្នុងមួយឆ្នាំ។"
      }
    ],
    "tips": [
      "Use \"any\" in negative sentences and questions: \"Are there any apples?\", \"There isn't any water.\"",
      "Use \"some\" in positive plural sentences: \"There are some books.\""
    ],
    "commonMistakes": [
      {
        "incorrect": "There is many students in the library.",
        "correct": "There are many students in the library.",
        "explanation": "\"Many students\" is a plural subject, so it requires \"There are\"."
      }
    ],
    "summary": "Use \"There is\" for singular and uncountable items. Use \"There are\" for plural items.",
    "summaryKhmer": "ប្រើ \"There is\" សម្រាប់វត្ថុឯកវចនៈ និងរាប់មិនបាន។ ប្រើ \"There are\" សម្រាប់វត្ថុពហុវចនៈ។",
    "practiceQuestions": [
      {
        "id": "tia-q1",
        "question": "Fill in the blank: \"______ a computer on the table.\"",
        "options": [
          "There is",
          "There are",
          "They are"
        ],
        "correctAnswer": "There is"
      },
      {
        "id": "tia-q2",
        "question": "Choose the correct form: \"______ any cars in the street?\"",
        "options": [
          "Is there",
          "Are there",
          "There are"
        ],
        "correctAnswer": "Are there"
      }
    ]
  },
  {
    "id": "adverbs",
    "title": "Adverbs of Frequency & Manner",
    "level": "A2",
    "shortDesc": "Learn how to describe how often actions happen and the way in which they are performed.",
    "shortDescKhmer": "រៀនពីរបៀបពិពណ៌នាអំពីភាពញឹកញាប់នៃសកម្មភាព និងរបៀបដែលសកម្មភាពទាំងនោះត្រូវបានអនុវត្ត។",
    "explanation": "### Adverbs of Frequency\nThese adverbs tell us *how often* something happens (e.g., always, usually, often, sometimes, never). They generally come before the main verb, but after the verb 'to be'.\n\n### Adverbs of Manner\nThese adverbs tell us *how* someone does an action (e.g., slowly, quickly, happily, carefully). They are usually formed by adding '-ly' to an adjective and typically come after the main verb or the object.",
    "explanationKhmer": "### កិរិយាវិសេសបង្ហាញភាពញឹកញាប់\nកិរិយាវិសេសទាំងនេះប្រាប់យើងថាអ្វីមួយកើតឡើង 'ញឹកញាប់ប៉ុណ្ណា' (ដូចជា ជានិច្ច ធម្មតា ញឹកញាប់ ជួនកាល មិនដែល)។ ជាទូទៅវាស្ថិតនៅពីមុខកិរិយាស័ព្ទគោល ប៉ុន្តែស្ថិតនៅពីក្រោយកិរិយាស័ព្ទ 'to be'។\n\n### កិរិយាវិសេសបង្ហាញរបៀប\nកិរិយាវិសេសទាំងនេះប្រាប់យើងថា តើអ្នកណាម្នាក់ធ្វើសកម្មភាព 'ដោយរបៀបណា' (ដូចជា យឺតៗ លឿនៗ ដោយសប្បាយរីករាយ ដោយប្រុងប្រយ័ត្ន)។ វាត្រូវបានបង្កើតឡើងដោយបន្ថែម '-ly' ទៅលើគុណនាម ហើយជាធម្មតាវាស្ថិតនៅក្រោយកិរិយាស័ព្ទគោល ឬកម្មបទ។",
    "formula": "Frequency: Subject + Frequency Adverb + Verb | Manner: Verb + Adverb",
    "formulaKhmer": "ភាពញឹកញាប់៖ ប្រធាន + កិរិយាវិសេស + កិរិយាស័ព្ទ | របៀប៖ កិរិយាស័ព្ទ + កិរិយាវិសេស",
    "whenToUse": [
      "To express routine or habit",
      "To describe the quality of an action",
      "To clarify the level of frequency of an event"
    ],
    "whenToUseKhmer": [
      "ដើម្បីបង្ហាញពីទម្លាប់ ឬកិច្ចការប្រចាំថ្ងៃ",
      "ដើម្បីពិពណ៌នាពីគុណភាពនៃសកម្មភាព",
      "ដើម្បីបញ្ជាក់ពីកម្រិតនៃភាពញឹកញាប់នៃព្រឹត្តិការណ៍"
    ],
    "positiveExamples": [
      "She always arrives on time.",
      "He speaks English fluently."
    ],
    "positiveExamplesKhmer": [
      "នាងតែងតែមកដល់ទាន់ពេលវេលា។",
      "គាត់និយាយភាសាអង់គ្លេសបានយ៉ាងស្ទាត់ជំនាញ។"
    ],
    "negativeExamples": [
      "They never eat meat.",
      "She walks slowly."
    ],
    "negativeExamplesKhmer": [
      "ពួកគេមិនដែលញ៉ាំសាច់ទេ។",
      "នាងដើរយឺតៗ។"
    ],
    "questionForm": "Frequency: Do/Does + Subject + Frequency Adverb + Verb? | Manner: How + do/does + Subject + Verb?",
    "questionFormKhmer": "ភាពញឹកញាប់៖ តើ...ញឹកញាប់ប៉ុណ្ណា? | របៀប៖ តើ...ធ្វើដោយរបៀបណា?",
    "visualTimeline": "Never (0%) -> Sometimes (50%) -> Often (75%) -> Always (100%)",
    "visualTimelineKhmer": "មិនដែល (០%) -> ជួនកាល (៥០%) -> ញឹកញាប់ (៧៥%) -> ជានិច្ច (១០០%)",
    "examples": [
      {
        "english": "I usually drink coffee in the morning.",
        "translation": "I drink coffee most mornings.",
        "translationKhmer": "ខ្ញុំតែងតែផឹកកាហ្វេនៅពេលព្រឹក។",
        "note": "Notice 'usually' is before the verb 'drink'."
      },
      {
        "english": "They played the game happily.",
        "translation": "The manner of playing was happy.",
        "translationKhmer": "ពួកគេបានលេងហ្គេមដោយរីករាយ។",
        "note": "Adverbs of manner often answer the question 'How?'"
      }
    ],
    "tips": [
      "Remember: Frequency adverbs go before the main verb, but after 'is/am/are'.",
      "Most manner adverbs end in -ly, but 'fast' and 'hard' do not change form."
    ],
    "commonMistakes": [
      {
        "incorrect": "She speaks fluently English.",
        "correct": "She speaks English fluently.",
        "explanation": "Adverbs of manner should come after the object, not between the verb and the object."
      }
    ],
    "summary": "Use frequency adverbs to state how often, and manner adverbs to state how an action is done.",
    "summaryKhmer": "ប្រើកិរិយាវិសេសបង្ហាញភាពញឹកញាប់ដើម្បីបញ្ជាក់ពីភាពញឹកញាប់ និងប្រើកិរិយាវិសេសបង្ហាញរបៀបដើម្បីបញ្ជាក់ពីរបៀបនៃការធ្វើសកម្មភាព។",
    "practiceQuestions": [
      {
        "id": "q1",
        "question": "Which sentence is correct?",
        "options": [
          "He runs fastly.",
          "He runs fast.",
          "He fast runs.",
          "Runs he fast."
        ],
        "correctAnswer": "He runs fast."
      },
      {
        "id": "q2",
        "question": "Where does the adverb 'often' go in: 'I eat lunch at home'?",
        "options": [
          "Often I eat lunch...",
          "I eat often lunch...",
          "I often eat lunch...",
          "I eat lunch often at..."
        ],
        "correctAnswer": "I often eat lunch..."
      }
    ]
  },
  {
    "id": "comparatives",
    "title": "Comparatives & Superlatives",
    "level": "A2",
    "shortDesc": "Compare qualities and properties between nouns.",
    "shortDescKhmer": "ប្រៀបធៀបគុណភាព និងលក្ខណៈសម្បត្តិរវាងនាមពីរ ឬច្រើន។",
    "explanation": "Comparative adjectives compare two nouns (e.g., faster, more expensive). Superlative adjectives compare three or more nouns to show the extreme limit (e.g., the fastest, the most expensive).",
    "explanationKhmer": "គុណនាមប្រៀបធៀប (Comparative Adjectives) ប្រើដើម្បីប្រៀបធៀបនាមពីរ (ឧទាហរណ៍៖ faster, more expensive)។ គុណនាមប្រៀបធៀបកម្រិតខ្ពស់បំផុត (Superlative Adjectives) ប្រើដើម្បីប្រៀបធៀបនាមចាប់ពីបីឡើងទៅ ដើម្បីបង្ហាញពីភាពបំផុត (ឧទាហរណ៍៖ the fastest, the most expensive)។",
    "formula": "Adj-er + than | more + Adj + than | the + Adj-est | the most + Adj",
    "formulaKhmer": "គុណនាមខ្លី-er + than | more + គុណនាមវែង + than | the + គុណនាមខ្លី-est | the most + គុណនាមវែង",
    "whenToUse": [
      "Use comparatives when highlighting differences between two people or things.",
      "Use superlatives when pointing out the top or bottom of a larger group."
    ],
    "whenToUseKhmer": [
      "ប្រើគុណនាមប្រៀបធៀបនៅពេលបញ្ជាក់ពីភាពខុសគ្នារវាងមនុស្ស ឬវត្ថុពីរ។",
      "ប្រើគុណនាមប្រៀបធៀបកម្រិតខ្ពស់បំផុតនៅពេលចង្អុលបង្ហាញពីចំណុចខ្ពស់បំផុត ឬទាបបំផុតនៃក្រុមធំមួយ។"
    ],
    "positiveExamples": [
      "My laptop is faster than yours.",
      "Angkor Wat is the most famous temple in Cambodia."
    ],
    "positiveExamplesKhmer": [
      "កុំព្យូទ័រយួរដៃរបស់ខ្ញុំលឿនជាងកុំព្យូទ័ររបស់អ្នក។",
      "ប្រាសាទអង្គរវត្តគឺជាប្រាសាទដែលល្បីល្បាញបំផុតនៅក្នុងប្រទេសកម្ពុជា។"
    ],
    "negativeExamples": [
      "Gold is more cheap than silver. (Incorrect)",
      "She is the most smartest student. (Incorrect double comparison)"
    ],
    "negativeExamplesKhmer": [
      "Gold is more cheap than silver. (ខុស - ត្រូវប្រើ cheaper)",
      "She is the most smartest student. (ខុស - មិនត្រូវប្រើ most រួមជាមួយ -est ឡើយ)"
    ],
    "questionForm": "Is English easier than French? | Who is the oldest in your family?",
    "questionFormKhmer": "តើភាសាអង់គ្លេសងាយស្រួលជាងភាសាបារាំងទេ? | តើនរណាជាមនុស្សចាស់ជាងគេនៅក្នុងគ្រួសាររបស់អ្នក?",
    "visualTimeline": "[Noun A] === (cheaper / more efficient) ===> [Noun B]",
    "visualTimelineKhmer": "[នាម A] === (ថោកជាង / មានប្រសិទ្ធភាពជាង) ===> [នាម B]",
    "examples": [
      {
        "english": "Today is warmer than yesterday.",
        "translation": "One-syllable adjectives add -er.",
        "translationKhmer": "ថ្ងៃនេះក្តៅជាងកាលពីម្សិលមិញ។"
      }
    ],
    "tips": [
      "One-syllable adjectives add \"-er/-est\" (cheaper, the cheapest).",
      "Three-syllable adjectives use \"more/most\" (more beautiful, the most beautiful).",
      "Irregular adjectives: good -> better -> best, bad -> worse -> worst."
    ],
    "commonMistakes": [
      {
        "incorrect": "This is the most biggest screen.",
        "correct": "This is the biggest screen.",
        "explanation": "Do not mix \"most\" with the \"-est\" modifier. Use only one superlative form."
      }
    ],
    "summary": "Use \"-er\" and \"more\" to compare two items. Use \"-est\" and \"most\" for superlatives showing the extreme of a group. Don't forget the irregular forms.",
    "summaryKhmer": "ប្រើ \"-er\" និង \"more\" ដើម្បីប្រៀបធៀបវត្ថុពីរ។ ប្រើ \"-est\" និង \"most\" សម្រាប់កម្រិតខ្ពស់បំផុត។ កុំភ្លេចទម្រង់មិនទៀងទាត់។",
    "practiceQuestions": [
      {
        "id": "cmp-q1",
        "question": "What is the comparative form of the adjective \"good\"?",
        "options": [
          "gooder",
          "better",
          "best"
        ],
        "correctAnswer": "better"
      },
      {
        "id": "cmp-q2",
        "question": "Choose the correct superlative sentence:",
        "options": [
          "This is the most beautiful flower.",
          "This is the beautifulest flower.",
          "This is the more beautiful flower."
        ],
        "correctAnswer": "This is the most beautiful flower."
      }
    ]
  },
  {
    "id": "comparatives-superlatives",
    "title": "Comparatives & Superlatives",
    "level": "A2",
    "shortDesc": "Learn how to use comparatives to compare two things and superlatives to compare three or more things.",
    "shortDescKhmer": "ស្វែងយល់ពីរបៀបប្រើប្រាស់ comparatives ដើម្បីប្រៀបធៀបរបស់ពីរ និង superlatives ដើម្បីប្រៀបធៀបរបស់ចាប់ពីបីឡើងទៅ។",
    "explanation": "Comparatives and superlatives are used to compare people, places, or things. We use comparative adjectives (like *taller*, *bigger*, *more expensive*) to compare two things, usually followed by the word *than*. For short adjectives (one syllable), we add *-er* (e.g., *fast* becomes *faster*). For adjectives ending in consonant-vowel-consonant, we double the final consonant (e.g., *big* becomes *bigger*). For adjectives ending in *-y*, we change *-y* to *-ier* (e.g., *happy* becomes *happier*). For long adjectives (two or more syllables), we use *more* before the adjective (e.g., *more modern*, *more dangerous*).\n\nSuperlatives are used to describe something that is at the highest or lowest limit (e.g., *the tallest*, *the most expensive*). We usually use the word *the* before superlative adjectives. For short adjectives, we add *-est* (e.g., *fast* becomes *the fastest*). For long adjectives, we use *most* before the adjective (e.g., *the most interesting*). Irregular adjectives like *good* (better / the best) and *bad* (worse / the worst) must be memorized.",
    "explanationKhmer": "Comparatives និង superlatives ត្រូវ បាន ប្រើ ដើម្បី ប្រៀបធៀប មនុស្ស ទីកន្លែង ឬ វត្ថុ។ យើង ប្រើ គុណនាម ប្រៀបធៀប (ដូចជា taller, bigger, more expensive) ដើម្បី ប្រៀបធៀប របស់ ពីរ ដែល ជាទូទៅ តាម ពីក្រោយ ដោយ ពាក្យ than។ ចំពោះ គុណនាម ខ្លីៗ យើង បន្ថែម -er។ ចំពោះ គុណនាម វែងៗ យើង ប្រើ more ពីមុខ។ Superlatives ត្រូវ បាន ប្រើ ដើម្បី បង្ហាញ ពី ភាព ខ្លាំង ឬ ខ្ពស់ បំផុត ហើយ ជាទូទៅ មាន the ពីមុខ និង បន្ថែម -est ឬប្រើ most ពីមុខ។",
    "formula": "Comparative: Subject + Verb + Adjective-er / more Adjective + than + Noun\nSuperlative: Subject + Verb + the + Adjective-est / most Adjective + Noun",
    "formulaKhmer": "ទម្រង់ប្រៀបធៀប៖ ប្រធាន + កិរិយាសព្ទ + គុណនាម-er / more គុណនាម + than + នាម\nទម្រង់អតិបរមា៖ ប្រធាន + កិរិយាសព្ទ + the + គុណនាម-est / most គុណនាម + នាម",
    "whenToUse": [
      "To compare the differences between two specific things or people",
      "To state that something has the highest degree of a quality in a group",
      "To describe changes or trends over time using comparative structures"
    ],
    "whenToUseKhmer": [
      "ដើម្បីប្រៀបធៀបភាពខុសគ្នារវាងរបស់ឬមនុស្សពីរនាក់",
      "ដើម្បីបង្ហាញថាអ្វីមួយមានគុណភាពខ្ពស់ជាងគេក្នុងចំណោមក្រុមមួយ",
      "ដើម្បីពិពណ៌នាអំពីការផ្លាស់ប្តូរ ឬនិន្នាការតាមពេលវេលាដោយប្រើទម្រង់ប្រៀបធៀប"
    ],
    "positiveExamples": [
      "Mount Everest is higher than any other mountain.",
      "She is the smartest student in the whole class."
    ],
    "positiveExamplesKhmer": [
      "ភ្នំអេវើែរេស គឺខ្ពស់ជាងភ្នំដទៃទៀត។",
      "នាងគឺជាសិស្សឆ្លាតជាងគេនៅក្នុងថ្នាក់ទាំងមូល។"
    ],
    "negativeExamples": [
      "This car is more fast than that one.",
      "He is the taller boy in the school."
    ],
    "negativeExamplesKhmer": [
      "រថយន្តនេះលឿនជាងរថយន្តនោះ។",
      "គាត់គឺជាក្មេងប្រុសខ្ពស់ជាងគេនៅសាលា។"
    ],
    "questionForm": "Is [Subject] + [Comparative Adjective] + than [Noun]?",
    "questionFormKhmer": "តើ [ប្រធាន] + [គុណនាមប្រៀបធៀប] + ជាង [នាម] ដែរឬទេ?",
    "visualTimeline": "Baseline -> Comparative (+er/more) -> Superlative (the +est/most)",
    "visualTimelineKhmer": "កម្រិតដើម -> ប្រៀបធៀប (+er/more) -> អតិបរមា (the +est/most)",
    "examples": [
      {
        "english": "A cheetah is faster than a lion.",
        "translation": "The cheetah runs at a higher speed compared to the lion.",
        "translationKhmer": "ខ្លារខិនរត់លឿនជាងសីហោ។",
        "note": "Fast is a short adjective, so we add -er."
      },
      {
        "english": "This is the most interesting book I have ever read.",
        "translation": "Of all the books read, this one captures my interest the most.",
        "translationKhmer": "នេះគឺជាសៀវភៅដែលគួរឱ្យចាប់អារម្មណ៍បំផុតដែលខ្ញុំធ្លាប់បានអាន។",
        "note": "Interesting is a long adjective, so we use 'most'."
      }
    ],
    "tips": [
      "Always remember to use 'than' after a comparative adjective.",
      "Always remember to use 'the' before a superlative adjective."
    ],
    "commonMistakes": [
      {
        "incorrect": "She is more taller than her sister.",
        "correct": "She is taller than her sister.",
        "explanation": "Do not use 'more' with short adjectives that already take '-er'."
      }
    ],
    "summary": "Use '-er/more...than' for comparing two things, and 'the ... -est/most' for comparing three or more things.",
    "summaryKhmer": "ប្រើ '-er/more...than' សម្រាប់ប្រៀបធៀបរបស់ពីរ និង 'the ... -est/most' សម្រាប់ប្រៀបធៀបរបស់ចាប់ពីបីឡើងទៅ។",
    "practiceQuestions": [
      {
        "id": "q1",
        "question": "Choose the correct comparative form: My house is ______ than yours.",
        "options": [
          "big",
          "bigger",
          "biggest",
          "more big"
        ],
        "correctAnswer": "bigger"
      },
      {
        "id": "q2",
        "question": "Choose the correct superlative form: Today is ______ day of the year.",
        "options": [
          "hot",
          "hotter",
          "the hottest",
          "most hot"
        ],
        "correctAnswer": "the hottest"
      }
    ]
  },
  {
    "id": "conjunctions",
    "title": "Conjunctions (And, But, Or, So, Because)",
    "level": "A2",
    "shortDesc": "Learn how to connect words and sentences smoothly using the five most common conjunctions: and, but, or, so, and because.",
    "shortDescKhmer": "ស្វែងយល់ពីរបៀបតភ្ជាប់ពាក្យ និងប្រយោគឱ្យបានរលូនដោយប្រើคำសម្ព័ន្ធសំខាន់ៗទាំងប្រាំគឺ៖ and, but, or, so និង because។",
    "explanation": "Conjunctions are connecting words that join thoughts, ideas, clauses, or sentences together. At the A2 level, mastering five basic conjunctions will instantly improve your speaking and writing by making your sentences longer and more natural. \n\n1. **And**: Used to add information or connect similar ideas. (e.g., 'I like apples and bananas.')\n2. **But**: Used to show a contrast or an unexpected difference between two ideas. (e.g., 'He is smart, but he is lazy.')\n3. **Or**: Used to present a choice or alternative option. (e.g., 'Do you want tea or coffee?')\n4. **So**: Used to show the result or consequence of an action. (e.g., 'It was raining, so I took an umbrella.')\n5. **Because**: Used to give a reason for something. (e.g., 'I stayed home because I was sick.')",
    "explanationKhmer": "ឃ្លាភ្ជាប់ ឬ Conjunctions គឺជាពាក្យដែលប្រើសម្រាប់តភ្ជាប់គំនិត ឃ្លា ឬប្រយោគចូលគ្នា។ នៅកម្រិត A2 ការចេះប្រើប្រាស់ conjunctions មូលដ្ឋានទាំងប្រាំនឹងជួយឱ្យការនិយាយ និងការសរសេររបស់អ្នកកាន់តែប្រសើរឡើង និងមានលក្ខណៈធម្មជាតិ។\n\n១. **And**: ប្រើសម្រាប់បន្ថែមព័ត៌មាន ឬតភ្ជាប់គំនិតស្រដៀងគ្នា។\n២. **But**: ប្រើដើម្បីបង្ហាញពីភាពផ្ទុយគ្នា ឬភាពខុសគ្នារវាងគំនិតពីរ។\n៣. **Or**: ប្រើដើម្បីបង្ហាញពីជម្រើស។\n៤. **So**: ប្រើដើម្បីបង្ហាញពីលទ្ធផលនៃការกระทำណាមួយ។\n៥. **Because**: ប្រើដើម្បីបញ្ជាក់ពីមូលហេតុ។",
    "formula": "Clause 1 + Conjunction + Clause 2",
    "formulaKhmer": "ប្រយោគទី ១ + ឃ្លាភ្ជាប់ (Conjunction) + ប្រយោគទី ២",
    "whenToUse": [
      "Connecting similar ideas using 'and'",
      "Showing contrast or exceptions using 'but'",
      "Offering choices using 'or'",
      "Explaining results or consequences using 'so'",
      "Providing reasons or causes using 'because'"
    ],
    "whenToUseKhmer": [
      "តភ្ជាប់គំនិតស្រដៀងគ្នាដោយប្រើ 'and'",
      "បង្ហាញពីភាពផ្ទុយគ្នាដោយប្រើ 'but'",
      "ផ្តល់ជម្រើសដោយប្រើ 'or'",
      "ពន្យល់ពីលទ្ធផលដោយប្រើ 'so'",
      "ផ្តល់ហេតុផលដោយប្រើ 'because'"
    ],
    "positiveExamples": [
      "She plays the piano and sings beautifully.",
      "I wanted to go to the beach, but it started to rain."
    ],
    "positiveExamplesKhmer": [
      "នាងលេងព្យាណូ និងច្រៀងបានយ៉ាងពិរោះ។",
      "ខ្ញុំចង់ទៅឆ្នេរខ្សាច់ ប៉ុន្តែវាបានចាប់ផ្តើមភ្លៀង។"
    ],
    "negativeExamples": [
      "I like cats but dogs.",
      "She was tired so she went to bed because."
    ],
    "negativeExamplesKhmer": [
      "ខ្ញុំចូលចិត្តឆ្មា ប៉ុន្តែឆ្កែ (ខុសវេយ្យាករណ៍)។",
      "នាងងុយគេង ដូច្នេះនាងបានចូលគេង ពីព្រោះ (ខុសរចនាសម្ព័ន្ធ)។"
    ],
    "questionForm": "Clause + Conjunction + Clause?",
    "questionFormKhmer": "ប្រយោគសួរដេញដោល + ឃ្លាភ្ជាប់ + ប្រយោគ?",
    "visualTimeline": "Idea 1 + Conjunction link -> Idea 2 (Result/Contrast/Addition)",
    "visualTimelineKhmer": "គំនិតទី ១ + ការតភ្ជាប់ដោយ Conjunction -> គំនិតទី ២ (លទ្ធផល/ភាពផ្ទុយគ្នា/ការបន្ថែម)",
    "examples": [
      {
        "english": "I was hungry, so I made a sandwich.",
        "translation": "Because I felt hungry, I prepared a sandwich to eat.",
        "translationKhmer": "ខ្ញុំឃ្លាន ដូច្នេះខ្ញុំបានធ្វើនំសាំងវិចមួយ។",
        "note": "'So' connects the cause (hunger) to the effect (making food)."
      },
      {
        "english": "She went to work although she was sick.",
        "translation": "Even though she felt unwell, she still went to her job.",
        "translationKhmer": "នាងបានទៅធ្វើការ ទោះបីជានាងឈឺក៏ដោយ។",
        "note": "Use 'because' for the reason: 'She stayed home because she was sick.'"
      }
    ],
    "tips": [
      "Remember FANBOYS (For, And, Nor, But, Or, Yet, So) as a master list of coordinating conjunctions.",
      "Do not confuse 'so' (result) with 'because' (reason); they have opposite meanings!"
    ],
    "commonMistakes": [
      {
        "incorrect": "Because it was raining, so I stayed home.",
        "correct": "Because it was raining, I stayed home. (OR) It was raining, so I stayed home.",
        "explanation": "In English, you cannot use 'because' and 'so' in the exact same sentence clause together. Choose one or the other."
      }
    ],
    "summary": "Conjunctions connect words, phrases, or clauses together to form compound and complex sentences clearly.",
    "summaryKhmer": "Conjunctions តភ្ជាប់ពាក្យ ឃ្លា ឬប្រយោគចូលគ្នាដើម្បីបង្កើតជាប្រយោគដ៏សម្បូរបែប និងច្បាស់លាស់។",
    "practiceQuestions": [
      {
        "id": "q1",
        "question": "Choose the correct conjunction: 'I wanted to buy a new phone, _____ I didn't have enough money.'",
        "options": [
          "and",
          "but",
          "so",
          "because"
        ],
        "correctAnswer": "but"
      },
      {
        "id": "q2",
        "question": "Choose the correct conjunction: 'He missed the bus _____ he woke up late.'",
        "options": [
          "because",
          "or",
          "and",
          "but"
        ],
        "correctAnswer": "because"
      }
    ]
  },
  {
    "id": "countable-uncountable",
    "title": "Countable & Uncountable Nouns",
    "level": "A2",
    "shortDesc": "Learn how to distinguish and use nouns that you can count from those you cannot count in English.",
    "shortDescKhmer": "ស្វែងយល់ពីរបៀបបែងចែក និងប្រើប្រាស់នាមដែលអាចរាប់បាន និងនាមដែលមិនអាចរាប់បានជាភាសាអង់គ្លេស។",
    "explanation": "Nouns are words that represent people, places, things, or ideas. In English, we divide them into two main categories: countable nouns and uncountable nouns.\n\nCountable nouns are things we can count using numbers. They have both a singular form (one apple) and a plural form (two apples). We can use the indefinite articles 'a' or 'an' with singular countable nouns.\n\nUncountable nouns are things we cannot count with numbers. They usually represent liquids, powders, abstract ideas, or masses (like water, sugar, music, or information). They do not have a plural form and cannot be used with 'a' or 'an'. Instead, we use words like 'some', 'any', or measurement units like 'a glass of water'.",
    "explanationKhmer": "នាមគឺជាពាក្យដែលតំណាងឱ្យមនុស្ស ទីកន្លែង វត្ថុ ឬគំនិត។ ជាភាសាអង់គ្លេស យើងបែងចែកវាជាពីរប្រភេទធំៗ៖ នាមរាប់បាន និងនាមមិនរាប់បាន។\n\nនាមរាប់បាន គឺជាវត្ថុที่เราអាចរាប់បានដោយប្រើលេខ។ ពួកវាមានទាំងទម្រង់ឯកវចនៈ (ផ្លែប៉ោមមួយ) និងពហុវចនៈ (ផ្លែប៉ោមពីរ)។ យើងអាចប្រើអត្ថបទគ្មានកំណត់ 'a' ឬ 'an' ជាមួយនាមឯកវចនៈរាប់បាន។\n\nនាមមិនរាប់បាន គឺជាវត្ថុที่เราមិនអាចរាប់ដោយប្រើលេខបានទេ។ ជាទូទៅវាតំណាងឱ្យវត្ថុរាវ ម្សៅ គំនិតអរូបី ឬវត្ថុដុំៗ (ដូចជាទឹក ស្ករ តន្ត្រី ឬព័ត៌មាន)។ ពួកវាមិនមានទម្រង់ពហុវចនៈទេ ហើយមិនអាចប្រើជាមួយ 'a' ឬ 'an' ទេ។ ជំនួសមកវិញ យើងប្រើពាក្យដូចជា 'some', 'any' ឬឯកតារង្វាស់ដូចជា 'ទឹកមួយកែវ'។",
    "formula": "Countable: a/an + singular noun OR plural noun + s/es. Uncountable: some/much + uncountable noun.",
    "formulaKhmer": "រាប់បាន៖ a/an + នាមឯកវចនៈ ឬ នាមពហុវចនៈ + s/es។ មិនរាប់បាន៖ some/much + នាមមិនរាប់បាន។",
    "whenToUse": [
      "When talking about individual items you can count (e.g., books, chairs)",
      "When talking about substances, liquids, or abstract concepts (e.g., water, advice)",
      "When expressing quantities with 'some', 'any', 'much', or 'many'"
    ],
    "whenToUseKhmer": [
      "ពេលនិយាយអំពីវត្ថុបុគ្គលដែលអ្នកអាចរាប់បាន (ឧ. សៀវភៅ កៅអី)",
      "ពេលនិយាយអំពីសារធាតុ វត្ថុរាវ ឬគំនិតអរូបី (ឧ. ទឹក យោបល់)",
      "ពេលបង្ហាញបរិមាណជាមួយ 'some', 'any', 'much' ឬ 'many'"
    ],
    "positiveExamples": [
      "I have an apple and three bananas.",
      "She needs some water and a little sugar."
    ],
    "positiveExamplesKhmer": [
      "ខ្ញុំមានផ្លែប៉ោមមួយ និងចេកបី។",
      "នាងត្រូវការទឹកខ្លះ និងស្ករន្តិចបន្តួច។"
    ],
    "negativeExamples": [
      "I would like a water, please.",
      "He has many furnitures in his house."
    ],
    "negativeExamplesKhmer": [
      "ខ្ញុំសុំទឹកមួយ (ខុស ព្រោះទឹកមិនរាប់បានដោយផ្ទាល់ជាមួយ a)។",
      "គាត់មានសម្ភារៈជាច្រើននៅក្នុងផ្ទះរបស់គាត់ (ខុស ព្រោះ furniture មិនមាន s)។"
    ],
    "questionForm": "How many + plural countable noun + do you have? / How much + uncountable noun + do you need?",
    "questionFormKhmer": "តើអ្នកមាន... ចំនួនប៉ុន្មាន? (សម្រាប់រាប់បាន) / តើអ្នកត្រូវការ... ចំនួនប៉ុន្មាន? (សម្រាប់មិនរាប់បាន)",
    "visualTimeline": "Noun Classification -> Singular/Plural Form -> Correct Quantifier Usage",
    "visualTimelineKhmer": "ការចាត់ថ្នាក់នាម -> ទម្រង់ឯកវចនៈ/ពហុវចនៈ -> ការប្រើប្រាស់បរិមាណស័ក្តិសម",
    "examples": [
      {
        "english": "Can I have a cup of coffee?",
        "translation": "Requesting a measured amount of an uncountable noun (coffee).",
        "translationKhmer": "តើខ្ញុំអាចសុំកាហ្វេមួយកែវបានទេ?",
        "note": "Use measurement phrases like 'a cup of' to count uncountable nouns."
      },
      {
        "english": "There are too many cars on the road today.",
        "translation": "Using 'many' with a plural countable noun (cars).",
        "translationKhmer": "មានរថយន្តច្រើនពេកនៅលើផ្លូវថ្ងៃនេះ។",
        "note": "Use 'many' with countable nouns and 'much' with uncountable nouns."
      }
    ],
    "tips": [
      "Remember that liquids, gases, and materials (like water, air, gold) are almost always uncountable.",
      "Words like 'advice', 'information', and 'news' are uncountable in English, even though they might be countable in your native language."
    ],
    "commonMistakes": [
      {
        "incorrect": "She gave me a good advice.",
        "correct": "She gave me some good advice.",
        "explanation": "'Advice' is an uncountable noun, so you cannot use the article 'a' in front of it. Use 'some' instead."
      }
    ],
    "summary": "Countable nouns can be counted and have plurals, while uncountable nouns cannot be counted individually and use specific quantifiers.",
    "summaryKhmer": "នាមរាប់បានអាចរាប់បាននិងមានពហុវចនៈ រីឯនាមមិនរាប់បានមិនអាចរាប់ជាបុគ្គលបានទេ ហើយត្រូវប្រើពាក្យកំណត់បរិមាណជាក់លាក់។",
    "practiceQuestions": [
      {
        "id": "q1",
        "question": "Which of the following is an uncountable noun?",
        "options": [
          "Car",
          "Chair",
          "Information",
          "Apple"
        ],
        "correctAnswer": "Information"
      },
      {
        "id": "q2",
        "question": "Choose the correct sentence:",
        "options": [
          "I need a water.",
          "I need some water.",
          "I need many waters.",
          "I need a waters."
        ],
        "correctAnswer": "I need some water."
      }
    ]
  },
  {
    "id": "future-simple",
    "title": "Future Intentions (Will vs. Going to)",
    "level": "A2",
    "shortDesc": "Learn how to express future intentions using 'will' for spontaneous decisions and 'going to' for planned actions.",
    "shortDescKhmer": "រៀនពីរបៀបបង្ហាញពីបំណងប្រាថ្នានាពេលអនាគតដោយប្រើ 'will' សម្រាប់សកម្មភាពដែលកើតឡើងភ្លាមៗ និង 'going to' សម្រាប់ផែនការដែលបានគ្រោងទុក។",
    "explanation": "In English, we distinguish between two main ways to talk about the future. \n\n1. **Going to**: We use 'going to' when we have already made a plan or intention before speaking. It implies a conscious decision or preparation. \n\n2. **Will**: We use 'will' for spontaneous decisions made at the exact moment of speaking. It is also used for promises, offers, or predictions based on opinion.",
    "explanationKhmer": "នៅក្នុងភាសាអង់គ្លេស យើងបែងចែកវិធីសំខាន់ពីរដើម្បីនិយាយអំពីអនាគត៖\n\n១. **Going to**: យើងប្រើ 'going to' នៅពេលដែលយើងបានធ្វើផែនការរួចហើយមុនពេលនិយាយ។ វាបង្ហាញពីការសម្រេចចិត្តដែលមានការត្រៀមទុកជាមុន។\n\n២. **Will**: យើងប្រើ 'will' សម្រាប់ការសម្រេចចិត្តភ្លាមៗនៅពេលកំពុងនិយាយ។ វាត្រូវបានប្រើផងដែរសម្រាប់សន្យា ការផ្តល់ជូន ឬការទស្សន៍ទាយផ្អែកលើមតិយោបល់។",
    "formula": "Going to: Subject + am/is/are + going to + verb(base form) | Will: Subject + will + verb(base form)",
    "formulaKhmer": "Going to: ប្រធាន + am/is/are + going to + កិរិយាសព្ទ(ទម្រង់ដើម) | Will: ប្រធាន + will + កិរិយាសព្ទ(ទម្រង់ដើម)",
    "whenToUse": [
      "Going to: Planned events or intentions",
      "Going to: Predictions based on evidence you can see",
      "Will: Spontaneous decisions made right now",
      "Will: Promises or offers of help"
    ],
    "whenToUseKhmer": [
      "Going to: សម្រាប់ផែនការដែលបានគ្រោងទុក ឬបំណងប្រាថ្នា",
      "Going to: ការទស្សន៍ទាយដោយផ្អែកលើភស្តុតាងជាក់ស្តែង",
      "Will: ការសម្រេចចិត្តដែលកើតឡើងភ្លាមៗនៅពេលនិយាយ",
      "Will: ការសន្យា ឬការផ្តល់ជំនួយ"
    ],
    "positiveExamples": [
      "I am going to visit my grandmother this weekend.",
      "It's hot, I will open the window."
    ],
    "positiveExamplesKhmer": [
      "ខ្ញុំនឹងទៅលេងជីដូនរបស់ខ្ញុំនៅចុងសប្តាហ៍នេះ។",
      "វាហាក់ដូចជាក្តៅ ខ្ញុំនឹងបើកបង្អួច។"
    ],
    "negativeExamples": [
      "I am not going to buy that car.",
      "I will not forget to call you."
    ],
    "negativeExamplesKhmer": [
      "ខ្ញុំនឹងមិនទិញឡាននោះទេ។",
      "ខ្ញុំនឹងមិនភ្លេចខលរកអ្នកទេ។"
    ],
    "questionForm": "Going to: Am/Is/Are + Subject + going to + verb? | Will: Will + Subject + verb?",
    "questionFormKhmer": "Going to: ប្រើកិរិយាសព្ទជំនួយ (Am/Is/Are) ដាក់នៅខាងមុខប្រធាន | Will: ដាក់ Will នៅខាងមុខប្រធាន",
    "visualTimeline": "Past -> Present [DECISION] -> Future",
    "visualTimelineKhmer": "អតីតកាល -> បច្ចុប្បន្ន [ការសម្រេចចិត្ត] -> អនាគត",
    "examples": [
      {
        "english": "I've already booked the tickets; I'm going to travel to Japan.",
        "translation": "The plan is made, so I use 'going to'.",
        "translationKhmer": "ខ្ញុំបានកក់សំបុត្ររួចហើយ ខ្ញុំនឹងធ្វើដំណើរទៅប្រទេសជប៉ុន។",
        "note": "Focus on the pre-existing plan."
      },
      {
        "english": "That box looks heavy. I will help you carry it.",
        "translation": "I saw the box and decided to help right now.",
        "translationKhmer": "ប្រអប់នោះមើលទៅធ្ងន់ណាស់។ ខ្ញុំនឹងជួយអ្នកយួរវា។",
        "note": "This is a spontaneous offer."
      }
    ],
    "tips": [
      "Use 'going to' if you have a plan in your head before you start speaking.",
      "Use 'will' if the idea just popped into your head."
    ],
    "commonMistakes": [
      {
        "incorrect": "I going to study tonight.",
        "correct": "I am going to study tonight.",
        "explanation": "Always include the verb 'to be' (am/is/are) before 'going to'."
      }
    ],
    "summary": "Use 'going to' for things you have already decided to do, and use 'will' for quick decisions made during the conversation.",
    "summaryKhmer": "ប្រើ 'going to' សម្រាប់អ្វីដែលអ្នកបានសម្រេចចិត្តធ្វើរួចហើយ ហើយប្រើ 'will' សម្រាប់ការសម្រេចចិត្តភ្លាមៗកំឡុងពេលសន្ទនា។",
    "practiceQuestions": [
      {
        "id": "q1",
        "question": "Choose the correct form: 'Look at those dark clouds! It _______ rain.'",
        "options": [
          "will",
          "is going to"
        ],
        "correctAnswer": "is going to"
      },
      {
        "id": "q2",
        "question": "Choose the correct form: 'I don't have any money.' 'Don't worry, I _______ lend you some.'",
        "options": [
          "am going to",
          "will"
        ],
        "correctAnswer": "will"
      }
    ]
  },
  {
    "id": "future-will-going-to",
    "title": "Future: Will vs. Be Going To",
    "level": "A2",
    "shortDesc": "Distinguish predictions, promises, and pre-planned future actions.",
    "shortDescKhmer": "បែងចែកលទ្ធភាពនាពេលអនាគត ការសន្យា និងគម្រោងដែលបានគ្រោងទុកជាមុន។",
    "explanation": "Use \"will\" for instant decisions, predictions without strong evidence, promises, and offers. Use \"be going to\" for intentions, prior plans made before speaking, or predictions based on physical evidence.",
    "explanationKhmer": "ប្រើ \"will\" សម្រាប់ការសម្រេចចិត្តភ្លាមៗ ការទស្សន៍ទាយដែលគ្មានភស្តុតាងច្បាស់លាស់ ការសន្យា និងការផ្តល់ជូនជំនួយ។ ប្រើ \"be going to\" សម្រាប់បំណងប្រាថ្នា ផែនការដែលបានគ្រោងទុកជាមុន ឬការទស្សន៍ទាយដែលមានភស្តុតាងជាក់ស្តែង។",
    "formula": "Subject + will + Verb | Subject + am/is/are + going to + Verb",
    "formulaKhmer": "ប្រធាន + will + កិរិយាសព្ទដើម | ប្រធាន + am/is/are + going to + កិរិយាសព្ទដើម",
    "whenToUse": [
      "Use \"will\" to make a promise (I will help you tomorrow) or offer help (I will carry that).",
      "Use \"going to\" when you already decided your plan (I am going to study abroad next semester)."
    ],
    "whenToUseKhmer": [
      "ប្រើ \"will\" ដើម្បីធ្វើការសន្យា (ខ្ញុំនឹងជួយអ្នកនៅថ្ងៃស្អែក) ឬផ្តល់ជំនួយ (ខ្ញុំនឹងជួយកាន់របស់នោះ)។",
      "ប្រើ \"going to\" នៅពេលអ្នកបានសម្រេចចិត្តលើផែនការរបស់អ្នករួចហើយ (ខ្ញុំនឹងទៅសិក្សានៅបរទេសនៅឆមាសក្រោយ)។"
    ],
    "positiveExamples": [
      "I think it will rain tomorrow.",
      "We are going to buy a new laptop this weekend."
    ],
    "positiveExamplesKhmer": [
      "ខ្ញុំគិតថាវានឹងភ្លៀងនៅថ្ងៃស្អែក។",
      "ពួកយើងនឹងទិញកុំព្យូទ័រយួរដៃថ្មីមួយនៅចុងសប្តាហ៍នេះ។"
    ],
    "negativeExamples": [
      "I won't tell anyone your secret.",
      "They are not going to attend the meeting."
    ],
    "negativeExamplesKhmer": [
      "ខ្ញុំនឹងមិនប្រាប់អាថ៌កំបាំងរបស់អ្នកទៅនរណាម្នាក់ឡើយ។",
      "ពួកគេមិនទៅចូលរួមការប្រជុំនោះទេ។"
    ],
    "questionForm": "Will you marry me? | Are you going to visit Siem Reap?",
    "questionFormKhmer": "តើអ្នកនឹងរៀបការជាមួយខ្ញុំទេ? | តើអ្នកនឹងទៅលេងសៀមរាបមែនទេ?",
    "visualTimeline": "Past -------- Present --------> [Planned: going to] / [Promise: will] (Future)",
    "visualTimelineKhmer": "អតីតកាល -------- បច្ចុប្បន្នកាល --------> [គម្រោង៖ going to] / [ការសន្យា៖ will] (អនាគតកាល)",
    "examples": [
      {
        "english": "Look at those dark clouds! It is going to rain.",
        "translation": "Prediction based on evidence.",
        "translationKhmer": "មើលពពកខ្មៅទាំងនោះចុះ! មេឃហៀបនឹងភ្លៀងហើយ។"
      }
    ],
    "tips": [
      "\"Won't\" is the contraction of \"will not\".",
      "Always include the verb \"to be\" before \"going to\": say \"I am going to write,\" not \"I going to write.\""
    ],
    "commonMistakes": [
      {
        "incorrect": "I going to study tonight.",
        "correct": "I am going to study tonight.",
        "explanation": "Never omit the \"be\" verb (am/is/are) when using \"be going to\" structures."
      }
    ],
    "summary": "\"Will\" is for predictions, instant decisions, and promises. \"Be going to\" is for prior plans and predictions backed by evidence.",
    "summaryKhmer": "\"Will\" ប្រើសម្រាប់ការទស្សន៍ទាយ ការសម្រេចចិត្តភ្លាមៗ និងការសន្យា។ \"Be going to\" ប្រើសម្រាប់ផែនការដែលបានគ្រោងទុក និងការទស្សន៍ទាយដែលមានភស្តុតាង។",
    "practiceQuestions": [
      {
        "id": "fww-q1",
        "question": "Fill in the blank: \"I ______ help you with those heavy bags!\" (Instant decision/offer)",
        "options": [
          "will",
          "going to",
          "am going to"
        ],
        "correctAnswer": "will"
      },
      {
        "id": "fww-q2",
        "question": "Choose the correct sentence: \"We are having a plan. We ______ visit Angkor Wat next Saturday.\"",
        "options": [
          "will",
          "are going to",
          "shall"
        ],
        "correctAnswer": "are going to"
      }
    ]
  },
  {
    "id": "modals-ability",
    "title": "Modal Verbs of Ability (Can, Could, Be able to)",
    "level": "A2",
    "shortDesc": "Learn how to express what you are able to do in the present, past, and future using can, could, and be able to.",
    "shortDescKhmer": "ស្វែងយល់ពីរបៀបបង្ហាញពីសមត្ថភាពដែលអ្នកអាចធ្វើបានក្នុងបច្ចុប្បន្ន អតីតកាល និងអនាគតកាលដោយប្រើ can, could និង be able to។",
    "explanation": "Modal verbs of ability are used to express natural skills, learned talents, or general capacities. The most common verb is 'can', which is used for present ability. Its negative form is 'cannot' or 'can't'. For past ability, we use 'could' or 'couldn't'. \n\nWhen we want to talk about ability in other tenses—such as the future, present perfect, or after another modal verb—we use 'be able to'. The verb 'be' changes according to the subject and tense (am, is, are, was, were, will be). While 'can' and 'be able to' can often be used interchangeably in the present, 'can' is much more common in everyday spoken English.",
    "explanationKhmer": "កិរិយាសព្ទជំនួយបង្ហាញពីសមត្ថភាពត្រូវបានប្រើដើម្បីបង្ហាញពីជំនាញធម្មជាតិ ទេពកោសល្យ ឬសមត្ថភាពទូទៅ។ កិរិយាសព្ទដែលប្រីញឹកញាប់បំផុតគឺ 'can' ដែលប្រើសម្រាប់សមត្ថភាពក្នុងពេលបច្ចុប្បន្ន។ ទម្រង់អវិជ្ជមានរបស់វាគឺ 'cannot' ឬ 'can't'។ ចំពោះសមត្ថភាពក្នុងអតីតកាល យើងប្រើ 'could' ឬ 'couldn't'។\n\nពេលដែលយើងចង់និយាយអំពីសមត្ថភាពក្នុងកាលផ្សេងទៀត ដូចជាអនាគតកាល បច្ចុប្បន្នកាលសាមញ្ញ ឬបន្ទាប់ពីកិរិយាសព្ទជំនួយផ្សេងទៀត យើងប្រើ 'be able to'។ កិរិយាសព្ទ 'be' ផ្លាស់ប្តូរទៅតាមប្រធាន និងកាល (am, is, are, was, were, will be)។ ទោះបីជា 'can' និង 'be able to' អាចប្រើជំនួសគ្នាបានក្នុងពេលបច្ចុប្បន្នក៏ដោយ ប៉ុន្តែ 'can' ត្រូវបានគេប្រើប្រាស់ច្រើនជាងក្នុងការនិយាយប្រចាំថ្ងៃ។",
    "formula": "Subject + can / could / be able to + base verb",
    "formulaKhmer": "ប្រធាន + can / could / be able to + កិរិយាសព្ទដើម",
    "whenToUse": [
      "To express physical or mental ability in the present (can).",
      "To talk about general abilities in the past (could).",
      "To express ability in the future or with other tenses (be able to)."
    ],
    "whenToUseKhmer": [
      "ដើម្បីបង្ហាញពីសមត្ថភាពរាងកាយ ឬស្មារតីក្នុងពេលបច្ចុប្បន្ន (can)។",
      "ដើម្បីនិយាយអំពីសមត្ថភាពទូទៅក្នុងអតីតកាល (could)។",
      "ដើម្បីបង្ហាញពីសមត្ថភាពក្នុងអនាគតកាល ឬកាលផ្សេងទៀត (be able to)។"
    ],
    "positiveExamples": [
      "She can speak three languages fluently.",
      "They will be able to join us tomorrow."
    ],
    "positiveExamplesKhmer": [
      "នាងអាចនិយាយភាសាបីយ៉ាងស្ទាត់ជំនាញ។",
      "ពួកគេនឹងអាចចូលរួមជាមួយយើងនៅថ្ងៃស្អែក។"
    ],
    "negativeExamples": [
      "I can't swim across this deep river.",
      "He couldn't finish his homework last night."
    ],
    "negativeExamplesKhmer": [
      "ខ្ញុំមិនអាចហែលទឹកឆ្លងទន្លេដ៏ជ្រៅនេះបានទេ។",
      "គាត់មិនអាចធ្វើកិច្ចការផ្ទះរបស់គាត់រួចរាល់កាលពីយប់មិញទេ។"
    ],
    "questionForm": "Can / Could / Be (subject) able to + base verb + ?",
    "questionFormKhmer": "Can / Could / Be (ប្រធាន) able to + កិរិយាសព្ទដើម + ?",
    "visualTimeline": "Past (Could / Was able to) -> Present (Can / Am, Is, Are able to) -> Future (Will be able to)",
    "visualTimelineKhmer": "អតីតកាល (Could / Was able to) -> បច្ចុប្បន្នកាល (Can / Am, Is, Are able to) -> អនាគតកាល (Will be able to)",
    "examples": [
      {
        "english": "I can play the guitar very well.",
        "translation": "I have the skill to play the guitar proficiently.",
        "translationKhmer": "ខ្ញុំអាចលេងហ្គីតាបានយ៉ាងល្អ។",
        "note": "Use 'can' for present abilities."
      },
      {
        "english": "She could read when she was four years old.",
        "translation": "She had the ability to read at a young age in the past.",
        "translationKhmer": "នាងអាចអានសៀវភៅបានតាំងពីអាយុបួនឆ្នាំ។",
        "note": "Use 'could' for general past abilities."
      }
    ],
    "tips": [
      "Remember that 'can' never changes its form (no 's' for he/she/it).",
      "Always use 'be able to' if you need to use a modal in the future tense (will be able to)."
    ],
    "commonMistakes": [
      {
        "incorrect": "She cans sing very well.",
        "correct": "She can sing very well.",
        "explanation": "Modal verbs like 'can' do not take an 's' in the third-person singular (he, she, it)."
      },
      {
        "incorrect": "I can to swim.",
        "correct": "I can swim.",
        "explanation": "Modal verbs are followed directly by the base verb without 'to'."
      }
    ],
    "summary": "Use 'can' for present ability, 'could' for past ability, and 'be able to' for other tenses like the future.",
    "summaryKhmer": "ប្រើ 'can' សម្រាប់សមត្ថភាពបច្ចុប្បន្ន 'could' សម្រាប់សមត្ថភាពអតីតកាល និង 'be able to' សម្រាប់កាលផ្សេងៗទៀតដូចជាអនាគតកាល។",
    "practiceQuestions": [
      {
        "id": "q1",
        "question": "Choose the correct present ability: She _____ speak English and French.",
        "options": [
          "cans",
          "can",
          "is can",
          "to can"
        ],
        "correctAnswer": "can"
      },
      {
        "id": "q2",
        "question": "Choose the correct future ability: Next year, we _____ travel to Japan.",
        "options": [
          "will can",
          "can",
          "will be able to",
          "are able"
        ],
        "correctAnswer": "will be able to"
      }
    ]
  },
  {
    "id": "modals-obligation",
    "title": "Modals of Obligation & Advice (Must, Have to, Should)",
    "level": "A2",
    "shortDesc": "Learn how to use must, have to, and should to express rules, necessary duties, and give advice in English.",
    "shortDescKhmer": "ស្វែងយល់ពីរបៀបប្រើប្រាស់ពាក្យ must, have to និង should ដើម្បីបង្ហាញពីច្បាប់ កាតព្វកិច្ចចាំបាច់ និងការផ្ដល់យោបល់ជាភាសាអង់គ្លេស។",
    "explanation": "In English, we use modal verbs to express different degrees of obligation, necessity, and advice. \n\n**Must** and **Have to** are used to talk about obligations—things that are necessary to do. 'Must' usually expresses a strong personal feeling or rule coming directly from the speaker. For example, \"I must finish this report today.\" On the other hand, 'Have to' generally expresses an external obligation, such as a law, rule, or routine imposed by someone else. For example, \"I have to wear a uniform at work.\"\n\n**Should** is used to give advice or make recommendations. It is much softer than 'must' or 'have to'. It means something is a good idea to do, but it is not a strict rule. For example, \"You should study harder if you want to pass the exam.\"",
    "explanationKhmer": "ជាភាសាអង់គ្លេស យើងប្រើកិរិយាសព្ទជំនួយ (modal verbs) ដើម្បីបង្ហាញពីកម្រិតផ្សេងៗគ្នានៃកាតព្វកិច្ច ភាពចាំបាច់ និងការផ្ដល់យោបល់។ \n\n**Must** និង **Have to** ត្រូវបានប្រើដើម្បីនិយាយអំពីកាតព្វកិច្ច ដែលជាកិច្ចការចាំបាច់ត្រូវតែធ្វើ។ ពាក្យ 'Must' ជាទូទៅបង្ហាញពីអារម្មណ៍ផ្ទាល់ខ្លួនខ្លាំង ឬច្បាប់ដែលកើតចេញពីអ្នកនិយាយផ្ទាល់។ ឧទាហរណ៍៖ \"I must finish this report today។\" ចំណែកឯ 'Have to' ជាទូទៅបង្ហាញពីកាតព្វកិច្ចខាងក្រៅ ដូចជាច្បាប់ទម្លាប់ ឬការកំណត់ពីអ្នកដទៃ។ ឧទាហរណ៍៖ \"I have to wear a uniform at work។\"\n\n**Should** ត្រូវបានប្រើដើម្បីផ្ដល់យោបល់ ឬអនុសាសន៍។ វាស្រទន់ជាងពាក្យ 'must' ឬ 'have to' ឆ្ងាយណាស់។ វាមានន័យថាអ្វីមួយគឺជាគំនិតល្អដែលគួរធ្វើ ប៉ុន្តែវាមែនជាច្បាប់តឹងរ៉ឹងនោះទេ។ ឧទាហរណ៍៖ \"You should study harder if you want to pass the exam។\"",
    "formula": "Subject + Modal Verb (must / have to / should) + Base Verb (Infinitive)",
    "formulaKhmer": "ប្រធានបទ + កិរិយាសព្ទជំនួយ (must / have to / should) + កិរិយាសព្ទដើម",
    "whenToUse": [
      "To express internal rules or strong personal obligations using must.",
      "To express external rules, laws, or routines using have to.",
      "To give friendly advice or recommendations using should."
    ],
    "whenToUseKhmer": [
      "ដើម្បីបង្ហាញពីច្បាប់ផ្ទាល់ខ្លួន ឬកាតព្វកិច្ចខ្លាំងដោយប្រើ must។",
      "ដើម្បីបង្ហាញពីច្បាប់ខាងក្រៅ ច្បាប់ទម្លាប់ ឬកាតព្វកិច្ចទូទៅដោយប្រើ have to។",
      "ដើម្បីផ្ដល់យោបល់ ឬការណែនាំដោយមិត្តភាពដោយប្រើ should។"
    ],
    "positiveExamples": [
      "You must wear a seatbelt when driving.",
      "You should drink plenty of water every day."
    ],
    "positiveExamplesKhmer": [
      "អ្នកត្រូវតែពាក់ខ្សែក្រវាត់សុវត្ថិភាពពេលបើកបរ។",
      "អ្នកគួរតែផឹកទឹកឱ្យបានច្រើនរាល់ថ្ងៃ។"
    ],
    "negativeExamples": [
      "You don't have to come to the meeting if you are busy.",
      "You shouldn't eat too much fast food."
    ],
    "negativeExamplesKhmer": [
      "អ្នកមិនបាច់មកចូលរួមកិច្ចប្រជុំទេបើអ្នករវល់។",
      "អ្នកមិនគួរញ៉ាំអាហារហ្វាសហ្វ៊ូដច្រើនពេកទេ។"
    ],
    "questionForm": "Modal Verb (Do/Does + Subject + have to) OR Should + Subject + Base Verb + ?",
    "questionFormKhmer": "កិរិយាសព្ទជំនួយ (Do/Does + ប្រធានបទ + have to) ឬ Should + ប្រធានបទ + កិរិយាសព្ទដើម + ?",
    "visualTimeline": "Present / Future obligation and advice perspective",
    "visualTimelineKhmer": "ទស្សនវិស័យនៃកាតព្វកិច្ច និងការផ្ដល់យោបល់ក្នុងពេលបច្ចុប្បន្ន / អនាគត",
    "examples": [
      {
        "english": "I have to wake up early tomorrow for my flight.",
        "translation": "It is necessary for me to wake up early because of an external schedule (the flight).",
        "translationKhmer": "ខ្ញុំត្រូវតែក្រោកពីព្រលឹមថ្ងៃស្អែកសម្រាប់ជើងហោះហើររបស់ខ្ញុំ។",
        "note": "Use 'have to' for external requirements."
      },
      {
        "english": "You should talk to your manager about your workload.",
        "translation": "It is a good recommendation or piece of advice for you to do this.",
        "translationKhmer": "អ្នកគួរតែនិយាយជាមួយប្រធានរបស់អ្នកអំពីបន្ទុកការងាររបស់អ្នក។",
        "note": "Use 'should' to give advice."
      }
    ],
    "tips": [
      "Remember that 'mustn't' means something is prohibited (do not do it), whereas 'don't have to' means something is optional (you can do it if you want, but it's not required).",
      "Always use the base form of the verb (infinitive without 'to') after must and should."
    ],
    "commonMistakes": [
      {
        "incorrect": "He must to go home now.",
        "correct": "He must go home now.",
        "explanation": "Never use 'to' directly after modal verbs like must, should, or can."
      },
      {
        "incorrect": "She musts study for the test.",
        "correct": "She must study for the test.",
        "explanation": "Modal verbs do not change form in the third-person singular; do not add an '-s'."
      }
    ],
    "summary": "Use 'must' and 'have to' for rules and obligations, and 'should' for giving advice.",
    "summaryKhmer": "ប្រើប្រាស់ 'must' និង 'have to' សម្រាប់ច្បាប់និងកាតព្វកិច្ច ហើយប្រើ 'should' សម្រាប់ផ្ដល់យោបល់។",
    "practiceQuestions": [
      {
        "id": "q1",
        "question": "Choose the correct option: You look very tired. You _____ go to bed early tonight.",
        "options": [
          "must",
          "should",
          "has to",
          "don't have to"
        ],
        "correctAnswer": "should"
      },
      {
        "id": "q2",
        "question": "Choose the correct option: In many countries, drivers _____ stop when the traffic light is red.",
        "options": [
          "should",
          "must",
          "doesn't have to",
          "can"
        ],
        "correctAnswer": "must"
      }
    ]
  },
  {
    "id": "past-continuous",
    "title": "Past Continuous Tense",
    "level": "A2",
    "shortDesc": "Learn how to use the Past Continuous tense to describe actions that were ongoing at a specific moment in the past.",
    "shortDescKhmer": "ស្វែងយល់ពីរបៀបប្រើប្រាស់កាលអតីតកាលបន្តបន្ទាប់ (Past Continuous) ដើម្បីពិពណ៌នាអំពីសកម្មភាពដែលកំពុងកើតមាននៅពេលជាក់លាក់ណាមួយក្នុងអតីតកាល។",
    "explanation": "The Past Continuous tense (also known as Past Progressive) is used to talk about actions that were in progress at a specific time in the past. To form this tense, we use the past tense of the verb 'to be' (was/were) followed by the main verb with an '-ing' ending.\n\nWe often use the Past Continuous together with the Past Simple tense. When this happens, the Past Continuous describes a longer, ongoing background action, while the Past Simple describes a shorter, interrupting action. For example: 'I was reading a book when the phone rang.'",
    "explanationKhmer": "កាលអតីតកាលបន្តបន្ទាប់ (Past Continuous) ត្រូវបានប្រើដើម្បីនិយាយអំពីសកម្មភាពដែលកំពុងដំណើរការនៅពេលជាក់លាក់ណាមួយក្នុងអតីតកាល។ ដើម្បីបង្កើតកាលនេះ យើងប្រើកិរិយាសព្ទ 'to be' ໃນអតីតកាល (was/were) តាមពីក្រោយដោយកិរិយាសព្ទដើមដែលមានថែម '-ing' ។\n\nយើងតែងតែប្រើ Past Continuous ជាមួយ Past Simple ។ ពេលនោះ Past Continuous ពិពណ៌នាអំពីសកម្មភាពវែងដែលកំពុងដំណើរការ ចំណែក Past Simple ពិពណ៌នាអំពីសកម្មភាពខ្លីដែលបានចូលមកាត់ផ្តាច់។ ឧទាហរណ៍៖ 'I was reading a book when the phone rang.'",
    "formula": "Subject + was/were + verb-ing + Object",
    "formulaKhmer": "ប្រធាន (Subject) + was/were + កិរិយាសព្ទថែម ing + កម្មបទ (Object)",
    "whenToUse": [
      "To describe an action that was in progress at a specific time in the past",
      "To describe two actions happening at the same time in the past",
      "To set the scene or background in a story before an interrupting action"
    ],
    "whenToUseKhmer": [
      "ដើម្បីពិពណ៌នាអំពីសកម្មភាពដែលកំពុងដំណើរការនៅពេលជាក់លាក់ណាមួយក្នុងអតីតកាល",
      "ដើម្បីពិពណ៌នាអំពីសកម្មភាពពីរដែលកើតឡើងក្នុងពេលជាមួយគ្នាក្នុងអតីតកាល",
      "ដើម្បីកំណត់បរិបទ ឬសាវតាក្នុងរឿងរ៉ាវ មុនពេលមានសកម្មភាពផ្សេងមកកាត់ផ្ដាច់"
    ],
    "positiveExamples": [
      "She was watching TV at 8 PM last night.",
      "They were playing football when it started to rain."
    ],
    "positiveExamplesKhmer": [
      "នាងកំពុងមើលទូរទស្សន៍នៅម៉ោង ៨យប់មិញនេះ។",
      "ពួកគេកំពុងលេងបាល់ទាត់ពេលដែលភ្លៀងចាប់ផ្តើមធ្លាក់។"
    ],
    "negativeExamples": [
      "She was not (wasn't) watching TV at 8 PM.",
      "They were not (weren't) playing football."
    ],
    "negativeExamplesKhmer": [
      "នាងមិនបានកំពុងមើលទូរទស្សន៍នៅម៉ោង ៨យប់ទេ។",
      "ពួកគេមិនបានកំពុងលេងបាល់ទាត់ទេ។"
    ],
    "questionForm": "Was/Were + Subject + verb-ing + ?",
    "questionFormKhmer": "Was/Were + ប្រធាន (Subject) + កិរិយាសព្ទថែម ing + ?",
    "visualTimeline": "Past (Action in progress <-------->) Past (Interruption) -> Present -> Future",
    "visualTimelineKhmer": "អតីតកាល (សកម្មភាពកំពុងដំណើរការ <-------->) អតីតកាល (សកម្មភាពមកកាត់ផ្តាច់) -> បច្ចុប្បន្ន -> អនាគត",
    "examples": [
      {
        "english": "At 10 AM yesterday, I was studying English.",
        "translation": "At ten o'clock in the morning yesterday, my activity at that exact moment was studying English.",
        "translationKhmer": "នៅម៉ោង ១០ព្រឹកម្សិលមិញ ខ្ញុំកំពុងសិក្សាភាសាអង់គ្លេស។",
        "note": "Use 'was' with I, he, she, it."
      },
      {
        "english": "They were cooking dinner while the children were playing.",
        "translation": "Two ongoing actions happening simultaneously in the past.",
        "translationKhmer": "ពួកគេកំពុងធ្វើម្ហូបពេលដែលក្មេងៗកំពុងលេង។",
        "note": "Use 'were' with you, we, they."
      }
    ],
    "tips": [
      "Remember: I/he/she/it takes 'was', while you/we/they takes 'were'.",
      "Look out for trigger words like 'while' and 'when' to know when to use this tense."
    ],
    "commonMistakes": [
      {
        "incorrect": "I were walking home when I saw him.",
        "correct": "I was walking home when I saw him.",
        "explanation": "The subject 'I' always takes 'was', not 'were'."
      },
      {
        "incorrect": "She was watch TV yesterday.",
        "correct": "She was watching TV yesterday.",
        "explanation": "The main verb in the Past Continuous tense must always have the '-ing' ending."
      }
    ],
    "summary": "The Past Continuous tense uses 'was/were' + verb-ing to show an ongoing action in the past, often interrupted by another action.",
    "summaryKhmer": "កាលអតីតកាលបន្តបន្ទាប់ប្រើប្រាស់ 'was/were' + កិរិយាសព្ទថែម ing ដើម្បីបង្ហាញពីសកម្មភាពដែលកំពុងបន្តក្នុងអតីតកាល ដែលច្រើនតែមានសកម្មភាពផ្សេងមកកាត់ផ្ដាច់។",
    "practiceQuestions": [
      {
        "id": "q1",
        "question": "What ______ you doing at 8 PM last night?",
        "options": [
          "was",
          "were",
          "did",
          "are"
        ],
        "correctAnswer": "were"
      },
      {
        "id": "q2",
        "question": "She ______ a book when the lights went out.",
        "options": [
          "is reading",
          "reads",
          "was reading",
          "were reading"
        ],
        "correctAnswer": "was reading"
      }
    ]
  },
  {
    "id": "past-simple",
    "title": "Past Simple Tense (Regular & Irregular)",
    "level": "A2",
    "shortDesc": "Learn how to talk about completed actions, habits, and states that happened at a specific time in the past.",
    "shortDescKhmer": "ស្វែងយល់ពីរបៀបនិយាយអំពីសកម្មភាពដែលបានបញ្ចប់ ទម្លាប់ និងស្ថានភាពដែលបានកើតឡើងនៅពេលជាក់លាក់ណាមួយក្នុងអតីតកាល។",
    "explanation": "The Past Simple tense is used to describe actions that started and finished in the past. To form the past simple with regular verbs, we usually add '-ed' to the base form of the verb (for example, 'work' becomes 'worked'). However, English has many irregular verbs that do not follow this rule; their past forms must be memorized individually (for example, 'go' becomes 'went', and 'have' becomes 'had').\n\nTo make negative sentences and questions in the past simple, we use the auxiliary verb 'did' (the past form of 'do') combined with the base form of the main verb. For example, 'She played tennis' becomes 'She didn't play tennis' in the negative, and 'Did she play tennis?' in the question form. Note that the auxiliary 'did' already shows the past tense, so the main verb goes back to its base infinitive form.",
    "explanationKhmer": "កាលអតីតកាលសាមញ្ញ (Past Simple Tense) ត្រូវបានប្រើដើម្បីពិពណ៌នាអំពីសកម្មភាពដែលបានចាប់ផ្តើម និងបានបញ្ចប់រួចរាល់នៅក្នុងអតីតកាល។ ដើម្បីបង្កើតកាលអតីតកាលជាមួយកិរិយាសព្ទធម្មតា (Regular Verbs) យើងជាទូទៅបន្ថែម '-ed' នៅខាងក្រោយពាក្យដើម (ឧទាហរណ៍ 'work' ទៅជា 'worked')។ ទោះយ៉ាងណា ភាសាអង់គ្លេសមានកិរិយាសព្ទអប្រក្រតី (Irregular Verbs) ជាច្រើនដែលមិនធ្វើតាមច្បាប់នេះទេ ទម្រង់អតីតកាលរបស់ពួកវាត្រូវតែទន្ទេញចាំផ្ទាល់ខ្លួន (ឧទាហរណ៍ 'go' ទៅជា 'went' និង 'have' ទៅជា 'had')។\n\nដើម្បីបង្កើតប្រយោគបដិសេធ និងប្រយោគសំណួរក្នុងអតីតកាលសាមញ្ញ យើងប្រើកិរិយាសព្ទជំនួយ 'did' (ទម្រង់អតីតកាលរបស់ 'do') ផ្សំជាមួយទម្រង់ដើមនៃកិរិយាសព្ទសំខាន់។ ឧទាហរណ៍ 'She played tennis' ប្រែទៅជា 'She didn't play tennis' ក្នុងទម្រង់បដិសេធ និង 'Did she play tennis?' ក្នុងទម្រង់សំណួរ។ សូមចំណាំថាកិរិយាសព្ទជំនួយ 'did' បានបង្ហាញពីអតីតកាលរួចទៅហើយ ដូច្នេះកិរិយាសព្ទหลักត្រូវត្រឡប់ទៅទម្រង់ដើមវិញ។",
    "formula": "Subject + Past Verb (Regular +ed or Irregular) + Object",
    "formulaKhmer": "ប្រធាន + កិរិយាសព្ទអតីតកាល (ធម្មតា +ed ឬអប្រក្រតី) + កម្មបទ",
    "whenToUse": [
      "To talk about completed actions at a specific time in the past.",
      "To describe a series of completed actions in the past.",
      "To talk about past habits or past states that are no longer true."
    ],
    "whenToUseKhmer": [
      "ដើម្បីនិយាយអំពីសកម្មភាពដែលបានបញ្ចប់នៅពេលជាក់លាក់ណាមួយក្នុងអតីតកាល។",
      "ដើម្បីពិពណ៌នាអំពីសلسលនៃសកម្មភាពដែលបានបញ្ចប់ក្នុងអតីតកាល។",
      "ដើម្បីនិយាយអំពីទម្លាប់អតីតកាល ឬស្ថានភាពអតីតកាលដែលលែងពិតទៀតហើយ។"
    ],
    "positiveExamples": [
      "I visited my grandparents yesterday.",
      "She ate breakfast at 7 AM this morning."
    ],
    "positiveExamplesKhmer": [
      "ខ្ញុំបានទៅលេងជីដូនជីតារបស់ខ្ញុំកាលពីម្សិលមិញ។",
      "នាងបានញ៉ាំអាហារពេលព្រឹកនៅម៉ោង 7 ព្រឹកថ្ងៃនេះ។"
    ],
    "negativeExamples": [
      "I didn't visit my grandparents yesterday.",
      "She didn't eat breakfast this morning."
    ],
    "negativeExamplesKhmer": [
      "ខ្ញុំមិនបានទៅលេងជីដូនជីតារបស់ខ្ញុំកាលពីម្សិលមិញទេ។",
      "នាងមិនបានញ៉ាំអាហារពេលព្រឹកព្រឹកនេះទេ។"
    ],
    "questionForm": "Did + Subject + Base Verb + ...?",
    "questionFormKhmer": "Did + ប្រធាន + កិរិយាសព្ទដើម + ...?",
    "visualTimeline": "Past (Action completed) -> Present -> Future",
    "visualTimelineKhmer": "អតីតកាល (សកម្មភាពបានបញ្ចប់) -> បច្ចុប្បន្ន -> អនាគត",
    "examples": [
      {
        "english": "They watched a movie last night.",
        "translation": "They viewed a film on the previous evening.",
        "translationKhmer": "ពួកគេបានមើលកុនកាលពីយប់មិញ។",
        "note": "'Watched' is a regular verb ending in '-ed'."
      },
      {
        "english": "He went to Japan in 2018.",
        "translation": "He traveled to Japan during the year 2018.",
        "translationKhmer": "គាត់បានទៅប្រទេសជប៉ុនក្នុងឆ្នាំ ២០១៨។",
        "note": "'Went' is an irregular verb (base form: go)."
      }
    ],
    "tips": [
      "Look for time expressions like 'yesterday', 'last week', 'in 2010', or 'ago' as clues to use the Past Simple tense.",
      "When using 'did' or 'didn't', always use the base form of the main verb (e.g., 'Did you go?', NOT 'Did you went?')."
    ],
    "commonMistakes": [
      {
        "incorrect": "She didn't went to the store.",
        "correct": "She didn't went to the store -> She didn't go to the store.",
        "explanation": "Never use the past tense of the main verb after 'did' or 'didn't'. The auxiliary already shows the past tense, so the main verb must remain in its base form."
      }
    ],
    "summary": "Use the Past Simple tense for finished actions in the past. Remember to change regular verbs with '-ed' and memorize irregular verb forms, using 'did' for negatives and questions.",
    "summaryKhmer": "ប្រើប្រាស់កាលអតីតកាលសាមញ្ញសម្រាប់សកម្មភាពដែលបានបញ្ចប់ក្នុងអតីតកាល។ ចងចាំក្នុងការផ្លាស់ប្តូរកិរិយាសព្ទធម្មតាជាមួយ '-ed' និងទន្ទេញទម្រង់កិរិយាសព្ទអប្រក្រតី ដោយប្រើ 'did' សម្រាប់ប្រយោគបដិសេធនិងសំណួរ។",
    "practiceQuestions": [
      {
        "id": "q1",
        "question": "Choose the correct past simple form: She _____ (play) tennis yesterday.",
        "options": [
          "play",
          "plays",
          "played",
          "playing"
        ],
        "correctAnswer": "played"
      },
      {
        "id": "q2",
        "question": "Choose the correct negative sentence: They went to France.",
        "options": [
          "They didn't went to France.",
          "They didn't go to France.",
          "They not went to France.",
          "They weren't go to France."
        ],
        "correctAnswer": "They didn't go to France."
      }
    ]
  },
  {
    "id": "question-formation",
    "title": "Question Formation & Auxiliary Verbs",
    "level": "A2",
    "shortDesc": "Learn how to use auxiliary verbs like 'do', 'does', and 'did' to create questions correctly in English.",
    "shortDescKhmer": "រៀនពីរបៀបប្រើកិរិយាសព្ទជំនួយដូចជា 'do', 'does', និង 'did' ដើម្បីបង្កើតសំណួរឱ្យបានត្រឹមត្រូវក្នុងភាសាអង់គ្លេស។",
    "explanation": "In English, we cannot form a question simply by changing the intonation of a statement. We need to use 'Auxiliary Verbs' (also called helping verbs) to help the main verb. For the Present Simple, we use 'do' or 'does' (for he/she/it). For the Past Simple, we use 'did' for all subjects. When using these auxiliaries, the main verb must return to its base form because the tense is already carried by the auxiliary verb.\n\nTo build a question, follow the 'QuASM' rule: Question word (if any) + Auxiliary + Subject + Main Verb. If there is no specific question word, you start directly with the Auxiliary verb to create a Yes/No question.",
    "explanationKhmer": "ក្នុងភាសាអង់គ្លេស យើងមិនអាចបង្កើតសំណួរដោយគ្រាន់តែផ្លាស់ប្តូរសំនៀងនៃការនិយាយនោះទេ។ យើងត្រូវប្រើ 'កិរិយាសព្ទជំនួយ' (Auxiliary Verbs) ដើម្បីជួយដល់កិរិយាសព្ទមេ។ ចំពោះកាលបច្ចុប្បន្នសាមញ្ញ (Present Simple) យើងប្រើ 'do' ឬ 'does' (សម្រាប់ he/she/it)។ ចំពោះកាលអតីតកាលសាមញ្ញ (Past Simple) យើងប្រើ 'did' សម្រាប់គ្រប់ប្រធានទាំងអស់។ នៅពេលប្រើកិរិយាសព្ទជំនួយទាំងនេះ កិរិយាសព្ទមេត្រូវតែវិលត្រឡប់ទៅទម្រង់ដើមវិញ ព្រោះកាលត្រូវបានបង្ហាញរួចហើយតាមរយៈកិរិយាសព្ទជំនួយ។\n\nដើម្បីបង្កើតសំណួរ សូមអនុវត្តតាមច្បាប់ 'QuASM': ពាក្យសួរ (ប្រសិនបើមាន) + កិរិយាសព្ទជំនួយ + ប្រធាន + កិរិយាសព្ទមេ។ ប្រសិនបើគ្មានពាក្យសួរជាក់លាក់ទេ អ្នកគ្រាន់តែចាប់ផ្តើមដោយកិរិយាសព្ទជំនួយដើម្បីបង្កើតជាសំណួរ Yes/No។",
    "formula": "Auxiliary + Subject + Main Verb + Object/Complement?",
    "formulaKhmer": "កិរិយាសព្ទជំនួយ + ប្រធាន + កិរិយាសព្ទមេ + កម្មបទ/បំពេញបទ?",
    "whenToUse": [
      "To ask about general facts or routines in the present.",
      "To ask about actions that happened and finished in the past.",
      "To clarify information by asking Yes/No questions."
    ],
    "whenToUseKhmer": [
      "ដើម្បីសួរអំពីការពិតទូទៅ ឬទម្លាប់ក្នុងពេលបច្ចុប្បន្ន។",
      "ដើម្បីសួរអំពីសកម្មភាពដែលបានកើតឡើង និងបញ្ចប់ក្នុងអតីតកាល។",
      "ដើម្បីបញ្ជាក់ព័ត៌មានដោយសួរជាសំណួរប្រភេទ Yes/No។"
    ],
    "positiveExamples": [
      "Do you like coffee?",
      "Did she go to school yesterday?"
    ],
    "positiveExamplesKhmer": [
      "តើអ្នកចូលចិត្តកាហ្វេទេ?",
      "តើនាងបានទៅសាលារៀនកាលពីម្សិលមិញទេ?"
    ],
    "negativeExamples": [
      "You like coffee?",
      "She went to school yesterday?"
    ],
    "negativeExamplesKhmer": [
      "អ្នកចូលចិត្តកាហ្វេមែនទេ? (ខុសក្បួនវេយ្យាករណ៍)",
      "នាងទៅសាលារៀនកាលពីម្សិលមិញមែនទេ? (ខុសក្បួនវេយ្យាករណ៍)"
    ],
    "questionForm": "Auxiliary + Subject + Verb + ?",
    "questionFormKhmer": "កិរិយាសព្ទជំនួយ + ប្រធាន + កិរិយាសព្ទ + ?",
    "visualTimeline": "Past (Did) -> Present (Do/Does) -> Future (Will)",
    "visualTimelineKhmer": "អតីតកាល (Did) -> បច្ចុប្បន្ន (Do/Does) -> អនាគត (Will)",
    "examples": [
      {
        "english": "Do you play football?",
        "translation": "Requesting information about a habit or preference.",
        "translationKhmer": "តើអ្នកលេងបាល់ទាត់ទេ?",
        "note": "Use 'Do' for I/You/We/They."
      },
      {
        "english": "Did he finish the work?",
        "translation": "Asking about a completed action in the past.",
        "translationKhmer": "តើគាត់បានបញ្ចប់ការងារនោះទេ?",
        "note": "The verb 'finish' is in the base form because 'did' marks the past tense."
      }
    ],
    "tips": [
      "Remember: Do/Does/Did are like 'signals' that tell you a question is coming.",
      "Always use the base form of the verb after 'did'—don't keep it in the past tense!"
    ],
    "commonMistakes": [
      {
        "incorrect": "Did you went to the park?",
        "correct": "Did you go to the park?",
        "explanation": "Once you use 'did', the main verb must be in its base form (go), not the past form (went)."
      }
    ],
    "summary": "Use 'do/does' for present questions and 'did' for past questions, always keeping the main verb in its base form.",
    "summaryKhmer": "ប្រើ 'do/does' សម្រាប់សំណួរក្នុងបច្ចុប្បន្នកាល និង 'did' សម្រាប់អតីតកាល ដោយរក្សាកិរិយាសព្ទមេនៅទម្រង់ដើមជានិច្ច។",
    "practiceQuestions": [
      {
        "id": "q1",
        "question": "___ she study English every day?",
        "options": [
          "Do",
          "Does",
          "Did",
          "Is"
        ],
        "correctAnswer": "Does"
      },
      {
        "id": "q2",
        "question": "___ you eat breakfast yesterday?",
        "options": [
          "Do",
          "Does",
          "Did",
          "Are"
        ],
        "correctAnswer": "Did"
      }
    ]
  },
  {
    "id": "conditionals",
    "title": "Conditionals (0, 1st & 2nd)",
    "level": "B1",
    "shortDesc": "Understand logical outcomes, real possibilities, and imaginary situations.",
    "shortDescKhmer": "ស្វែងយល់ពីលទ្ធផលឡូជីខល លទ្ធភាពជាក់ស្តែង និងស្ថានភាពសន្មត/ស្រមៃ។",
    "explanation": "Zero conditional represents general facts (If water freezes, it turns to ice). 1st conditional represents real future possibilities (If it rains, I will stay). 2nd conditional represents imaginary present/future situations (If I won the lottery, I would buy a house).",
    "explanationKhmer": "លក្ខខណ្ឌទី០ (Zero Conditional) តំណាងឱ្យការពិតទូទៅ (បើទឹកកក វាប្រែជាទឹកកក)។ លក្ខខណ្ឌទី១ (1st Conditional) តំណាងឱ្យលទ្ធភាពអនាគតជាក់ស្តែង (បើមេឃភ្លៀង ខ្ញុំនឹងស្នាក់នៅផ្ទះ)។ លក្ខខណ្ឌទី២ (2nd Conditional) តំណាងឱ្យស្ថានភាពសន្មត/ស្រមៃនៅពេលបច្ចុប្បន្ន ឬអនាគត (បើខ្ញុំឈ្នះឆ្នោត ខ្ញុំនឹងទិញផ្ទះមួយ)។",
    "formula": "Zero: If + Present, Present | 1st: If + Present, will + Verb | 2nd: If + Past, would + Verb",
    "formulaKhmer": "Zero: If + Present, Present | 1st: If + Present, will + V | 2nd: If + Past, would + V",
    "whenToUse": [
      "Use 1st Conditional for promises, warnings, and future plans dependent on events.",
      "Use 2nd Conditional for talking about dreams, fantasies, or things that are highly unlikely to happen."
    ],
    "whenToUseKhmer": [
      "ប្រើលក្ខខណ្ឌទី១ សម្រាប់ការសន្យា ការព្រមាន និងផែនការអនាគតដែលអាស្រ័យលើព្រឹត្តិការណ៍ផ្សេង។",
      "ប្រើលក្ខខណ្ឌទី២ សម្រាប់និយាយអំពីក្តីស្រមៃ ការស្រមើស្រមៃ ឬរឿងដែលមិនអាចកើតឡើងបាន។"
    ],
    "positiveExamples": [
      "If you heat ice, it melts.",
      "If I study hard, I will pass the exam.",
      "If I were you, I would take the job."
    ],
    "positiveExamplesKhmer": [
      "ប្រសិនបើអ្នកកម្តៅទឹកកក វានឹងរលាយ។",
      "ប្រសិនបើខ្ញុំខំរៀន ខ្ញុំនឹងប្រឡងជាប់។",
      "ប្រសិនបើខ្ញុំជាអ្នក ខ្ញុំនឹងទទួលយកការងារនោះ។"
    ],
    "negativeExamples": [
      "If she doesn't call, I won't go.",
      "If they had money, they would not rent a flat."
    ],
    "negativeExamplesKhmer": [
      "ប្រសិនបើនាងមិនទូរស័ព្ទមកទេ ខ្ញុំនឹងមិនទៅទេ។",
      "ប្រសិនបើពួកគេមានលុយ ពួកគេនឹងមិនជួលផ្ទះល្វែងនោះទេ។"
    ],
    "questionForm": "What will you do if it rains? | Where would you live if you could choose?",
    "questionFormKhmer": "តើអ្នកនឹងធ្វើអ្វីប្រសិនបើមេឃភ្លៀង? | តើអ្នកនឹងរស់នៅឯណាប្រសិនបើអ្នកអាចជ្រើសរើសបាន?",
    "visualTimeline": "[Condition Event] ---- (depends on probability) ----> [Outcome State]",
    "visualTimelineKhmer": "[ព្រឹត្តិការណ៍លក្ខខណ្ឌ] ---- (អាស្រ័យលើលទ្ធភាពជាក់ស្តែង) ----> [ស្ថានភាពលទ្ធផល]",
    "examples": [
      {
        "english": "If I had a car, I would drive to Siem Reap.",
        "translation": "I don't have a car (imaginary scenario).",
        "translationKhmer": "ប្រសិនបើខ្ញុំមានឡាន ខ្ញុំនឹងបើកឡានទៅសៀមរាប។"
      }
    ],
    "tips": [
      "In the 2nd Conditional, use \"were\" instead of \"was\" for all subjects: e.g., \"If I were you,\" \"If he were here.\"",
      "You can reverse the clause order without a comma: \"I will go if she invites me.\""
    ],
    "commonMistakes": [
      {
        "incorrect": "If I will see him, I will tell him.",
        "correct": "If I see him, I will tell him.",
        "explanation": "Do not use \"will\" in the \"if\" clause of the first conditional. Use the simple present instead."
      }
    ],
    "summary": "Zero conditional is for facts. First conditional is for real future possibilities. Second conditional is for imaginary present/future situations.",
    "summaryKhmer": "Zero Conditional សម្រាប់ការពិត។ First Conditional សម្រាប់លទ្ធភាពពិតប្រាកដនាពេលអនាគត។ Second Conditional សម្រាប់ស្ថានភាពស្រមៃក្នុងពេលបច្ចុប្បន្ន ឬអនាគត។",
    "practiceQuestions": [
      {
        "id": "cnd-q1",
        "question": "Choose the correct form: \"If she ______ time, she will help us tomorrow.\"",
        "options": [
          "has",
          "will have",
          "had"
        ],
        "correctAnswer": "has"
      },
      {
        "id": "cnd-q2",
        "question": "Fill in the blank: \"If I ______ a bird, I would fly.\"",
        "options": [
          "was",
          "were",
          "am"
        ],
        "correctAnswer": "were"
      }
    ]
  },
  {
    "id": "first-conditional",
    "title": "First Conditional (Real Future Possibility)",
    "level": "B1",
    "shortDesc": "Learn how to talk about real and possible situations in the future using the first conditional.",
    "shortDescKhmer": "ស្វែងយល់ពីរបៀបនិយាយអំពីស្ថានភាពពិត និងអាចកើតមានឡើងក្នុងពេលអនាគតដោយប្រើប្រាស់លក្ខខណ្ឌទីមួយ (First Conditional)។",
    "explanation": "The first conditional is used to talk about actions or situations in the future that are likely or possible to happen. It consists of two clauses: the 'if' clause (which sets the condition) and the main clause (which expresses the result). \n\nIn the 'if' clause, we use the Present Simple tense, even though we are talking about the future. In the main clause, we use 'will' plus the base form of the verb (infinitive) to show the expected result. You can change the order of the clauses without changing the meaning. When the 'if' clause comes first, use a comma after it. When the main clause comes first, do not use a comma.",
    "explanationKhmer": "ប្រយោគលក្ខខណ្ឌទីមួយ (First Conditional) ត្រូវបានប្រើដើម្បីនិយាយអំពីសកម្មភាព ឬស្ថានភាពក្នុងពេលអនាគតដែលមានលទ្ធភាព ឬអាចកើតមានឡើងពិតប្រាកដ។ វាមានប្រយោគរងពីរគឺ៖ ប្រយោគឃ្លា 'if' (ដែលកំណត់លក្ខខណ្ឌ) និងប្រយោគដើម (ដែលបង្ហាញពីលទ្ធផល)។\n\nនៅក្នុងឃ្លា 'if' យើងប្រើកាលបច្ចុប្បន្នកាលសាមញ្ញ (Present Simple) ទោះបីជាយើងកំពុងនិយាយអំពីអនាគតក៏ដោយ។ នៅក្នុងឃ្លាដើម យើងប្រើ 'will' បូកនឹងកិរិយាសព្ទដើម (base form) ដើម្បីបង្ហាញពីលទ្ធផលដែលរំពឹងទុក។ អ្នកអាចផ្លាស់ប្តូរលំដាប់នៃឃ្លទាំងពីរនេះដោយមិនប្តូរន័យនោះទេ។ នៅពេលដែលឃ្លា 'if' នៅខាងមុខ ត្រូវក្បៀស (,) នៅចន្លោះឃ្លាទាំងពីរ ប៉ុន្តែបើឃ្លាដើមនៅខាងមុខ មិនបាច់ប្រើក្បៀសទេ។",
    "formula": "If + Present Simple, Subject + will + base verb",
    "formulaKhmer": "ប្រសិនបើ + បច្ចុប្បន្នកាលសាមញ្ញ, ប្រធាន + will + កិរិយាសព្ទដើម",
    "whenToUse": [
      "To talk about future consequences of a specific action",
      "To make warnings, threats, or promises based on conditions",
      "To negotiate or make plans that depend on certain conditions"
    ],
    "whenToUseKhmer": [
      "ដើម្បីនិយាយអំពីផលវិបាកនាពេលអនាគតនៃសកម្មភាពណាមួយ",
      "ដើម្បីធ្វើការព្រមាន ការគំរាមកំហែង ឬការសន្យាដោយផ្អែកលើលក្ខខណ្ឌ",
      "ដើម្បីចរចា ឬរៀបចំផែនការដែលអាស្រ័យលើលក្ខខណ្ឌជាក់លាក់"
    ],
    "positiveExamples": [
      "If it rains, I will stay at home.",
      "She will pass the exam if she studies hard."
    ],
    "positiveExamplesKhmer": [
      "ប្រសិនបើភ្លៀងធ្លាក់ ខ្ញុំនឹងស្នាក់នៅផ្ទះ។",
      "នាងនឹងប្រឡងជាប់ ប្រសិនបើនាងខិតខំរៀនសូត្រ។"
    ],
    "negativeExamples": [
      "If you don't hurry, you will miss the train.",
      "They won't come to the party if we don't invite them."
    ],
    "negativeExamplesKhmer": [
      "ប្រសិនបើអ្នកមិនប្រញាប់ទេ អ្នកនឹងធ្លាក់រថភ្លើង។",
      "ពួកគេនឹងមិនមកចូលរួមពិធីជប់លៀងទេ ប្រសិនបើពួកយើងមិនអញ្ជើញពួកគេ។"
    ],
    "questionForm": "Will + subject + base verb + if + present simple?",
    "questionFormKhmer": "តើ + ប្រធាន + will + កិរិយាសព្ទដើម + ប្រសិនបើ + បច្ចុប្បន្នកាលសាមញ្ញ?",
    "visualTimeline": "Present (Condition) -> Future (Result)",
    "visualTimelineKhmer": "បច្ចុប្បន្ន (លក្ខខណ្ឌ) -> អនាគត (លទ្ធផល)",
    "examples": [
      {
        "english": "If you miss the bus, I will give you a ride.",
        "translation": "I will drive you if you fail to catch the bus.",
        "translationKhmer": "ប្រសិនបើអ្នកជិះឡានក្រុងមិនទាន់ ខ្ញុំនឹងជូនអ្នកទៅដោយម៉ូតូ/ឡាន។",
        "note": "A helpful offer based on a future possibility."
      },
      {
        "english": "What will you do if you lose your job?",
        "translation": "Tell me your plan for the future if unemployment happens.",
        "translationKhmer": "តើអ្នកនឹងធ្វើអ្វីប្រសិនបើអ្នកបាត់បង់ការងារធ្វើ?",
        "note": "Question form using 'what' at the beginning."
      }
    ],
    "tips": [
      "Never use 'will' in the same clause as 'if'. Say 'If it rains', NOT 'If it will rain'.",
      "You can replace 'will' with modal verbs like 'can', 'may', or 'might' to express possibility rather than certainty."
    ],
    "commonMistakes": [
      {
        "incorrect": "If I will see him, I will tell him.",
        "correct": "If I see him, I will tell him.",
        "explanation": "Do not use 'will' in the 'if' clause. Always use the Present Simple tense for the condition."
      }
    ],
    "summary": "Use the first conditional for real future possibilities by combining 'If + Present Simple' with 'will + base verb'.",
    "summaryKhmer": "ប្រើប្រាស់ប្រយោគលក្ខខណ្ឌទីមួយសម្រាប់លទ្ធភាពពិតប្រាកដក្នុងអនាគត ដោយរួមបញ្ចូលគ្នារវាង 'If + Present Simple' និង 'will + កិរិយាសព្ទដើម'។",
    "practiceQuestions": [
      {
        "id": "q1",
        "question": "If she ____ early, she will catch the morning flight.",
        "options": [
          "arrive",
          "arrives",
          "will arrive",
          "arrived"
        ],
        "correctAnswer": "arrives"
      },
      {
        "id": "q2",
        "question": "What will you do if you ____ your keys?",
        "options": [
          "lose",
          "will lose",
          "lost",
          "losing"
        ],
        "correctAnswer": "lose"
      }
    ]
  },
  {
    "id": "gerunds-infinitives",
    "title": "Gerunds vs. Infinitives (Doing vs. To Do)",
    "level": "B1",
    "shortDesc": "Learn how to choose between using a gerund (verb + -ing) or an infinitive (to + verb) after specific verbs and in different sentence structures.",
    "shortDescKhmer": "រៀនពីរបៀបជ្រើសរើសរវាងការប្រើ Gerund (កិរិយាស័ព្ទ + ing) ឬ Infinitive (to + កិរិយាស័ព្ទ) បន្ទាប់ពីកិរិយាស័ព្ទជាក់លាក់ និងក្នុងរចនាសម្ព័ន្ធល្បះផ្សេងៗ។",
    "explanation": "A gerund is the -ing form of a verb acting as a noun (e.g., 'swimming'), while an infinitive is the base form of a verb preceded by 'to' (e.g., 'to swim'). We use gerunds after verbs like 'enjoy', 'mind', and 'finish', often focusing on the action itself or a habit. We use infinitives after verbs like 'want', 'hope', and 'decide', often focusing on a future goal or intent. Some verbs can take both with a change in meaning (e.g., 'stop').",
    "explanationKhmer": "Gerund គឺជាទម្រង់ -ing នៃកិរិយាស័ព្ទដែលដើរតួជានាម (ដូចជា 'swimming') ចំណែកឯ Infinitive គឺជាទម្រង់ដើមនៃកិរិយាស័ព្ទដែលមាន 'to' នៅពីមុខ (ដូចជា 'to swim')។ យើងប្រើ Gerund បន្ទាប់ពីកិរិយាស័ព្ទដូចជា 'enjoy', 'mind' និង 'finish' ដែលផ្តោតលើសកម្មភាពខ្លួនឯង ឬទម្លាប់។ យើងប្រើ Infinitive បន្ទាប់ពីកិរិយាស័ព្ទដូចជា 'want', 'hope' និង 'decide' ដែលច្រើនតែផ្តោតលើគោលដៅ ឬបំណងប្រាថ្នានាពេលអនាគត។ កិរិយាស័ព្ទខ្លះអាចប្រើបានទាំងពីរ ប៉ុន្តែអត្ថន័យអាចនឹងផ្លាស់ប្តូរ (ឧទាហរណ៍ 'stop')។",
    "formula": "Verb + -ing (Gerund) OR Verb + to + Verb (Infinitive)",
    "formulaKhmer": "កិរិយាស័ព្ទ + -ing (Gerund) ឬ កិរិយាស័ព្ទ + to + កិរិយាស័ព្ទ (Infinitive)",
    "whenToUse": [
      "Use Gerunds after enjoy, finish, avoid, suggest, or mind.",
      "Use Infinitives after want, hope, decide, plan, or need.",
      "Use Gerunds as the subject of a sentence."
    ],
    "whenToUseKhmer": [
      "ប្រើ Gerund បន្ទាប់ពីពាក្យ enjoy, finish, avoid, suggest ឬ mind។",
      "ប្រើ Infinitive បន្ទាប់ពីពាក្យ want, hope, decide, plan ឬ need។",
      "ប្រើ Gerund នៅដើមល្បះជាប្រធាននៃល្បះ។"
    ],
    "positiveExamples": [
      "I enjoy swimming in the summer.",
      "She wants to visit Paris next year."
    ],
    "positiveExamplesKhmer": [
      "ខ្ញុំចូលចិត្តហែលទឹកនៅរដូវក្តៅ។",
      "នាងចង់ទៅលេងទីក្រុងប៉ារីសនៅឆ្នាំក្រោយ។"
    ],
    "negativeExamples": [
      "I enjoy to swim. (Incorrect)",
      "She wants visiting Paris. (Incorrect)"
    ],
    "negativeExamplesKhmer": [
      "ខ្ញុំចូលចិត្តហែលទឹក។ (ខុស)",
      "នាងចង់ទៅលេងទីក្រុងប៉ារីស។ (ខុស)"
    ],
    "questionForm": "Do/Does + Subject + Verb(base) + [Gerund/Infinitive] + Object + ?",
    "questionFormKhmer": "ទម្រង់សំណួរ៖ Do/Does + ប្រធាន + កិរិយាស័ព្ទ(ដើម) + [Gerund/Infinitive] + កម្មបទ + ?",
    "visualTimeline": "Gerunds often represent general truths/past habits, Infinitives often represent future intent.",
    "visualTimelineKhmer": "Gerunds ជារឿយៗតំណាងឱ្យការពិតទូទៅ ឬទម្លាប់ពីអតីតកាល ចំណែក Infinitive ជារឿយៗតំណាងឱ្យគោលបំណងនាពេលអនាគត។",
    "examples": [
      {
        "english": "He finished doing his homework.",
        "translation": "He completed the task of doing homework.",
        "translationKhmer": "គាត់បានធ្វើកិច្ចការផ្ទះរបស់គាត់រួចរាល់ហើយ។",
        "note": "After 'finish', always use a gerund."
      },
      {
        "english": "They decided to move to a new house.",
        "translation": "They made a choice to change their residence.",
        "translationKhmer": "ពួកគេបានសម្រេចចិត្តផ្លាស់ទៅផ្ទះថ្មី។",
        "note": "After 'decide', always use an infinitive."
      }
    ],
    "tips": [
      "Remember the 'F' rule: Finish, Forget (sometimes), and Fancy usually take Gerunds.",
      "Think of 'to' as an arrow pointing to the future, which helps with Infinitive usage."
    ],
    "commonMistakes": [
      {
        "incorrect": "I suggest to go home.",
        "correct": "I suggest going home.",
        "explanation": "The verb 'suggest' is always followed by a gerund, not an infinitive."
      }
    ],
    "summary": "Use Gerunds (-ing) after verbs of opinion/completion, and Infinitives (to + verb) after verbs of desire/future planning.",
    "summaryKhmer": "ប្រើ Gerund (-ing) បន្ទាប់ពីកិរិយាស័ព្ទបង្ហាញពីការយល់ឃើញឬការបញ្ចប់សកម្មភាព និងប្រើ Infinitive (to + verb) បន្ទាប់ពីកិរិយាស័ព្ទបង្ហាញពីបំណងប្រាថ្នាឬផែនការនាពេលអនាគត។",
    "practiceQuestions": [
      {
        "id": "q1",
        "question": "Which sentence is correct?",
        "options": [
          "I avoid to eat junk food.",
          "I avoid eating junk food.",
          "I avoid eat junk food.",
          "I avoid for eating junk food."
        ],
        "correctAnswer": "I avoid eating junk food."
      },
      {
        "id": "q2",
        "question": "Choose the correct form: She plans ______ to Japan.",
        "options": [
          "to travel",
          "traveling",
          "travel",
          "to traveling"
        ],
        "correctAnswer": "to travel"
      }
    ]
  },
  {
    "id": "passive-voice",
    "title": "Passive Voice (Present & Past Simple)",
    "level": "B1",
    "shortDesc": "Learn how to focus on the receiver of an action rather than the doer using the passive voice in present and past simple tenses.",
    "shortDescKhmer": "ស្វែងយល់ពីរបៀបផ្តោតលើអ្នកទទួលសកម្មភាព ជាជាងអ្នកធ្វើសកម្មភាពដោយប្រើប្រាស់ប្រយោគអកម្មក្នុងពេលបច្ចុប្បន្ន និងអតីតកាលសាមញ្ញ។",
    "explanation": "In English, sentences can be active or passive. In an active sentence, the subject does the action (e.g., \"The cat catches the mouse\"). In a passive sentence, the subject receives the action (e.g., \"The mouse is caught by the cat\"). We use the passive voice when the focus is on the action or the receiver of the action, rather than who or what performed it.\n\nTo form the passive voice in the Present Simple, we use: **Object + am/is/are + Past Participle (V3)**. For example, \"English is spoken all over the world.\" To form the passive voice in the Past Simple, we use: **Object + was/were + Past Participle (V3)**. For example, \"The car was repaired yesterday.\"\n\nIf we want to mention *who* did the action in a passive sentence, we use the preposition **by** at the end of the clause (e.g., \"This book was written by Shakespeare\"). However, if the doer is unknown, unimportant, or obvious from the context, we often omit the \"by\" phrase entirely.",
    "explanationKhmer": "ជាភាសាអង់គ្លេស ប្រយោគអាចជាប្រយោគសកម្ម (Active) ឬប្រយោគអកម្ម (Passive)។ ក្នុងប្រយោគសកម្ម ប្រធានជាអ្នកធ្វើសកម្មភាព (ឧទាហរណ៍៖ \"ឆ្មាចាប់កណ្តុរ\")។ ក្នុងប្រយោគអកម្ម ប្រធានគឺជាអ្នកទទួលរងសកម្មភាព (ឧទាហរណ៍៖ \"កណ្តុរត្រូវគេចាប់ដោយឆ្មា\")។ យើងប្រើប្រយោគអកម្មនៅពេលដែលយើងចង់ផ្តោតលើសកម្មភាព ឬអ្នកទទួលរងសកម្មភាព ជាជាងអ្នកដែលបានធ្វើវា។\n\nដើម្បីបង្កើតប្រយោគអកម្មក្នុងពេលបច្ចុប្បន្នសាមញ្ញ (Present Simple) យើងប្រើ៖ **កម្មបទ + am/is/are + កិរិយាសព្ទ៣ (Past Participle)**។ ឧទាហរណ៍៖ \"ភាសាអង់គ្លេសត្រូវបាននិយាយទូទាំងពិភពលោក\"។ ចំពោះអតីតកាលសាមញ្ញ (Past Simple) យើងប្រើ៖ **កម្មបទ + was/were + កិរិយាសព្ទ៣**។ ឧទាហរណ៍៖ \"រថយន្តត្រូវបានជួសជុលរួចរាល់កាលពីម្សិលមិញ\"។\n\nប្រសិនបើអ្នកចង់បញ្ជាក់ថា *នរណា* ជាអ្នកធ្វើសកម្មភាពនោះ យើងប្រើប្របុសព្ទ **by** នៅខាងចុង (ឧទាហរណ៍៖ \"សៀវភៅនេះត្រូវបានសរសេរដោយ Shakespeare\")។ ប៉ុន្តែប្រសិនបើអ្នកធ្វើសកម្មភាពនោះមិនស្គាល់ មិនសូវសំខាន់ ឬច្បាស់ស្រាប់ហើយ យើងអាចមិនបាច់ដាក់ពាក្យ \"by\" នោះទេ។",
    "formula": "Subject (Receiver) + am/is/are (Present) or was/were (Past) + Past Participle (V3)",
    "formulaKhmer": "ប្រធាន (អ្នកទទួល) + am/is/are (បច្ចុប្បន្ន) ឬ was/were (អតីតកាល) + កិរិយាសព្ទ៣ (V3)",
    "whenToUse": [
      "When the focus is on the person or thing receiving the action, not the doer.",
      "When the doer of the action is unknown, obvious, or secret.",
      "In formal writing, news reports, and scientific descriptions."
    ],
    "whenToUseKhmer": [
      "នៅពេលដែលការយកចិត្តទុកដាក់គឺលើមនុស្ស ឬវត្ថុដែលទទួលរងសកម្មភាព មិនមែនអ្នកធ្វើទេ។",
      "នៅពេលដែលអ្នកធ្វើសកម្មភាពមិនស្គាល់ ដឹងច្បាស់ស្រាប់ ឬលាក់បាំង។",
      "ក្នុងការសរសេរបែបផ្លូវការ របាយការណ៍ព័ត៌មាន និងការពិពណ៌នាបែបវិទ្យាសាស្ត្រ។"
    ],
    "positiveExamples": [
      "Coffee is grown in Brazil.",
      "The window was broken last night."
    ],
    "positiveExamplesKhmer": [
      "កាហ្វេត្រូវបានដាំដុះនៅក្នុងប្រទេសប្រេស៊ីល។",
      "បង្អួចត្រូវបានវាយបំបែកកាលពីយប់មិញ។"
    ],
    "negativeExamples": [
      "Coffee isn't grown in Canada.",
      "The window wasn't broken by me."
    ],
    "negativeExamplesKhmer": [
      "កាហ្វេមិនត្រូវបានដាំដុះនៅក្នុងប្រទេសកាណាដាទេ។",
      "បង្អួចមិនត្រូវបានវាយបំបែកដោយខ្ញុំទេ។"
    ],
    "questionForm": "Am/Is/Are or Was/Were + Subject + Past Participle (V3) + ?",
    "questionFormKhmer": "Am/Is/Are ឬ Was/Were + ប្រធាន + កិរិយាសព្ទ៣ (V3) + ?",
    "visualTimeline": "Past (was/were + V3) -> Present (am/is/are + V3) -> Focus shifts to the receiver",
    "visualTimelineKhmer": "អតីតកាល (was/were + V3) -> បច្ចុប្បន្ន (am/is/are + V3) -> ការផ្តោតអារម្មណ៍ទៅលើអ្នកទទួល",
    "examples": [
      {
        "english": "Many cars are produced in Japan every year.",
        "translation": "Japan produces a large quantity of cars annually.",
        "translationKhmer": "រថយន្តជាច្រើនត្រូវបានផលិតនៅក្នុងប្រទេសជប៉ុនជារៀងរាល់ឆ្នាំ។",
        "note": "Present Simple Passive used for regular or permanent facts."
      },
      {
        "english": "The Mona Lisa was painted by Leonardo da Vinci.",
        "translation": "Leonardo da Vinci created the painting the Mona Lisa in the past.",
        "translationKhmer": "រូបគំនូរ Mona Lisa ត្រូវបានគូរដោយ Leonardo da Vinci។",
        "note": "Past Simple Passive used for a finished historical event."
      }
    ],
    "tips": [
      "Always remember to use the third form of the verb (Past Participle) in every passive sentence.",
      "Match 'to be' (am/is/are/was/were) correctly with the new subject, not the original doer."
    ],
    "commonMistakes": [
      {
        "incorrect": "The letter was write yesterday.",
        "correct": "The letter was written yesterday.",
        "explanation": "You must use the past participle form (written), not the base form or past simple form (write/wrote)."
      },
      {
        "incorrect": "English is speak all over the world.",
        "correct": "English is spoken all over the world.",
        "explanation": "In present passive, use 'is' plus the past participle 'spoken', not the base verb 'speak'."
      }
    ],
    "summary": "The passive voice shifts the focus to the receiver of an action using 'be' + past participle (V3).",
    "summaryKhmer": "ប្រយោគអកម្មប្តូរការផ្តោតអារម្មណ៍ទៅលើអ្នកទទួលសកម្មភាព ដោយប្រើពាក្យ 'be' បូកនឹងកិរិយាសព្ទ៣ (V3)។",
    "practiceQuestions": [
      {
        "id": "q1",
        "question": "Choose the correct Present Simple passive form: 'English __________ in many countries.'",
        "options": [
          "speak",
          "is spoken",
          "spoke",
          "is speaking"
        ],
        "correctAnswer": "is spoken"
      },
      {
        "id": "q2",
        "question": "Choose the correct Past Simple passive form: 'This house __________ built in 1990.'",
        "options": [
          "is",
          "were",
          "was",
          "has"
        ],
        "correctAnswer": "was"
      }
    ]
  },
  {
    "id": "past-perfect",
    "title": "Past Perfect Simple Tense",
    "level": "B1",
    "shortDesc": "The Past Perfect Simple is used to describe an action that was completed before another action or time in the past.",
    "shortDescKhmer": "កាលអតីតកាលឥតខ្ចោះ (Past Perfect Simple) ប្រើសម្រាប់ពិពណ៌នាអំពីសកម្មភាពដែលបានបញ្ចប់មុនសកម្មភាព ឬពេលវេលាមួយទៀតក្នុងអតីតកាល។",
    "explanation": "The Past Perfect Simple is often called the 'past of the past'. It helps clarify the chronological order of two past events by highlighting which one happened first. Even if the sentence mentions the second action first, the Past Perfect makes it clear that the event in the Past Perfect occurred earlier.\n\nTo form the Past Perfect, use 'had' followed by the past participle (the V3 form) of the main verb. This structure remains the same for all subjects (I, you, he, she, it, we, they), making it relatively straightforward to conjugate.",
    "explanationKhmer": "Past Perfect Simple ជារឿយៗត្រូវបានគេហៅថា 'អតីតកាលនៃអតីតកាល'។ វាជួយពន្យល់ពីលំដាប់លំដោយនៃព្រឹត្តិការណ៍អតីតកាលពីរដោយបញ្ជាក់ថាមួយណាបានកើតឡើងមុនគេ។ ទោះបីជាប្រយោគនិយាយអំពីសកម្មភាពទីពីរមុនក៏ដោយ ក៏ Past Perfect ធ្វើឱ្យច្បាស់ថាព្រឹត្តិការណ៍នោះបានកើតឡើងមុន។\n\nដើម្បីបង្កើត Past Perfect សូមប្រើ 'had' តាមដោយកិរិយាសព្ទទី៣ (Past Participle)។ ទម្រង់នេះនៅដដែលសម្រាប់គ្រប់ប្រធានទាំងអស់ ដែលធ្វើឱ្យវាងាយស្រួលក្នុងការចងចាំ។",
    "formula": "Subject + had + past participle (V3)",
    "formulaKhmer": "ប្រធាន + had + កិរិយាសព្ទទី៣ (V3)",
    "whenToUse": [
      "To describe an action completed before another past action.",
      "To express an action that happened before a specific time in the past.",
      "To show the cause of a past situation (e.g., I was tired because I had worked all day)."
    ],
    "whenToUseKhmer": [
      "ដើម្បីពិពណ៌នាអំពីសកម្មភាពដែលបានបញ្ចប់មុនសកម្មភាពអតីតកាលមួយទៀត។",
      "ដើម្បីបង្ហាញពីសកម្មភាពដែលបានកើតឡើងមុនពេលវេលាជាក់លាក់ណាមួយក្នុងអតីតកាល។",
      "ដើម្បីបង្ហាញពីមូលហេតុនៃស្ថានភាពក្នុងអតីតកាល។"
    ],
    "positiveExamples": [
      "I had finished my homework before the movie started.",
      "She had already left when I arrived at the office."
    ],
    "positiveExamplesKhmer": [
      "ខ្ញុំបានធ្វើកិច្ចការផ្ទះរួចរាល់មុនពេលខ្សែភាពយន្តចាប់ផ្ដើម។",
      "នាងបានចេញទៅបាត់ហើយនៅពេលដែលខ្ញុំទៅដល់ការិយាល័យ។"
    ],
    "negativeExamples": [
      "I had not (hadn't) eaten lunch before the meeting began.",
      "They had not finished the project by last Friday."
    ],
    "negativeExamplesKhmer": [
      "ខ្ញុំមិនទាន់បានញ៉ាំអាហារថ្ងៃត្រង់នៅពេលការប្រជុំចាប់ផ្ដើមនោះទេ។",
      "ពួកគេមិនទាន់បានបញ្ចប់គម្រោងនៅត្រឹមថ្ងៃសុក្រសប្ដាហ៍មុននោះទេ។"
    ],
    "questionForm": "Had + Subject + past participle (V3) + ...?",
    "questionFormKhmer": "Had + ប្រធាន + កិរិយាសព្ទទី៣ (V3) + ...?",
    "visualTimeline": "Past (Event A) -> Past (Event B) -> Now",
    "visualTimelineKhmer": "អតីតកាល (ព្រឹត្តិការណ៍ ក) -> អតីតកាល (ព្រឹត្តិការណ៍ ខ) -> បច្ចុប្បន្ន",
    "examples": [
      {
        "english": "By the time he woke up, his wife had already left for work.",
        "translation": "He woke up after she left.",
        "translationKhmer": "នៅពេលដែលគាត់ភ្ញាក់ពីគេង ប្រពន្ធរបស់គាត់បានចេញទៅធ្វើការបាត់ហើយ។",
        "note": "Note the use of 'already' to emphasize the completion."
      },
      {
        "english": "I couldn't get into the house because I had lost my keys.",
        "translation": "Losing the keys happened before trying to enter.",
        "translationKhmer": "ខ្ញុំមិនអាចចូលផ្ទះបានទេ ព្រោះខ្ញុំបានបាត់សោផ្ទះ។",
        "note": "This explains the reason for the past situation."
      }
    ],
    "tips": [
      "Look for time markers like 'before', 'after', 'by the time', and 'already' to identify when to use Past Perfect.",
      "Remember that Past Perfect is never used alone; it usually requires a reference point in the past to make sense."
    ],
    "commonMistakes": [
      {
        "incorrect": "I finished my work, then I had arrived home.",
        "correct": "I had finished my work before I arrived home.",
        "explanation": "Do not use Past Perfect for a sequence of events. Use Simple Past for sequential events; use Past Perfect only for the event that happened first."
      }
    ],
    "summary": "Use the Past Perfect Simple to highlight that one past action occurred before another past action.",
    "summaryKhmer": "ប្រើ Past Perfect Simple ដើម្បីបញ្ជាក់ថា សកម្មភាពអតីតកាលមួយបានកើតឡើងមុនសកម្មភាពអតីតកាលមួយទៀត។",
    "practiceQuestions": [
      {
        "id": "q1",
        "question": "Choose the correct sentence: 'By the time I arrived, the guests ______.'",
        "options": [
          "have left",
          "had left",
          "left",
          "were leaving"
        ],
        "correctAnswer": "had left"
      },
      {
        "id": "q2",
        "question": "Which sentence is grammatically correct?",
        "options": [
          "She had went to the store.",
          "She had gone to the store.",
          "She have gone to the store.",
          "She did went to the store."
        ],
        "correctAnswer": "She had gone to the store."
      }
    ]
  },
  {
    "id": "present-perfect",
    "title": "Present Perfect Simple Tense",
    "level": "B1",
    "shortDesc": "Master how to connect past actions to the present moment using the present perfect simple tense.",
    "shortDescKhmer": "ស្វែងយល់ពីរបៀបតភ្ជាប់សកម្មភាពអតីតកាលទៅនឹងពេលបច្ចុប្បន្នដោយប្រើកាលអតីតកាលសម្រេច (Present Perfect Simple)។",
    "explanation": "The Present Perfect Simple tense is used to describe an action that happened in the past but still has a connection to the present. It is formed using the auxiliary verb 'have' (or 'has' for he, she, it) followed by the past participle (V3) of the main verb.\n\nWe generally use this tense for experiences in our lives, changes over time, accomplishments, and unfinished actions that started in the past and continue now. Words like 'ever', 'never', 'just', 'already', 'yet', 'since', and 'for' are very common with this tense.",
    "explanationKhmer": "កាល Present Perfect Simple ត្រូវាបានប្រើដើម្បីពិពណ៌នាអំពីសកម្មភាពមួយដែលបានកើតឡើងក្នុងអតីតកាល ប៉ុន្តែនៅតែមានទំនាក់ទំនងជាមួយបច្ចុប្បន្ន។ វាត្រូវបានបង្កើតឡើងដោយប្រើកិរិយាសព្ទជំនួយ 'have' (ឬ 'has' សម្រាប់ he, ជំនួយ she, it) តាមបន្ទាប់មកដោយកិរិយាសព្ទអតីតកាលទម្រង់ទីបី (V3)។\n\nយើងតែងតែប្រើកាលនេះសម្រាប់បទពិសោធន៍ក្នុងជីវិត ការប្រែប្រួលតាមពេលវេលា សមិទ្ធផល និងសកម្មភាពដែលមិនទាន់ចប់ដែលបានចាប់ផ្តើមក្នុងអតីតកាលហើយបន្តដល់បច្ចុប្បន្ន។ ពាក្យដូចជា 'ever', 'never', 'just', 'already', 'yet', 'since' និង 'for' គឺជារឿងធម្មតាបំផុតជាមួយកាលនេះ។",
    "formula": "Subject + have/has + Past Participle (V3)",
    "formulaKhmer": "ប្រធាន (Subject) + have/has + កិរិយាសព្ទអតីតកាលទម្រង់ទី៣ (V3)",
    "whenToUse": [
      "Life experiences up to the present moment",
      "Actions that happened at an unspecified time in the past with a present result",
      "Unfinished states or actions that started in the past and continue now"
    ],
    "whenToUseKhmer": [
      "បទពិសោធន៍ជីវិតរហូតដល់ពេលបច្ចុប្បន្ន",
      "សកម្មភាពដែលបានកើតឡើងនៅពេលមិនជាក់លាក់ក្នុងអតីតកាល ប៉ុន្តែមានលទ្ធផលនៅបច្ចុប្បន្ន",
      "សកម្មភាពដែលមិនទាន់ចប់ដែលបានចាប់ផ្តើមក្នុងអតីតកាល និងបន្តរហូតដល់ពេលបច្ចុប្បន្ន"
    ],
    "positiveExamples": [
      "I have visited France three times.",
      "She has finished her homework."
    ],
    "positiveExamplesKhmer": [
      "ខ្ញុំធ្លាប់បានទៅទស្សនកិច្ចប្រទេសបារាំងបីដងហើយ។",
      "នាងបានធ្វើកិច្ចការផ្ទះរបស់នាងរួចរាល់ហើយ។"
    ],
    "negativeExamples": [
      "I have not (haven't) seen that movie.",
      "He has not (hasn't) eaten lunch yet."
    ],
    "negativeExamplesKhmer": [
      "ខ្ញុំមិនធ្លាប់បានមើលភាពយន្តនោះទេ។",
      "គាត់មិនទាន់បានញ៉ាំបាយថ្ងៃត្រង់នៅឡើយទេ។"
    ],
    "questionForm": "Have/Has + Subject + Past Participle (V3) + ?",
    "questionFormKhmer": "Have/Has + ប្រធាន + កិរិយាសព្ទអតីតកាលទម្រង់ទី៣ (V3) + ?",
    "visualTimeline": "Past action connected to the Present (Past -> Present)",
    "visualTimelineKhmer": "សកម្មភាពអតីតកាលដែលភ្ជាប់មកបច្ចុប្បន្ន (អតីតកាល -> បច្ចុប្បន្ន)",
    "examples": [
      {
        "english": "I have lived in Phnom Penh for five years.",
        "translation": "I started living here five years ago and I still live here.",
        "translationKhmer": "ខ្ញុំបានរស់នៅរាជធានីភ្នំពេញរយៈពេលប្រាំឆ្នាំមកហើយ។",
        "note": "Use 'for' with a period of time (e.g., five years)."
      },
      {
        "english": "She has already lost her keys.",
        "translation": "She lost them recently, and she still doesn't have them now.",
        "translationKhmer": "នាងបានបាត់សោរបស់នាងរួចទៅហើយ។",
        "note": "'Already' shows that the action happened sooner than expected."
      }
    ],
    "tips": [
      "Remember that 'have' is used with I, you, we, they, while 'has' is used with he, she, it.",
      "Do not use the present perfect with a specific finished time in the past (like yesterday, in 1995); use past simple instead."
    ],
    "commonMistakes": [
      {
        "incorrect": "I have went to Angkor Wat.",
        "correct": "I have gone to Angkor Wat.",
        "explanation": "Always use the past participle (V3) after have/has, not the past simple form (went)."
      }
    ],
    "summary": "The present perfect simple tense connects the past to the present, focusing on experiences, changes, or unfinished actions using have/has + V3.",
    "summaryKhmer": "កាល Present Perfect Simple ភ្ជាប់អតីតកាលទៅនឹងបច្ចុប្បន្ន ដោយផ្តោតលើបទពិសោធន៍ ការផ្លាស់ប្តូរ ឬសកម្មភាពដែលមិនទាន់ចប់ដោយប្រើ have/has + V3។",
    "practiceQuestions": [
      {
        "id": "q1",
        "question": "Choose the correct sentence:",
        "options": [
          "She has lived here since 2010.",
          "She has live here since 2010.",
          "She have lived here since 2010.",
          "She lived has here since 2010."
        ],
        "correctAnswer": "She has lived here since 2010."
      },
      {
        "id": "q2",
        "question": "Fill in the blank: We ______ already eaten dinner.",
        "options": [
          "has",
          "have",
          "had",
          "having"
        ],
        "correctAnswer": "have"
      }
    ]
  },
  {
    "id": "present-perfect-continuous",
    "title": "Present Perfect Continuous Tense",
    "level": "B1",
    "shortDesc": "Learn how to use the Present Perfect Continuous tense to describe actions that started in the past and are still continuing now.",
    "shortDescKhmer": "ស្វែងយល់ពីរបៀបប្រើប្រាស់កាល Present Perfect Continuous ដើម្បីពិពណ៌នាអំពីសកម្មភាពដែលបានចាប់ផ្តើមនៅអតីតកាល ហើយនៅតែបន្តរហូតដល់បច្ចុប្បន្ន។",
    "explanation": "The Present Perfect Continuous tense (also known as the present perfect progressive) shows an action that started in the past and continues up to the present moment. We form this tense using the subject, followed by 'have' or 'has', the word 'been', and the main verb ending in '-ing' (present participle).\n\nWe frequently use 'for' and 'since' with this tense. We use 'for' to talk about a duration of time (e.g., for two hours, for three years) and 'since' to talk about a specific starting point in time (e.g., since 9 AM, since Monday). This tense places strong emphasis on the duration or continuous nature of an activity.",
    "explanationKhmer": "កាល Present Perfect Continuous (ដែលត្រូវបានគេស្គាល់ផងដែរថាជា present perfect progressive) បង្ហាញពីសកម្មភាពដែលបានចាប់ផ្តើមនៅអតីតកាល ហើយបន្តរហូតដល់ពេលបច្ចុប្បន្ន។ យើងបង្កើតកាលនេះដោយប្រើប្រាស់ប្រធាន (subject) តាមដោយ 'have' ឬ 'has', ពាក្យ 'been', និងកិរិយាសព្ទដើមដែលមានថែម '-ing' (present participle)។\n\nយើងតែងតែប្រើប្រាស់ពាក្យ 'for' និង 'since' ជាមួយកាលនេះ។ យើងប្រើ 'for' ដើម្បីនិយាយអំពីរយៈពេល (ឧទាហរណ៍៖ for two hours, for three years) និងប្រើ 'since' ដើម្បីនិយាយអំពីចំណុចចាប់ផ្តើមជាក់លាក់ណាមួយក្នុងពេល (ឧទាហរណ៍៖ since 9 AM, since Monday)។ កាលនេះផ្ដល់ការសង្កត់ធ្ងន់យ៉ាងខ្លាំងទៅលើរយៈពេល ឬភាពជាប់លាប់នៃសកម្មភាពណាមួយ។",
    "formula": "Subject + have/has + been + Verb-ing",
    "formulaKhmer": "ប្រធាន (Subject) + have/has + been + កិរិយាសព្ទថែម ing",
    "whenToUse": [
      "To describe an action that started in the past and is still continuing now",
      "To talk about recent actions that have just finished and have a result in the present",
      "To emphasize the duration of an activity using 'for' or 'since'"
    ],
    "whenToUseKhmer": [
      "ដើម្បីពិពណ៌នាអំពីសកម្មភាពដែលបានចាប់ផ្តើមនៅអតីតកាល ហើយនៅតែបន្តរហូតដល់ពេលបច្ចុប្បន្ន",
      "ដើម្បីនិយាយអំពីសកម្មភាពថ្មីៗដែលទើបតែបានបញ្ចប់ ហើយមានលទ្ធផលនៅពេលបច្ចុប្បន្ន",
      "ដើម្បីសង្កត់ធ្ងន់លើរយៈពេលនៃសកម្មភាពដោយប្រើ 'for' ឬ 'since'"
    ],
    "positiveExamples": [
      "I have been studying English for three years.",
      "She has been working here since 2020."
    ],
    "positiveExamplesKhmer": [
      "ខ្ញុំបាននឹងកំពុងសិក្សាភាសាអង់គ្លេសអស់រយៈពេលបីឆ្នាំហើយ។",
      "នាងបាននឹងកំពុងបម្រើការងារនៅទីនេះចាប់តាំងពីឆ្នាំ ២០២០ មកម្ល៉េះ។"
    ],
    "negativeExamples": [
      "I haven't been sleeping well lately.",
      "He hasn't been practicing the piano."
    ],
    "negativeExamplesKhmer": [
      "ខ្ញុំមិនបាននឹងកំពុងគេងលក់ស្រួលទេប៉ុន្មានថ្ងៃមកនេះ។",
      "គាត់មិនបាននឹងកំពុងហាត់លេងព្យាណូទេ។"
    ],
    "questionForm": "Have/Has + Subject + been + Verb-ing + ?",
    "questionFormKhmer": "Have/Has + ប្រធាន (Subject) + been + កិរិយាសព្ទថែម ing + ?",
    "visualTimeline": "Past (Action starts) ---------> Present (Action continues)",
    "visualTimelineKhmer": "អតីតកាល (សកម្មភាពចាប់ផ្តើម) ---------> បច្ចុប្បន្ន (សកម្មភាពបន្ត)",
    "examples": [
      {
        "english": "It has been raining all morning.",
        "translation": "The rain started in the morning and is still falling now.",
        "translationKhmer": "ភ្លៀងបាននឹងកំពុងធ្លាក់ពេញមួយព្រឹកហើយ។",
        "note": "We often use this tense for weather conditions happening over a period."
      },
      {
        "english": "How long have you been waiting here?",
        "translation": "Asking about the duration of someone's wait starting from the past up to now.",
        "translationKhmer": "តើអ្នកបាននឹងកំពុងចាំទីនេះរយៈពេលប៉ុន្មានហើយ?",
        "note": "Frequently used with 'How long' questions."
      }
    ],
    "tips": [
      "Do not use stative verbs (like know, like, want, belong) in continuous tenses. Use the Present Perfect Simple instead.",
      "Remember to change 'have' to 'has' for third-person singular subjects (he, she, it)."
    ],
    "commonMistakes": [
      {
        "incorrect": "I am working here for five years.",
        "correct": "I have been working here for five years.",
        "explanation": "Do not use the Present Continuous (am working) with 'for' and a time duration. Use the Present Perfect Continuous to show an action continuing from the past to the present."
      }
    ],
    "summary": "Use the Present Perfect Continuous (have/has been + verb-ing) to connect a continuous past action to the present moment, especially when focusing on duration.",
    "summaryKhmer": "ប្រើប្រាស់កាល Present Perfect Continuous (have/has been + verb-ing) ដើម្បីភ្ជាប់សកម្មភាពបន្តបន្ទាប់ពីអតីតកាលមកកាន់ពេលបច្ចុប្បន្ន ជាពិសេសនៅពេលដែលផ្ោតលើរយៈពេល។",
    "practiceQuestions": [
      {
        "id": "q1",
        "question": "Choose the correct form: She _____ waiting for the bus for over an hour.",
        "options": [
          "has been",
          "have been",
          "is been",
          "has"
        ],
        "correctAnswer": "has been"
      },
      {
        "id": "q2",
        "question": "Which sentence correctly uses 'since'?",
        "options": [
          "I have been living here since three years.",
          "I have been living here since 2018.",
          "I am living here since 2018.",
          "I live here since three years."
        ],
        "correctAnswer": "I have been living here since 2018."
      }
    ]
  },
  {
    "id": "relative-clauses",
    "title": "Defining Relative Clauses (Who, Which, That, Where)",
    "level": "B1",
    "shortDesc": "Learn how to use defining relative clauses with who, which, that, and where to give essential information about people, things, and places.",
    "shortDescKhmer": "ស្វែងយល់ពីរបៀបប្រើប្រាស់ប្រយោគឃ្លាដែលទាក់ទងគ្នា (Defining Relative Clauses) ជាមួយ who, which, that និង where ដើម្បីផ្តល់ព័ត៌មានសំខាន់ៗអំពីមនុស្ស វត្ថុ និងទីកន្លែង។",
    "explanation": "A defining relative clause gives essential information about a noun, telling us exactly which person, thing, or place we are talking about. Without this clause, the sentence would be incomplete in meaning. We use specific relative pronouns and adverbs depending on what we are describing:\n\n1. **Who**: Used for people. Example: 'The man **who** lives next door is a doctor.'\n2. **Which**: Used for things and animals. Example: 'The car **which** I bought is red.'\n3. **That**: Used for both people and things (often used instead of 'who' or 'which' in informal contexts). Example: 'The book **that** is on the table is mine.'\n4. **Where**: Used for places. Example: 'This is the hotel **where** we stayed during our vacation.'\n\nNote that defining relative clauses are never separated by commas from the rest of the sentence because the information inside them is crucial to identify the noun.",
    "explanationKhmer": "ប្រយោគឃ្លាដែលទាក់ទងគ្នា (Defining Relative Clauses) ផ្តល់ព័ត៌មានសំខាន់ៗអំពីនាម ដោយប្រាប់យើងឱ្យដឹងច្បាស់ថា តើមនុស្ស វត្ថុ ឬទីកន្លែងណាមួយដែលយើងកំពុងនិយាយដល់។ បើគ្មានឃ្លានេះទេ អត្ថន័យនៃប្រយោគនឹងមិនពេញលេញទេ។ យើងប្រើប្រាស់សព្វនាមដែលទាក់ទងគ្នាជាក់លាក់អាស្រ័យលើអ្វីที่เราកំពុងពណ៌នា៖\n\n១. **Who**: ប្រើសម្រាប់មនុស្ស។\n២. **Which**: ប្រើសម្រាប់វត្ថុ និងសត្វ។\n៣. **That**: ប្រើបានទាំងមនុស្ស និងវត្ថុ (ច្រើនប្រើជំនួស who ឬ which ក្នុងកាលៈទេសៈមិនផ្លូវការ)។\n៤. **Where**: ប្រើសម្រាប់ទីកន្លែង។\n\nសូមកត់សម្គាល់ថា ឃ្លាទាំងនេះមិនត្រូវខ័ណ្ឌដោយសញ្ញាក្បៀស (commas) ទេ ព្រោះព័ត៌មាននៅក្នុងនោះមានសារៈសំខាន់ណាស់ក្នុងការកំណត់អត្តសញ្ញាណនាម។",
    "formula": "Noun + (Who / Which / That / Where) + Verb / Subject + Verb",
    "formulaKhmer": "នាម + (Who / Which / That / Where) + កិរិយាសព្ទ / ប្រធាន + កិរិយាសព្ទ",
    "whenToUse": [
      "To identify exactly which person we are talking about using 'who' or 'that'.",
      "To specify which object or animal we mean using 'which' or 'that'.",
      "To indicate the exact location or place using 'where'."
    ],
    "whenToUseKhmer": [
      "ដើម្បីសម្គាល់ឱ្យបានច្បាស់ថាតើមនុស្សណាមួយที่เราកំពុងនិយាយដល់ ដោយប្រើ who ឬ that ។",
      "ដើម្បីបញ្ជាក់ថាតើវត្ថុ ឬសត្វណាមួយដែលយើងចង់និយាយដល់ ដោយប្រើ which ឬ that ។",
      "ដើម្បីបង្ហាញទីកន្លែងច្បាស់លាស់ដោយប្រើ where ។"
    ],
    "positiveExamples": [
      "She is the teacher who taught me English.",
      "This is the restaurant where we had dinner."
    ],
    "positiveExamplesKhmer": [
      "គាត់គឺជាគ្រូបង្រៀនដែលបានបង្រៀនភាសាអង់គ្លេសដល់ខ្ញុំ។",
      "នេះគឺជាភោជនីយដ្ឋានដែលពួកយើងបានញ៉ាំអាហារពេលល្ងាច។"
    ],
    "negativeExamples": [
      "The man which works here is friendly.",
      "The house where I bought is big."
    ],
    "negativeExamplesKhmer": [
      "បុរសដែលធ្វើការទីនេះគឺរាក់ទាក់។ (ខុស ព្រោះប្រើ which ជំនួសឱ្យ who សម្រាប់មនុស្ស)",
      "ផ្ទះដែលខ្ញុំបានទិញគឺធំ។ (ខុស ព្រោះប្រើ where ជំនួសឱ្យ which សម្រាប់វត្ថុ)"
    ],
    "questionForm": "Not typically used as a direct question structure, but relative clauses are embedded within questions (e.g., 'Do you know the man who lives here?')",
    "questionFormKhmer": "ជាទូទៅមិនមែនជាទម្រង់សំណួរផ្ទាល់ទេ ប៉ុន្តែឃ្លាដែលទាក់ទងគ្នាអាចត្រូវបានបង្កប់នៅក្នុងសំណួរ។",
    "visualTimeline": "Noun Reference -> Relative Pronoun -> Defining Information (Essential Context)",
    "visualTimelineKhmer": "ការយោងទៅលើនាម -> សព្វនាមទាក់ទង -> ព័ត៌មានកំណត់ (បរិបទសំខាន់)",
    "examples": [
      {
        "english": "The artist who painted this picture is very famous.",
        "translation": "The person responsible for this painting is well-known globally.",
        "translationKhmer": "វិចិត្រករដែលបានគូររូបភាពនេះគឺល្បីល្បាញខ្លាំងណាស់។",
        "note": "'Who' refers to the artist (person)."
      },
      {
        "english": "I lost the keys that you gave me yesterday.",
        "translation": "The specific keys handed to me previously cannot be found.",
        "translationKhmer": "ខ្ញុំបានបាត់សោដែលអ្នកបានឱ្យខ្ញុំកាលពីម្សិលមិញ។",
        "note": "'That' can replace 'which' for things in defining clauses."
      }
    ],
    "tips": [
      "Remember: Who = People, Which = Things, Where = Places, That = People or Things.",
      "Never use commas around defining relative clauses because the information is necessary to understand the sentence."
    ],
    "commonMistakes": [
      {
        "incorrect": "The girl which won the prize is my friend.",
        "correct": "The girl who/that won the prize is my friend.",
        "explanation": "Use 'who' or 'that' for people, never 'which'."
      }
    ],
    "summary": "Defining relative clauses use who, which, that, and where to give essential identifying information about nouns without using commas.",
    "summaryKhmer": "ប្រយោគឃ្លាដែលទាក់ទងគ្នាប្រើ who, which, that និង where ដើម្បីផ្តល់ព័ត៌មានកំណត់ដ៏សំខាន់អំពីនាមដោយមិនប្រើសញ្ញាក្បៀស។",
    "practiceQuestions": [
      {
        "id": "q1",
        "question": "Choose the correct relative pronoun: 'The computer _____ I bought last week is already broken.'",
        "options": [
          "who",
          "which",
          "where",
          "whom"
        ],
        "correctAnswer": "which"
      },
      {
        "id": "q2",
        "question": "Choose the correct relative pronoun: 'Do you know the woman _____ lives in that big house?'",
        "options": [
          "which",
          "where",
          "who",
          "what"
        ],
        "correctAnswer": "who"
      }
    ]
  },
  {
    "id": "reported-speech",
    "title": "Reported Speech (Indirect Statements)",
    "level": "B1",
    "shortDesc": "Learn how to tell someone what another person said without using their exact quotation marks.",
    "shortDescKhmer": "ស្វែងយល់ពីរបៀបប្រាប់អ្នកដទៃអំពីអ្វីដែលមនុស្សម្នាក់ទៀតបាននិយាយដោយមិនប្រើប្រាស់ពាក្យពិតប្រាកដរបស់ពួកគេ។",
    "explanation": "Reported speech (also known as indirect speech) is used to communicate what someone else said, but without using their exact words. When we change direct speech into reported speech, we usually 'backshift' the verb tenses (moving them one step further into the past) and change pronouns and time expressions to reflect the new perspective of time and place.\n\nFor example, the present simple tense (\"I like pizza\") generally changes to the past simple tense (\"He said that he liked pizza\"). Reporting verbs like 'say' and 'tell' are commonly used. Note that 'tell' must always be followed by an object pronoun (e.g., *tell me, tell him, tell us*), whereas 'say' does not require an object directly after it.",
    "explanationKhmer": "ពាក្យរាយការណ៍ (ដែលហៅម្យ៉ាងទៀតថា ប្រយោល) ត្រូវបានប្រើដើម្បីបញ្ជូនអ្វីដែលអ្នកដទៃបាននិយាយ ប៉ុន្តែដោយមិនប្រើពាក្យពិតប្រាកដរបស់ពួកគេ។ នៅពេលដែលយើងប្តូរពីប្រយោគផ្ទាល់ទៅជាប្រយោគរាយការណ៍ ជាទូ្បាន់យើងប្តូរទ្ងន់កិរិយាសព្ទថយក្រោយ (ផ្លាស់ទីវាទៅអតីតកាលមួយជំហានទៀត) និងប្តូរ pronouns ព្រមទាំងកន្សោមពេលវេលាដើម្បីឆ្លុះបញ្ចាំងពីទស្សនៈថ្មីនៃពេលវេលានិងទីកន្លែង។\n\nឧទាហរណ៍ កិរិយាសព្ទបច្ចុប្បន្នកាលសាមញ្ញ (\"I like pizza\") ជាទូទៅប្តូរទៅជាអតីតកាលសាមញ្ញ (\"He said that he liked pizza\")។ កិរិយាសព្ទរាយការណ៍ដូចជា 'say' និង 'tell' ត្រូវបានប្រើជាទូទៅ។ សូមចំណាំថា 'tell' ត្រូវតែមានកម្មបទតាមក្រោយជានិច្ច (ឧ. *tell me, tell him, tell us*) ចំណែកឯ 'say' មិនទាមទារកម្មបទភ្លាមៗនៅខាងក្រោយវាទេ។",
    "formula": "Subject + Reporting Verb (said/told) + (that) + Backshifted Clause",
    "formulaKhmer": "ប្រធាន + កិរិយាសព្ទរាយការណ៍ (said/told) + (that) + ប្រយោគរាយការណ៍ថយក្រោយ",
    "whenToUse": [
      "To retell a conversation or statement that happened in the past.",
      "When writing stories, reports, or summarizing news and interviews.",
      "When explaining instructions or messages given by someone else."
    ],
    "whenToUseKhmer": [
      "ដើម្បីរៀបរាប់ពីការសន្ទនា ឬការថ្លែងដែលបានកើតឡើងក្នុងអតីតកាល។",
      "ពេលសរសេររឿង របាយការណ៍ ឬសង្ខេបព័ត៌មាន និងកិច្ចសម្ភាសន៍។",
      "ពេលពន្យល់ពីការណែនាំ ឬសារដែលបានផ្ដល់ដោយអ្នកដទៃ។"
    ],
    "positiveExamples": [
      "She said that she was tired.",
      "He told me that he would call later."
    ],
    "positiveExamplesKhmer": [
      "នាងបាននិយាយថានាងអស់កម្លាំង។",
      "គាត់បានប្រាប់ខ្ញុំថាគាត់នឹងទូរស័ព្ទមកពេលក្រោយ។"
    ],
    "negativeExamples": [
      "She said me that she was tired.",
      "He told that he is busy."
    ],
    "negativeExamplesKhmer": [
      "នាងបាននិយាយខ្ញុំថានាងអស់កម្លាំង (ខុសវេយ្យាករណ៍)។",
      "គាត់បានប្រាប់ថាគាត់រវល់ (ខុសវេយ្យាករណ៍)។"
    ],
    "questionForm": "Did + Subject + say + reported statement?",
    "questionFormKhmer": "តើសំណួររាយការណ៍បង្កើតឡើងដោយរបៀបណា?",
    "visualTimeline": "Direct Speech (Present) -> Backshift -> Reported Speech (Past)",
    "visualTimelineKhmer": "ប្រយោគផ្ទាល់ (បច្ចុប្បន្ន) -> ថយក្រោយ -> ប្រយោគរាយការណ៍ (អតីតកាល)",
    "examples": [
      {
        "english": "Direct: 'I live in London.' -> Reported: She said that she lived in London.",
        "translation": "Present Simple changes to Past Simple.",
        "translationKhmer": "ប្រយោគផ្ទាល់៖ 'I live in London.' -> រាយការណ៍៖ She said that she lived in London (បច្ចុប្បន្នកាលសាមញ្ញប្រែទៅជាអតីតកាលសាមញ្ញ)",
        "note": "The word 'that' is optional and can be omitted."
      },
      {
        "english": "Direct: 'I will help you.' -> Reported: He told me that he would help me.",
        "translation": "Modal 'will' changes to 'would'.",
        "translationKhmer": "ប្រយោគផ្ទាល់៖ 'I will help you.' -> រាយការណ៍៖ He told me that he would help me (ម៉ូដាល់ 'will' ប្រែទៅជា 'would')",
        "note": "Remember to change pronouns like 'you' to 'me'."
      }
    ],
    "tips": [
      "Always remember the 'tell + object' and 'say + no object' rule.",
      "Think of backshifting as taking one step back into the past for verb tenses."
    ],
    "commonMistakes": [
      {
        "incorrect": "He said me he was happy.",
        "correct": "He told me he was happy.",
        "explanation": "You must use 'told' when there is a direct personal object (me, you, him) immediately following."
      },
      {
        "incorrect": "She said that she is coming.",
        "correct": "She said that she was coming.",
        "explanation": "When the reporting verb is in the past ('said'), the tense inside the reported clause usually backshifts from present to past."
      }
    ],
    "summary": "In reported speech, we change direct statements by shifting verb tenses into the past and adjusting pronouns and time words accordingly.",
    "summaryKhmer": "នៅក្នុងប្រយោគរាយការណ៍ យើងប្តូរប្រយោគផ្ទាល់ដោយប្តូរកិរិយាសព្ទទៅជាអតីតកាល និងកែសម្រួល pronoun និងពាក្យពេលវេលាឱ្យបានសមស្រប។",
    "practiceQuestions": [
      {
        "id": "q1",
        "question": "Choose the correct reported form of: 'I love chocolate,' she said.",
        "options": [
          "She said that she loves chocolate.",
          "She said that she loved chocolate.",
          "She told that she loved chocolate.",
          "She said me she loved chocolate."
        ],
        "correctAnswer": "She said that she loved chocolate."
      },
      {
        "id": "q2",
        "question": "Choose the correct reported form of: 'We are moving to Paris,' they told us.",
        "options": [
          "They told us that we were moving to Paris.",
          "They told us that they are moving to Paris.",
          "They told us that they were moving to Paris.",
          "They said us that they were moving to Paris."
        ],
        "correctAnswer": "They told us that they were moving to Paris."
      }
    ]
  },
  {
    "id": "second-conditional",
    "title": "Second Conditional (Hypothetical Present)",
    "level": "B1",
    "shortDesc": "Master how to talk about imaginary, hypothetical situations in the present or future and their improbable outcomes.",
    "shortDescKhmer": "ស្វែងយល់ពីរបៀបនិយាយអំពីស្ថានភាពស្រមើស្រមៃ ឬសម្មតិកម្មក្នុងពេលបច្ចុប្បន្ន ឬអនាគត និងលទ្ធផលដែលមិនសូវអាចកើតមាន។",
    "explanation": "The second conditional is used to imagine what would happen if things were different in the present or future. We use it for situations that are completely unreal, impossible, or unlikely to happen. For example, if you are not rich right now, you can imagine: 'If I won the lottery, I would buy a big house.' Notice that we use the past simple tense in the 'if' clause to talk about a hypothetical present, and 'would' plus the base verb in the main clause to show the imaginary result.\n\nAn important rule to remember for the second conditional is with the verb 'to be'. Traditionally, we use 'were' for all subjects (even I, he, she, it) in formal English, such as 'If I were you, I would study harder.' However, in modern spoken English, 'was' is also commonly heard with I, he, she, and it, though 'were' remains the standard choice in writing and formal speech.",
    "explanationKhmer": "លក្ខខណ្ឌទីពីរ (Second Conditional) ត្រូវ បាន ប្រើ ដើម្បី ស្រមៃ មើល នូវ អ្វី ដែល អាច កើតឡើង ប្រសិនបើ ស្ថានភាព ក្នុង ពេល បច្ចុប្បន្ន ឬ អនាគត មាន ភាព ខុសគ្នា។ យើង ប្រើ វា ចំពោះ ស្ថានភាព ដែល មិន ពិត ទាំងស្រុង មិនអាច ទៅរួច ឬ មិនសូវ មាន លទ្ធភាព កើតឡើង។ ជា ឧទាហរណ៍ ប្រសិនបើ អ្នក មិនមែន ជា អ្នកមាន ឥឡូវនេះ ទេ អ្នក អាច ស្រមៃ ថា៖ 'If I won the lottery, I would buy a big house.' (ប្រសិនបើ ខ្ញុំ ឈ្នះ ឆ្នោត ខ្ញុំ នឹង ទិញ ផ្ទះ ធំ មួយ។) សូម កត់សម្គាល់ ថា យើង ប្រើ កិរិយាសព្ទ អតីតកាល ធម្មតា (Past Simple) ក្នុង ប្រយោគ 'if' ដើម្បី និយាយ អំពី សម្មតិកម្ម បច្ចុប្បន្ន និង ពាក្យ 'would' បូក នឹង កិរិយាសព្ទ ដើម ក្នុង ប្រយោគ ចម្បង ដើម្បី បង្ហាញ ពី លទ្ធផល ស្រមើស្រមៃ។\n\nច្បាប់ ដ៏ សំខាន់ មួយ ដែល ត្រូវ ចងចាំ សម្រាប់ លក្ខខណ្ឌ ទីពីរ គឺ ទាក់ទង នឹង កិរិយាសព្ទ 'to be'។ ជាទូទៅ យើង ប្រើ 'were' សម្រាប់ ប្រធាន ទាំងអស់ (សូម្បីតែ I, he, she, it) ក្នុង ភាសា អង់គ្លេស ផ្លូវការ ដូចជា 'If I were you, I would study harder.' ប៉ុន្តែ ក្នុង ភាសា អង់គ្លេស និយាយ ស្ដាំ សព្វថ្ងៃ ពាក្យ 'was' ក៏ ត្រូវ បាន គេ ប្រើ ទូទៅ ដែរ សម្រាប់ I, he, she, និង it ទោះបីជា 'were' នៅតែ ជា ជម្រើស ស្តង់ដារ ក្នុងការ សរសេរ និង ការនិយាយ ផ្លូវការ ក៏ដោយ។",
    "formula": "If + Subject + Past Simple, Subject + would/could/might + Base Verb",
    "formulaKhmer": "ប្រសិនបើ + ប្រធាន + អតីតកាលធម្មតា, ប្រធាន + would/could/might + កិរិយាសព្ទដើម",
    "whenToUse": [
      "To talk about imaginary situations in the present",
      "To give advice using 'If I were you...'",
      "To talk about unlikely future possibilities"
    ],
    "whenToUseKhmer": [
      "ដើម្បី និយាយ អំពី ស្ថានភាព ស្រមើស្រមៃ ក្នុង ពេល បច្ចុប្បន្ន",
      "ដើម្បី ផ្ដល់ យោបល់ ដោយ ប្រើ 'If I were you...'",
      "ដើម្បី និយាយ អំពី លទ្ធភាព អនាគត ដែល មិនសូវ កើតឡើង"
    ],
    "positiveExamples": [
      "If I had a million dollars, I would travel the world.",
      "She would be happier if she lived in the countryside."
    ],
    "positiveExamplesKhmer": [
      "ប្រសិនបើ ខ្ញុំ មាន លុយ មួយ លាន ដុល្លារ ខ្ញុំ នឹង ធ្វើដំណើរកម្សាន្ត ជុំវិញ ពិភពលោក។",
      "នាង នឹង សប្បាយចិត្ត ជាង នេះ ប្រសិនបើ នាង រស់នៅ ស្រុកស្រែ។"
    ],
    "negativeExamples": [
      "If I didn't have to work, I wouldn't stay home.",
      "They wouldn't know what to do if they got lost."
    ],
    "negativeExamplesKhmer": [
      "ប្រសិនបើ ខ្ញុំ មិនចាំបាច់ ធ្វើការ ទេ ខ្ញុំ នឹង មិន នៅ ផ្ទះ ទេ។",
      "ពួកគេ នឹង មិន ដឹង ថា ត្រូវ ធ្វើ អ្វី ទេ ប្រសិនបើ ពួកគេ វង្វេង ផ្លូវ។"
    ],
    "questionForm": "What would + Subject + do + if + Subject + Past Simple?",
    "questionFormKhmer": "តើ (ប្រធាន) នឹង ធ្វើ អ្វី ប្រសិនបើ (ប្រធាន) + កិរិយាសព្ទអតីតកាល?",
    "visualTimeline": "Present / Future Reality (Unreal/Hypothetical Moment) -> Imagined Result",
    "visualTimelineKhmer": "ការពិតបច្ចុប្បន្ន/អនាគត (ពេលសម្មតិកម្មមិនពិត) -> លទ្ធផលស្រមើស្រមៃ",
    "examples": [
      {
        "english": "If I spoke French fluently, I would move to Paris.",
        "translation": "I don't speak French fluently now, so living in Paris is just an imaginary dream.",
        "translationKhmer": "ប្រសិនបើ ខ្ញុំ និយាយ ភាសា បារាំង បាន យ៉ាង ស្ទាត់ជំនាញ ខ្ញុំ នឹង ផ្លាស់ ទៅ រស់នៅ ទីក្រុង ប៉ារីស។",
        "note": "Notice the past tense 'spoke' refers to a present lack of ability."
      },
      {
        "english": "If I were the boss, I would give everyone extra holidays.",
        "translation": "I am not the boss right now, but this is what I imagine doing in that role.",
        "translationKhmer": "ប្រសិនបើ ខ្ញុំ ជា មេ ខ្ញុំ នឹង ឱ្យ ថ្ងៃឈប់សម្រាក បន្ថែម ដល់ អ្នកទាំងអស់គ្នា។",
        "note": "Always use 'were' instead of 'was' in formal situations with 'I', 'he', 'she', and 'it'."
      }
    ],
    "tips": [
      "Use 'If I were you...' as a fixed phrase to give advice in English.",
      "You can swap the clauses around without changing the meaning: 'I would buy a car if I had money' needs no comma."
    ],
    "commonMistakes": [
      {
        "incorrect": "If I will have time, I would help you.",
        "correct": "If I had time, I would help you.",
        "explanation": "Never use 'will' in the 'if' clause of a second conditional sentence. Use the past simple tense instead."
      }
    ],
    "summary": "The second conditional uses the past simple tense in the 'if' clause and 'would' + base verb in the main clause to express unreal present or future situations.",
    "summaryKhmer": "លក្ខខណ្ឌទីពីរប្រើកិរិយាសព្ទអតីតកាលធម្មតា (past simple) ក្នុងប្រយោគ 'if' និង 'would' + កិរិយាសព្ទដើមក្នុងប្រយោគចម្បង ដើម្បីបង្ហាញពីស្ថានភាពមិនពិតក្នុងបច្ចុប្បន្ន ឬអនាគត។",
    "practiceQuestions": [
      {
        "id": "q1",
        "question": "Choose the correct form: If I ________ a bird, I would fly to your window.",
        "options": [
          "am",
          "were",
          "will be",
          "would be"
        ],
        "correctAnswer": "were"
      },
      {
        "id": "q2",
        "question": "Choose the correct completion: What ________ you do if you saw a ghost?",
        "options": [
          "will",
          "do",
          "would",
          "did"
        ],
        "correctAnswer": "would"
      }
    ]
  },
  {
    "id": "used-to",
    "title": "Used to & Would for Past Habits",
    "level": "B1",
    "shortDesc": "Learn how to use 'used to' and 'would' to talk about past habits and states that no longer happen.",
    "shortDescKhmer": "ស្វែងយល់ពីរបៀបប្រើប្រាស់ពាក្យ 'used to' និង 'would' ដើម្បីនិយាយអំពីទម្លាប់ និងស្ថានភាពក្នុងអតីតកាលដែលលែងកើតឡើងទៀតហើយ។",
    "explanation": "When talking about past habits and repeated actions that are no longer true in the present, we can use 'used to' and 'would'. 'Used to' is versatile and can be used for both past actions and past states (such as feelings, beliefs, or permanent situations). For example, 'I used to live in London' is correct because living in London is a state, not an action. On the other hand, 'would' is only used for repeated past actions or behaviors, not for states. You cannot say 'I would live in London'. Additionally, 'would' is more commonly used in storytelling or narrative contexts to evoke nostalgia.",
    "explanationKhmer": "ពេលនិយាយអំពីទម្លាប់ក្នុងអតីតកាល និងសកម្មភាពដែលកើតឡើងដដែលៗ ប៉ុន្តែលែងមានក្នុងពេលបច្ចុប្បន្ន យើងអាចប្រើ 'used to' និង 'would'។ 'used to' មានលក្ខណៈទូលំទូលាយ ហើយអាចប្រើបានទាំងសកម្មភាព និងស្ថានភាពក្នុងអតីតកាល (ដូចជា អារម្មណ៍ ជំនឿ ឬស្ថានភាពអចិន្ត្រៃយ៍)។ ឧទាហរណ៍ 'I used to live in London' គឺត្រឹមត្រូវ ព្រោះការរស់នៅទីក្រុងឡុងដ៍គឺជាស្ថានភាព មិនមែនជាសកម្មភាពទេ។ ផ្ទុយទៅវិញ 'would' ត្រូវបានប្រើសម្រាប់តែសកម្មភាព ឬអាកប្បកិរិយាក្នុងអតីតកាលដែលកើតឡើងដដែលៗប៉ុណ្ណោះ មិនមែនសម្រាប់ស្ថានភាពទេ។ អ្នកមិនអាចនិយាយថា 'I would live in London' បានទេ។ លើសពីនេះ 'would' ត្រូវបានគេប្រើញឹកញាប់ជាងនៅក្នុងការនិទានរឿង ដើម្បីបង្ហាញពីភាពនឹករលឹក។",
    "formula": "Subject + used to / would + base verb",
    "formulaKhmer": "ប្រធាន (Subject) + used to / would + កិរិយាសព្ទដើម (base verb)",
    "whenToUse": [
      "To talk about past habits that no longer happen",
      "To describe past states or situations that have changed",
      "To tell stories about repeated past behaviors using 'would'"
    ],
    "whenToUseKhmer": [
      "ដើម្បីនិយាយអំពីទម្លាប់ក្នុងអតីតកាលដែលលែងកើតឡើង",
      "ដើម្បីពណ៌នាអំពីស្ថានភាពក្នុងអតីតកាលដែលបានផ្លាស់ប្តូរ",
      "ដើម្បីនិទានរឿងអំពីអាកប្បកិរិយាក្នុងអតីតកាលដែលកើតឡើងដដែលៗដោយប្រើ 'would'"
    ],
    "positiveExamples": [
      "I used to play tennis every weekend when I was young.",
      "Whenever we visited grandma, she would bake us cookies."
    ],
    "positiveExamplesKhmer": [
      "ខ្ញុំធ្លាប់លេងវីដេអូបាល់ទាត់រាល់ចុងសប្តាហ៍ពេលខ្ញុំនៅក្មេង។",
      "រាល់ពេលដែលយើងទៅលេងយាយ គាត់តែងតែដុតនំឃុកឃីឱ្យយើង។"
    ],
    "negativeExamples": [
      "I didn't use to like vegetables, but now I love them.",
      "He didn't use to have a car."
    ],
    "negativeExamplesKhmer": [
      "ខ្ញុំមិនធ្លាប់ចូលចិត្តញ៉ាំបន្លែទេ ប៉ុន្តែឥឡូវខ្ញុំចូលចិត្តវាខ្លាំងណាស់។",
      "គាត់ធ្លាប់តែមិនមានឡានទេ។"
    ],
    "questionForm": "Did + subject + use to + base verb + ?",
    "questionFormKhmer": "Did + ប្រធាន + use to + កិរិយាសព្ទដើម + ?",
    "visualTimeline": "Past (Habits/States) -> Present (Changed/Stopped)",
    "visualTimelineKhmer": "អតីតកាល (ទម្លាប់/ស្ថានភាព) -> បច្ចុប្បន្ន (បានផ្លាស់ប្តូរ/ឈប់ធ្វើ)",
    "examples": [
      {
        "english": "She used to have long hair, but now it is short.",
        "translation": "She possessed long hair in the past, a state that has since changed.",
        "translationKhmer": "នាងធ្លាប់មានសក់វែង ប៉ុន្តែឥឡូវវាខ្លីហើយ។",
        "note": "Use 'used to' for states like 'have', 'be', 'know', or 'like'."
      },
      {
        "english": "Every summer, we would go camping by the lake.",
        "translation": "We repeatedly went camping during past summers as a routine.",
        "translationKhmer": "រាល់រដូវក្តៅ យើងតែងតែទៅបោះជំរុំក្បែរបឹង។",
        "note": "'Would' works well here because it describes a repeated action in a narrative style."
      }
    ],
    "tips": [
      "Remember that 'would' cannot be used for states (like live, be, have). Always use 'used to' for past states.",
      "In negative sentences and questions, use 'use to' (without the 'd'): didn't use to, did you use to?"
    ],
    "commonMistakes": [
      {
        "incorrect": "I would be shy when I was a child.",
        "correct": "I used to be shy when I was a child.",
        "explanation": "'Shy' is a state of being, not an action. Therefore, you must use 'used to', not 'would'."
      },
      {
        "incorrect": "Did you used to play the piano?",
        "correct": "Did you use to play the piano?",
        "explanation": "In questions using 'did', the base form 'use to' must be used without the final 'd'."
      }
    ],
    "summary": "Use 'used to' for past habits and states, but use 'would' only for repeated past actions.",
    "summaryKhmer": "ប្រើ 'used to' សម្រាប់ទម្លាប់ និងស្ថានភាពក្នុងអតីតកាល ប៉ុន្តែប្រើ 'would' សម្រាប់តែសកម្មភាពក្នុងអតីតកាលដែលកើតឡើងដដែលៗប៉ុណ្ណោះ។",
    "practiceQuestions": [
      {
        "id": "q1",
        "question": "Which sentence is correct for a past state?",
        "options": [
          "I would live in a small village.",
          "I used to live in a small village.",
          "I am use to living in a small village.",
          "I use to living in a small village."
        ],
        "correctAnswer": "I used to live in a small village."
      },
      {
        "id": "q2",
        "question": "Choose the correct negative form: 'I _____ smoke cigarettes.'",
        "options": [
          "didn't used to",
          "didn't use to",
          "wouldn't to",
          "not used to"
        ],
        "correctAnswer": "didn't use to"
      }
    ]
  },
  {
    "id": "causative-form",
    "title": "Causative Form (Have / Get Something Done)",
    "level": "B1+",
    "shortDesc": "Learn how to use 'have' or 'get' something done when you arrange for someone else to perform a service for you.",
    "shortDescKhmer": "ស្វែងយល់ពីរបៀបប្រើប្រាស់ 'have' ឬ 'get' something done នៅពេលដែលអ្នករៀបចំឱ្យនរណាម្នាក់ធ្វើសេវាកម្មណាមួយឱ្យអ្នក។",
    "explanation": "The causative form is used when we do not do something ourselves, but we arrange for someone else (usually a professional) to do it for us. Instead of focusing on *who* does the action, the focus is on the action being done to an object. The basic structure uses the verbs 'have' or 'get' followed by an object and a past participle (Verb 3).\n\nFor example, if you go to a salon to cut your hair, you don't cut it yourself; you have a hairdresser cut it. Therefore, you say: 'I am having my hair cut.' The verb 'have' or 'get' changes tense depending on when the action happens (past, present, future), while the main verb always remains in the past participle form.",
    "explanationKhmer": "ទម្រង់ Causative ត្រូវបានប្រើនៅពេលដែលយើងមិនបានធ្វើអ្វីមួយដោយផ្ទាល់ខ្លួនឯងទេ ប៉ុន្តែយើងបានរៀបចំឱ្យនរណាម្នាក់ (ជាទូទៅគឺជាអ្នកជំនាញ) ធ្វើវាឱ្យយើង។ ជំនួសឱ្យការផ្តោតលើអ្នកដែលធ្វើសកម្មភាព ការផ្តោតអារម្មណ៍គឺទៅលើសកម្មភាពដែលត្រូវធ្វើលើវត្ថុណាមួយ។ រចនាសម្ព័ន្ធមូលដ្ឋានប្រើប្រាស់កិរិយាសព្ទ 'have' ឬ 'get' តាមដោយកម្មបទ (object) និងកិរិយាសព្ទช่องទី ៣ (past participle)។\n\nឧទាហរណ៍ ប្រសិនបើអ្នកទៅហាងកាត់សក់ អ្នកមិនកាត់វាដោយខ្លួនឯងទេ គឺអ្នកឱ្យជាងកាត់សក់កាត់វាឱ្យ។ ហេតុដូច្នេះហើយ អ្នកនិយាយថា៖ 'I am having my hair cut'។ កិរិយាសព្ទ 'have' ឬ 'get' ប្រែប្រួលតាមកាល (tense) អាស្រ័យលើពេលដែលសកម្មភាពកើតឡើង ចំណែកឯកិរិយាសព្ទដើមគឺស្ថិតក្នុងទម្រង់អតីតកាល participle ជានិច្ច។",
    "formula": "Subject + have/get + Object + Past Participle (V3)",
    "formulaKhmer": "ប្រធានបទ (Subject) + have/get + កម្មបទ (Object) + កិរិយាសព្ទช่องទី ៣ (V3)",
    "whenToUse": [
      "When hiring a professional to do a service for you (e.g., haircut, car repair, house painting).",
      "When talking about an unfortunate event that happened to you (e.g., having your bag stolen).",
      "When emphasizing that a task was successfully completed by someone else."
    ],
    "whenToUseKhmer": [
      "នៅពេល thuê អ្នកជំនាញធ្វើសេវាកម្មឱ្យអ្នក (ឧទាហរណ៍ កាត់សក់ ជួសជុលរថយន្ត លាបថ្នាំផ្ទះ)។",
      "នៅពេលនិយាយអំពីព្រឹត្តិការណ៍អាក្រក់ដែលបានកើតឡើងចំពោះអ្នក (ឧទាហរណ៍ ត្រូវគេលួចកាបូប)។",
      "នៅពេលបញ្ជាក់ថាភារកិច្ចមួយត្រូវបានបញ្ចប់ដោយជោគជ័យដោយអ្នកដទៃ។"
    ],
    "positiveExamples": [
      "I am going to have my car repaired tomorrow.",
      "She gets her hair styled every Friday."
    ],
    "positiveExamplesKhmer": [
      "ខ្ញុំនឹងយកឡានទៅជួសជុលថ្ងៃស្អែក។",
      "នាងធ្វើសក់របស់នាងរៀងរាល់ថ្ងៃសុក្រ។"
    ],
    "negativeExamples": [
      "I didn't have my car repaired yesterday.",
      "Did you get your hair cut last week?"
    ],
    "negativeExamplesKhmer": [
      "ខ្ញុំមិនបានយកឡានទៅជួសជុលកាលពីម្សិលមិញទេ។",
      "តើអ្នកបានកាត់សក់កាលពីសប្តាហ៍មុនឬ?"
    ],
    "questionForm": "Auxiliary (Do/Did/Have) + Subject + have/get + Object + V3 + ?",
    "questionFormKhmer": "កិរិយាសព្ទជំនួយ + ប្រធានបទ + have/get + កម្មបទ + V3 + ?",
    "visualTimeline": "Past -> Present -> Future (Tense changes only on 'have/get', V3 remains unchanged)",
    "visualTimelineKhmer": "អតីតកាល -> បច្ចុប្បន្ន -> អនាគត (កាលប្រែប្រួលតែលើ 'have/get' ប៉ុណ្ណោះ ចំណែក V3 នៅដដែល)",
    "examples": [
      {
        "english": "We are having our house painted next week.",
        "translation": "We arranged for painters to paint our house.",
        "translationKhmer": "ពួកយើងនឹងឱ្យគេលាបថ្នាំផ្ទះរបស់យើងនៅសប្តាហ៍ក្រោយ។",
        "note": "Present continuous causative used for a future arrangement."
      },
      {
        "english": "He had his wallet stolen on the subway.",
        "translation": "Unfortunate event: someone stole his wallet.",
        "translationKhmer": "កាបូបលុយរបស់គាត់ត្រូវបានគេលួចនៅលើរថភ្លើងក្រោមដី។",
        "note": "Can be used for bad experiences where you are the victim."
      }
    ],
    "tips": [
      "Remember that 'get' is slightly more informal than 'have'.",
      "Never put the doer of the action right after the object in this specific structure; the object comes first, then the V3."
    ],
    "commonMistakes": [
      {
        "incorrect": "I had cut my hair yesterday.",
        "correct": "I had my hair cut yesterday.",
        "explanation": "'I had cut my hair' means you did the cutting yourself. To show someone else did it, the object ('my hair') must go between 'had' and the past participle ('cut')."
      }
    ],
    "summary": "Use the causative form (have/get + object + V3) when you arrange for someone else to do a task for you.",
    "summaryKhmer": "ប្រើប្រាស់ទម្រង់ causative (have/get + object + V3) នៅពេលដែលអ្នករៀបចំឱ្យនរណាម្នាក់បំពេញភារកិច្ចណាមួយជំនួសអ្នក។",
    "practiceQuestions": [
      {
        "id": "q1",
        "question": "Choose the correct sentence: I need to _____ my laptop repaired.",
        "options": [
          "have",
          "having",
          "had",
          "has"
        ],
        "correctAnswer": "have"
      },
      {
        "id": "q2",
        "question": "She usually _____ her nails done on Saturdays.",
        "options": [
          "get",
          "gets",
          "getting",
          "got"
        ],
        "correctAnswer": "gets"
      }
    ]
  },
  {
    "id": "third-conditional",
    "title": "Third Conditional & Mixed Conditionals",
    "level": "B1+",
    "shortDesc": "Master how to talk about impossible past situations and their hypothetical results using third and mixed conditionals.",
    "shortDescKhmer": "ស្វែងយល់ពីរបៀបនិយាយអំពីស្ថានភាពអតីតកាលដែលមិនអាចកើតឡើង និងលទ្ធផលស្រមើស្រមៃរបស់វាដោយប្រើប្រាស់លក្ខខណ្ឌទីបី និងលក្ខខណ្ឌចម្រុះ។",
    "explanation": "The Third Conditional is used to imagine a different past. We talk about a condition in the past that did not happen, and therefore the result in the past did not happen either. It is often used to express regret or relief about past events.\n\nMixed Conditionals combine elements of different conditionals, most commonly the Second and Third Conditionals. A Type 2/3 mixed conditional connects a past condition to a present result (If + past perfect, would + base verb). A Type 3/2 mixed conditional connects a past condition to a present continuous state or general truth.",
    "explanationKhmer": "លក្ខខណ្ឌទីបី (Third Conditional) ត្រូវបានប្រើដើម្បីស្រមៃមើលអតីតកាលខុសពីការពិត។ យើងនិយាយអំពីលក្ខខណ្ឌមួយក្នុងអតីតកាលដែលមិនបានកើតឡើង ដូច្នេះលទ្ធផលក្នុងអតីតកាលក៏មិនបានកើតឡើងដែរ។ វាច្រើនតែប្រើដើម្បីបង្ហាញពីការស្តាយក្រោយ ឬការធូរស្រាលអំពីព្រឹត្តិការណ៍អតីតកាល។\n\nលក្ខខណ្ឌចម្រុះ (Mixed Conditionals) រួមបញ្ចូលគ្នានូវធាតុនៃលក្ខខណ្ឌផ្សេងៗ ដែលជាទូទៅគឺលក្ខខណ្ឌទីពីរ និងទីបី។ លក្ខខណ្ឌចម្រុះប្រភេទទី ២/៣ ភ្ជាប់លក្ខខណ្ឌអតីតកាលទៅនឹងលទ្ធផលបច្ចុប្បន្ន (If + past perfect, would + base verb)។",
    "formula": "If + Past Perfect (had + V3), would/could/might + have + V3",
    "formulaKhmer": "ប្រសិនបើ + Past Perfect (had + V3), would/could/might + have + V3",
    "whenToUse": [
      "To talk about imaginary situations in the past",
      "To express regret about past actions or mistakes",
      "To connect a past action to a present result (mixed conditional)"
    ],
    "whenToUseKhmer": [
      "ដើម្បីនិយាយអំពីស្ថានភាពស្រមើស្រមៃក្នុងអតីតកាល",
      "ដើម្បីបង្ហាញពីការស្តាយក្រោយអំពីសកម្មភាព ឬកំហុសក្នុងអតីតកាល",
      "ដើម្បីភ្ជាប់សកម្មភាពអតីតកាលទៅនឹងលទ្ធផលបច្ចុប្បន្ន (លក្ខខណ្ឌចម្រុះ)"
    ],
    "positiveExamples": [
      "If I had studied harder, I would have passed the exam.",
      "If she had left earlier, she would have caught the train."
    ],
    "positiveExamplesKhmer": [
      "ប្រសិនបើខ្ញុំបានខិតខំរៀនជាងនេះ ខ្ញុំប្រហែលជាប្រឡងជាប់ហើយ។",
      "ប្រសិនបើគាត់បានចេញដំណើរលឿនជាងមុន គាត់ប្រហែលជាទាន់រថភ្លើងហើយ។"
    ],
    "negativeExamples": [
      "If I hadn't eaten so much, I wouldn't have felt sick.",
      "If they hadn't missed the flight, they would be here now."
    ],
    "negativeExamplesKhmer": [
      "ប្រសិនបើខ្ញុំមិនបានញ៉ាំច្រើនពេកទេ ខ្ញុំប្រហែលជាមិនឈឺពោះទេ។",
      "ប្រសិនបើពួកគេមិនបានខកខានជើងហោះហើរទេ ពួកគេคงនឹងមកដល់ទីនេះឥឡូវនេះហើយ។"
    ],
    "questionForm": "Would + subject + have + V3 + if + past perfect?",
    "questionFormKhmer": "Would + ប្រធាន + have + V3 + if + past perfect?",
    "visualTimeline": "Past (Unreal Situation) -> Past (Unreal Result)",
    "visualTimelineKhmer": "អតីតកាល (ស្ថានភាពមិនពិត) -> អតីតកាល (លទ្ធផលមិនពិត)",
    "examples": [
      {
        "english": "If I had known you were coming, I would have baked a cake.",
        "translation": "I didn't know you were coming, so I didn't bake a cake.",
        "translationKhmer": "ប្រសិនបើខ្ញុំបានដឹងថាអ្នកនឹងមក ខ្ញុំប្រហែលជាធ្វើនំខេកបាត់ទៅហើយ។",
        "note": "Used to express a polite or welcoming realization about a past situation."
      },
      {
        "english": "If I had won the lottery last year, I would be rich today.",
        "translation": "This is a mixed conditional: past action affecting a present state.",
        "translationKhmer": "ប្រសិនបើខ្ញុំបានឈ្នះឆ្នោតកាលពីឆ្នាំមុន ខ្ញុំคงនឹងមានទ្រព្យសម្បត្តិស្តុកស្តម្ភថ្ងៃនេះហើយ។",
        "note": "Mixed Conditional (Type 3 condition + Type 2 result)."
      }
    ],
    "tips": [
      "Remember that 'had' can be contracted to ''d' (If I'd known).",
      "Never use 'would have' in the 'if' clause; it always goes in the main clause."
    ],
    "commonMistakes": [
      {
        "incorrect": "If I would have studied, I would pass the exam.",
        "correct": "If I had studied, I would have passed the exam.",
        "explanation": "Never use 'would have' in the 'if' clause. Use 'had + past participle' in the condition part."
      }
    ],
    "summary": "The third conditional deals with past hypothetical situations, using 'had + V3' in the condition and 'would have + V3' in the result.",
    "summaryKhmer": "លក្ខខណ្ឌទីបីដោះស្រាយជាមួយស្ថានភាពអតីតកាលដែលជាការស្រមើស្រមៃ ដោយប្រើប្រាស់ 'had + V3' ក្នុងប្រយោគលក្ខខណ្ឌ និង 'would have + V3' ក្នុងប្រយោគលទ្ធផល។",
    "practiceQuestions": [
      {
        "id": "q1",
        "question": "If she ________ earlier, she wouldn't have missed the meeting.",
        "options": [
          "left",
          "had left",
          "would leave",
          "has left"
        ],
        "correctAnswer": "had left"
      },
      {
        "id": "q2",
        "question": "If I had saved more money, I ________ a new car last year.",
        "options": [
          "will buy",
          "bought",
          "would have bought",
          "would buy"
        ],
        "correctAnswer": "would have bought"
      }
    ]
  },
  {
    "id": "inversion-negative",
    "title": "Inversion with Negative Adverbs",
    "level": "B2",
    "shortDesc": "Learn how to use negative adverbial phrases at the start of a sentence to add emphasis by inverting the subject and the auxiliary verb.",
    "shortDescKhmer": "រៀនពីរបៀបប្រើប្រាស់ឃ្លាវិសេសនៈអវិជ្ជមាននៅដើមប្រយោគដើម្បីបន្ថែមការសង្កត់ធ្ងន់ ដោយការដាក់កិរិយាសព្ទជំនួយមុនប្រធាន។",
    "explanation": "In English, we typically use the Subject + Verb word order. However, when we start a sentence with a negative or restrictive adverb (like 'never', 'seldom', 'hardly', or 'rarely'), we must invert the subject and the auxiliary verb, similar to how we form a question. This structure is more formal and is often used in literature, news reports, or speeches to create a sense of drama or significance.\n\nTo create an inversion, you move the negative adverb to the front, followed immediately by the auxiliary verb (do/does/did, have/has, can, will, etc.), then the subject, and finally the main verb in its base form (if using 'do/does/did').",
    "explanationKhmer": "នៅក្នុងភាសាអង់គ្លេស ជាទូទៅយើងប្រើលំដាប់ពាក្យ ប្រធាន + កិរិយាសព្ទ។ ប៉ុន្តែនៅពេលយើងចាប់ផ្តើមប្រយោគដោយវិសេសនៈអវិជ្ជមាន ឬកម្រិត (ដូចជា 'never', 'seldom', 'hardly', ឬ 'rarely') យើងត្រូវដាក់កិរិយាសព្ទជំនួយមុនប្រធាន ដូចទៅនឹងទម្រង់នៃការបង្កើតប្រយោគសំណួរដែរ។ រចនាសម្ព័ន្ធនេះមានលក្ខណៈផ្លូវការជាង ហើយត្រូវបានប្រើប្រាស់ជាញឹកញាប់នៅក្នុងអក្សរសិល្ប៍ របាយការណ៍ព័ត៌មាន ឬសុន្ទរកថា ដើម្បីបង្កើតឱ្យមានភាពរំជួលចិត្តឬសារៈសំខាន់។\n\nដើម្បីធ្វើការបញ្ច្រាស អ្នកត្រូវដាក់វិសេសនៈអវិជ្ជមាននៅខាងមុខ បន្ទាប់មកកិរិយាសព្ទជំនួយ (do/does/did, have/has, can, will, ។ល។) បន្ទាប់មកប្រធាន និងចុងក្រោយគឺកិរិយាសព្ទដើម។",
    "formula": "Negative Adverb + Auxiliary Verb + Subject + Main Verb + Rest of sentence",
    "formulaKhmer": "វិសេសនៈអវិជ្ជមាន + កិរិយាសព្ទជំនួយ + ប្រធាន + កិរិយាសព្ទដើម + កម្មបទ",
    "whenToUse": [
      "To emphasize the rarity or negative nature of an action.",
      "In formal writing or speeches to create a dramatic effect.",
      "When you want to draw the reader's attention to the negative adverb at the beginning."
    ],
    "whenToUseKhmer": [
      "ដើម្បីសង្កត់ធ្ងន់លើកម្រិតដ៏កម្រ ឬលក្ខណៈអវិជ្ជមាននៃសកម្មភាពមួយ។",
      "នៅក្នុងការសរសេរជាផ្លូវការ ឬសុន្ទរកថាដើម្បីបង្កើតប្រសិទ្ធភាពបែបល្ខោន។",
      "នៅពេលអ្នកចង់ទាក់ទាញការចាប់អារម្មណ៍ពីអ្នកអានទៅលើវិសេសនៈអវិជ្ជមាននៅដើមប្រយោគ។"
    ],
    "positiveExamples": [
      "Never have I seen such a beautiful sunset.",
      "Rarely do we go out on weeknights."
    ],
    "positiveExamplesKhmer": [
      "ខ្ញុំមិនដែលឃើញថ្ងៃលិចដ៏ស្រស់ស្អាតបែបនេះទេ។",
      "យើងកម្រនឹងចេញទៅក្រៅនៅថ្ងៃធ្វើការណាស់។"
    ],
    "negativeExamples": [
      "Never I have seen such a beautiful sunset. (Incorrect)",
      "Rarely we do go out on weeknights. (Incorrect)"
    ],
    "negativeExamplesKhmer": [
      "ខ្ញុំមិនដែលឃើញថ្ងៃលិចដ៏ស្រស់ស្អាតបែបនេះទេ។ (ខុស)",
      "យើងកម្រនឹងចេញទៅក្រៅនៅថ្ងៃធ្វើការណាស់។ (ខុស)"
    ],
    "questionForm": "Auxiliary Verb + Subject + Main Verb + ?",
    "questionFormKhmer": "ការបញ្ច្រាសនេះប្រើទម្រង់ដូចគ្នានឹងប្រយោគសំណួរ៖ កិរិយាសព្ទជំនួយ + ប្រធាន + កិរិយាសព្ទដើម។",
    "visualTimeline": "The timeline remains the same, but the emphasis is shifted to the start of the clause.",
    "visualTimelineKhmer": "ពេលវេលានៅតែដដែល ប៉ុន្តែការសង្កត់ធ្ងន់ត្រូវបានផ្លាស់ប្តូរទៅនៅដើមឃ្លា។",
    "examples": [
      {
        "english": "Hardly had I finished my coffee when the phone rang.",
        "translation": "I had barely finished my coffee when the phone rang.",
        "translationKhmer": "ខ្ញុំទើបតែផឹកកាហ្វេចប់ ស្រាប់តែទូរស័ព្ទរោទិ៍។",
        "note": "Notice the use of 'had' before the subject 'I'."
      },
      {
        "english": "Seldom does he talk about his past.",
        "translation": "He rarely talks about his past.",
        "translationKhmer": "គាត់កម្រនឹងនិយាយអំពីអតីតកាលរបស់គាត់ណាស់។",
        "note": "Use 'does' because the original subject is 'he'."
      }
    ],
    "tips": [
      "Think of it as turning a statement into a question, but without the question mark at the end.",
      "Common adverbs used: Never, Rarely, Seldom, Hardly, Scarcely, No sooner, Little."
    ],
    "commonMistakes": [
      {
        "incorrect": "Never I have been there.",
        "correct": "Never have I been there.",
        "explanation": "You must place the auxiliary verb (have) before the subject (I)."
      }
    ],
    "summary": "Start the sentence with a negative adverb, followed by the auxiliary verb and the subject to create emphasis.",
    "summaryKhmer": "ចាប់ផ្តើមប្រយោគដោយវិសេសនៈអវិជ្ជមាន បន្តដោយកិរិយាសព្ទជំនួយ និងប្រធានដើម្បីបង្កើតការសង្កត់ធ្ងន់។",
    "practiceQuestions": [
      {
        "id": "q1",
        "question": "Choose the correct inversion: ____ to the cinema.",
        "options": [
          "Rarely we go",
          "Rarely do we go",
          "Rarely we do go",
          "Do rarely we go"
        ],
        "correctAnswer": "Rarely do we go"
      },
      {
        "id": "q2",
        "question": "Which of these is grammatically correct?",
        "options": [
          "Never I have felt so happy.",
          "Never have I felt so happy.",
          "I have never felt so happy.",
          "Never I felt so happy."
        ],
        "correctAnswer": "Never have I felt so happy."
      }
    ]
  },
  {
    "id": "subjunctive-wish",
    "title": "Subjunctive Mood & Wish Sentences",
    "level": "B2",
    "shortDesc": "Master the present subjunctive and 'wish' structures to express hypothetical situations, desires, and strong recommendations.",
    "shortDescKhmer": "ស្វែងយល់ពីកិរិយាស័ព្ទ subjunctive បច្ចុប្បន្ន និងទម្រង់ wish ដើម្បីបង្ហាញពីស្ថានភាពស្រមើស្រមៃ សេចក្តីប្រាថ្នា និងការណែនាំយ៉ាងខ្លាំង។",
    "explanation": "The subjunctive mood is used to explore conditional or imaginary situations. In English, the present subjunctive typically follows specific verbs of demand, suggestion, or recommendation (e.g., insist, demand, suggest, recommend) using the base form of the verb for all subjects. For example, 'I insist that he go.' Additionally, sentences using 'wish' or 'if only' employ backshifting of tenses to express regrets or unreal desires about the present, past, or future. For present regrets, we use the past simple ('I wish I had a car'). For past regrets, we use the past perfect ('I wish I had studied harder').",
    "explanationKhmer": "កិរិយាស័ព្ទ subjunctive ត្រូវបានប្រើដើម្បីពិភាក្សាអំពីស្ថានភាពលក្ខខណ្ឌ ឬស្ថានភាពស្រមើស្រមៃ។ ជាទូទៅ វាត្រូវបានប្រើបន្ទាប់ពីកិរិយាស័ព្ទស្នើសុំ ទាមទារ ឬផ្តល់អនុសាសន៍ ដោយប្រើទម្រង់ដើមរបស់កិរិយាស័ព្ទសម្រាប់ប្រធានបទទាំងអស់។ ចំណែកឯប្រយោគ 'wish' ឬ 'if only' ប្រើការប្តូរពេលវេលាកិរិយាស័ព្ទថយក្រោយ ដើម្បីបង្ហាញពីការស្តាយក្រោយ ឬសេចក្តីប្រាថ្នាមិនពិតក្នុងពេលបច្ចុប្បន្ន អតីតកាល ឬអនាគតកាល។",
    "formula": "Subject + Verb (demand/suggest) + that + Subject + Base Verb",
    "formulaKhmer": "ប្រធានបទ + កិរិយាស័ព្ទស្នើសុំ + that + ប្រធានបទ + កិរិយាស័ព្ទដើម",
    "whenToUse": [
      "To express strong suggestions, demands, or recommendations using verbs like insist, suggest, and recommend.",
      "To express regrets about a present situation using 'wish' + past simple.",
      "To express regrets about the past using 'wish' + past perfect."
    ],
    "whenToUseKhmer": [
      "ដើម្បីបង្ហាញពីការណែនាំ ការទាមទារ ឬអនុសាសន៍ខ្លាំងក្លាដោយប្រើ insist, suggest និង recommend ។",
      "ដើម្បីបង្ហាញពីការស្តាយក្រោយចំពោះស្ថានភាពបច្ចុប្បន្នដោយប្រើ wish + អតីតកាលធម្មតា។",
      "ដើម្បីបង្ហាញពីការស្តាយក្រោយចំពោះអតីតកាលដោយប្រើ wish + អតីតកាលទ្វេដង (past perfect)។"
    ],
    "positiveExamples": [
      "She suggested that he be on time for the meeting.",
      "I wish I knew how to speak French fluently."
    ],
    "positiveExamplesKhmer": [
      "នាងបានយោបល់ថាគាត់គួរតែមកទាន់ពេលសម្រាប់ការប្រជុំ។",
      "ខ្ញុំប្រាថ្នាថាខ្ញុំចេះនិយាយភាសាបារាំងបានយ៉ាងស្ទាត់ជំនាញ។"
    ],
    "negativeExamples": [
      "He demanded that she goes immediately.",
      "I wish I have a bigger house."
    ],
    "negativeExamplesKhmer": [
      "គាត់បានទាមទារថានាងត្រូវតែទៅភ្លាមៗ។",
      "ខ្ញុំប្រាថ្នាថាខ្ញុំមានផ្ទះធំជាងនេះ។"
    ],
    "questionForm": "Do you wish you had studied harder?",
    "questionFormKhmer": "តើអ្នកប្រាថ្នាថាអ្នកបានរៀនឱ្យបានព្យាយាមជាងនេះទេ?",
    "visualTimeline": "Present Subjunctive (Base Form) / Wish + Past Simple (Present Regret) / Wish + Past Perfect (Past Regret)",
    "visualTimelineKhmer": "Present Subjunctive (ទម្រង់ដើម) / Wish + អតីតកាល (ស្តាយក្រោយពេលបច្ចុប្បន្ន) / Wish + Past Perfect (ស្តាយក្រោយពេលអតីតកាល)",
    "examples": [
      {
        "english": "It is crucial that every student submit their assignment on time.",
        "translation": "It is extremely important for each student to hand in their work punctually.",
        "translationKhmer": "វាជារឿងសំខាន់ណាស់ដែលសិស្សគ្រប់រូបត្រូវដាក់កិច្ចការរបស់ខ្លួនឱ្យបានទាន់ពេលវេលា។",
        "note": "Notice 'submit' is in the base form, not 'submits'."
      },
      {
        "english": "I wish I hadn't spent all my money on that car.",
        "translation": "I regret spending all my money on that vehicle in the past.",
        "translationKhmer": "ខ្ញុំស្តាយក្រោយដែលបានចំណាយលុយទាំងអស់របស់ខ្ញុំលើឡាននោះ។",
        "note": "Used for past regret (Wish + Past Perfect)."
      }
    ],
    "tips": [
      "Remember that the present subjunctive uses the exact base form of the verb for all persons (e.g., 'I insist he go', not 'he goes').",
      "With 'wish' and 'if only' for present states, always use 'were' instead of 'was' for formal correctness (e.g., 'I wish I were rich')."
    ],
    "commonMistakes": [
      {
        "incorrect": "She insisted that he goes with us.",
        "correct": "She insisted that he go with us.",
        "explanation": "After verbs of demand like insist, use the base form of the verb (go), not the conjugated form (goes)."
      },
      {
        "incorrect": "I wish I can swim.",
        "correct": "I wish I could swim.",
        "explanation": "To express an unreal present ability or desire with wish, use 'could' instead of 'can'."
      }
    ],
    "summary": "Use the base form of verbs in subjunctive clauses after demand/suggestion verbs, and shift tenses backward when expressing unreal desires with 'wish'.",
    "summaryKhmer": "ប្រើទម្រង់ដើមនៃកិរិយាស័ព្ទក្នុងអនុប្រយោគ subjunctive បន្ទាប់ពីកិរិយាស័ព្ទស្នើសុំ និងប្តូរពេលកិរិយាស័ព្ទថយក្រោយនៅពេលបង្ហាញសេចក្តីប្រាថ្នាមិនពិតជាមួយ 'wish'។",
    "practiceQuestions": [
      {
        "id": "q1",
        "question": "Choose the correct sentence:",
        "options": [
          "I suggest that she takes a break.",
          "I suggest that she take a break.",
          "I suggest that she taking a break.",
          "I suggest that she has taken a break."
        ],
        "correctAnswer": "I suggest that she take a break."
      },
      {
        "id": "q2",
        "question": "Complete the sentence: 'I wish I _____ how to play the guitar, but I never learned.'",
        "options": [
          "know",
          "knew",
          "had known",
          "would know"
        ],
        "correctAnswer": "knew"
      }
    ]
  },
  {
    "id": "advanced-discourse-markers",
    "title": "Advanced Discourse Markers & Cohesive Connectors",
    "level": "C1",
    "shortDesc": "Master the art of sophisticated transitions to organize complex ideas and enhance flow in advanced academic and professional writing.",
    "shortDescKhmer": "ស្វែងយល់ពីសិល្បៈនៃការប្រើប្រាស់ពាក្យតភ្ជាប់កម្រិតខ្ពស់ ដើម្បីរៀបចំគំនិតស្មុគស្មាញ និងបង្កើនលំហូរនៃការសរសេរក្នុងកម្រិតសិក្សា និងការងារ។",
    "explanation": "Advanced discourse markers are the 'connective tissue' of high-level English. Unlike simple connectors like 'and' or 'but,' C1-level markers such as 'consequently,' 'nevertheless,' 'admittedly,' and 'inasmuch as' allow speakers to establish nuanced relationships between arguments. They serve to signal shifts in logic, provide emphasis, contrast conflicting viewpoints, or summarize intricate points with precision. Using them effectively moves a learner from basic communication to fluent, cohesive, and professional discourse.\n\nNuance is critical: markers like 'all the same' imply a concession after a previous statement, while 'insofar as' establishes the limits of a statement’s validity. Mastering these requires understanding not just the meaning, but the stylistic tone—whether the connector is suited for a formal essay, a boardroom presentation, or a sophisticated debate.",
    "explanationKhmer": "ពាក្យតភ្ជាប់កម្រិតខ្ពស់ (Discourse markers) គឺជាផ្នែកសំខាន់សម្រាប់ភាសាអង់គ្លេសកម្រិតខ្ពស់។ ផ្ទុយពីពាក្យតភ្ជាប់សាមញ្ញ ដូចជា 'and' ឬ 'but' ពាក្យកម្រិត C1 ដូចជា 'consequently', 'nevertheless', 'admittedly' និង 'inasmuch as' អនុញ្ញាតឱ្យអ្នកនិយាយបង្កើតទំនាក់ទំនងដ៏ស៊ីជម្រៅរវាងហេតុផលនីមួយៗ។ វាប្រើសម្រាប់បញ្ជាក់ពីការផ្លាស់ប្តូរតក្កវិជ្ជា ការសង្កត់ធ្ងន់ ការប្រៀបធៀបទស្សនៈផ្ទុយគ្នា ឬសង្ខេបចំណុចស្មុគស្មាញដោយភាពជាក់លាក់។ ការប្រើប្រាស់វាប្រកបដោយប្រសិទ្ធភាពជួយឱ្យអ្នកសិក្សាក្លាយជាអ្នកនិយាយដែលស្ទាត់ជំនាញ និងមានវិជ្ជាជីវៈ។",
    "formula": "[Discourse Marker] + , + [Independent Clause]",
    "formulaKhmer": "[ពាក្យតភ្ជាប់] + , + [ល្បះឯករាជ្យ]",
    "whenToUse": [
      "To signal a logical progression or conclusion (e.g., consequently, thus).",
      "To introduce a concession or contradictory argument (e.g., admittedly, nevertheless).",
      "To elaborate or clarify a preceding complex idea (e.g., in other words, to put it mildly)."
    ],
    "whenToUseKhmer": [
      "ដើម្បីបង្ហាញពីការវិវត្តន៍នៃតក្កវិជ្ជា ឬសេចក្តីសន្និដ្ឋាន។",
      "ដើម្បីបង្ហាញពីការយល់ព្រម ឬទឡ្ហីករណ៍ផ្ទុយគ្នា។",
      "ដើម្បីពន្យល់បន្ថែម ឬបញ្ជាក់ឱ្យច្បាស់នូវគំនិតស្មុគស្មាញដែលបានរៀបរាប់មុននេះ។"
    ],
    "positiveExamples": [
      "Admittedly, the initial findings were inconclusive; however, subsequent research has verified the hypothesis.",
      "The policy, insofar as it addresses systemic inequality, is a significant step forward."
    ],
    "positiveExamplesKhmer": [
      "ត្រូវទទួលស្គាល់ថា ការរកឃើញដំបូងមិនទាន់ច្បាស់លាស់ទេ ប៉ុន្តែការស្រាវជ្រាវជាបន្តបន្ទាប់បានបញ្ជាក់ពីសម្មតិកម្មនេះ។",
      "គោលនយោបាយនេះ ប្រសិនបើនិយាយក្នុងន័យថាវាដោះស្រាយវិសមភាពជាប្រព័ន្ធ គឺជាជំហានដ៏សំខាន់មួយឆ្ពោះទៅមុខ។"
    ],
    "negativeExamples": [
      "I like coffee, but consequently I am tired.",
      "Nevertheless, she went to the store although she was busy."
    ],
    "negativeExamplesKhmer": [
      "ខ្ញុំចូលចិត្តកាហ្វេ ប៉ុន្តែជាលទ្ធផលខ្ញុំមានអារម្មណ៍ហត់នឿយ (ខុសពីការប្រើប្រាស់តក្កវិជ្ជា)។",
      "យ៉ាងណាក៏ដោយ នាងបានទៅហាងទោះបីជានាងរវល់ (ខុសពីការប្រើប្រាស់ក្នុងបរិបទត្រឹមត្រូវ)។"
    ],
    "questionForm": "Would you care to elaborate, or, alternatively, should we move to the next item on the agenda?",
    "questionFormKhmer": "តើអ្នកចង់ពន្យល់បន្ថែម ឬមួយក៏យើងគួរតែបន្តទៅចំណុចបន្ទាប់ក្នុងរបៀបវារៈ?",
    "visualTimeline": "Connectors act as signposts that guide the reader either backward to previous context or forward to future expectations.",
    "visualTimelineKhmer": "ពាក្យតភ្ជាប់ដើរតួជាសញ្ញាបង្ហាញផ្លូវដែលនាំអ្នកអានឱ្យដឹងពីបរិបទពីមុន ឬការរំពឹងទុកនៅពេលខាងមុខ។",
    "examples": [
      {
        "english": "Insofar as the data is accurate, the conclusions remain valid.",
        "translation": "To the extent that the data is accurate, the conclusions remain valid.",
        "translationKhmer": "ក្នុងកម្រិតដែលទិន្នន័យមានភាពត្រឹមត្រូវ សេចក្តីសន្និដ្ឋាននៅតែមានសុពលភាព។",
        "note": "Formal academic tone."
      },
      {
        "english": "The project was ambitious; nevertheless, we finished ahead of schedule.",
        "translation": "Despite the project being ambitious, we finished early.",
        "translationKhmer": "គម្រោងនេះមានមហិច្ឆតាធំ ប៉ុន្តែយ៉ាងណាក៏ដោយ យើងបានបញ្ចប់មុនកាលកំណត់។",
        "note": "Used to express a concession."
      }
    ],
    "tips": [
      "Avoid overusing connectors; too many can make a text sound cluttered.",
      "Always ensure the discourse marker logically fits the relationship between the two clauses."
    ],
    "commonMistakes": [
      {
        "incorrect": "He was sick, and therefore he went to work.",
        "correct": "He was sick; nevertheless, he went to work.",
        "explanation": "'Therefore' implies cause-and-effect that doesn't fit here; 'nevertheless' is needed to show contrast."
      }
    ],
    "summary": "Advanced discourse markers provide the necessary logical structure to elevate your communication from simple sentences to cohesive, high-level argumentation.",
    "summaryKhmer": "ពាក្យតភ្ជាប់កម្រិតខ្ពស់ផ្តល់នូវរចនាសម្ព័ន្ធតក្កវិជ្ជាដែលចាំបាច់ ដើម្បីលើកកម្ពស់ការទំនាក់ទំនងរបស់អ្នកពីល្បះសាមញ្ញ ទៅជាការជជែកវែកញែកដែលមានភាពស៊ីជម្រៅ និងតភ្ជាប់គ្នា។",
    "practiceQuestions": [
      {
        "id": "q1",
        "question": "The candidate has high potential; ________, he lacks the necessary management experience.",
        "options": [
          "consequently",
          "moreover",
          "nevertheless",
          "thus"
        ],
        "correctAnswer": "nevertheless"
      },
      {
        "id": "q2",
        "question": "We have implemented the new software; ________, our productivity has increased by 20%.",
        "options": [
          "consequently",
          "admittedly",
          "insofar as",
          "even so"
        ],
        "correctAnswer": "consequently"
      }
    ]
  },
  {
    "id": "cleft-sentences",
    "title": "Cleft Sentences for Emphasis (It-Clefts & Wh-Clefts)",
    "level": "C1",
    "shortDesc": "Master advanced cleft sentences (It-clefts and Wh-clefts) to strategically manipulate information structure, create dramatic emphasis, and elevate stylistic sophistication in academic and professional discourse.",
    "shortDescKhmer": "ស្វែងយល់ពីប្រយោគបំបែកកម្រិតខ្ពស់ (It-clefts និង Wh-clefts) ដើម្បីរៀបចំរចនាសម្ព័ន្ធព័ត៌មាន បង្កើតការបញ្ជាក់ខ្លាំង និងលើកកម្ពស់ស្ទីលភាសាអង់គ្លេសក្នុងកម្រិតសិក្សា និងការងារ។",
    "explanation": "At the C1 level, effective communication goes beyond basic grammatical accuracy; it involves managing information flow and discourse dynamics. Cleft sentences—literally 'split' sentences—take a single clause and divide it into two parts, each with its own verb, allowing you to highlight a specific element for dramatic emphasis, contrast, or rhetorical effect.\n\nThere are two primary categories: It-clefts and Wh-clefts (pseudo-clefts). It-clefts (It + be + emphasized element + relative clause) are frequently used to correct misunderstandings, contrast ideas, or focus attention on subjects, objects, or adverbials. For example, instead of saying 'John broke the vase,' an It-cleft lets you state 'It was John who broke the vase' (highlighting the person) or 'It was the vase that John broke' (highlighting the object).\n\nWh-clefts, typically introduced by 'what' clauses, are used to focus on an action or a state, often linking known information to new, focal information at the end of the sentence. Advanced learners must also master all-clefts ('All I want is some peace') and reversed Wh-clefts ('That is what I meant'). Mastering these structures allows you to manage the 'theme-rheme' progression of your writing smoothly, ensuring optimal cohesion and emphasis in formal essays, presentations, and professional negotiations.",
    "explanationKhmer": "នៅកម្រិត C1 ការទំនាក់ទំនងប្រកបដោយប្រសិទ្ធភាពគឺលើសពីភាពត្រឹមត្រូវនៃវេយ្យាករណ៍មូលដ្ឋាន; វាពាក់ព័ន្ធនឹងការគ្រប់គ្រងលំហូរព័ត៌មាន និងឌីណាមិកនៃការសន្ទនា។ ប្រយោគបំបែក (Cleft sentences) គឺបែងចែកប្រយោគមួយជាពីរផ្នែក ដែលនីមួយៗមានកិរិយាសព្ទផ្ទាល់ខ្លួន ដើម្បីអនុញ្ញាតឱ្យអ្នកគូសបញ្ជាក់ធាតុណាមួយជាក់លាក់សម្រាប់ការផ្ដោតអារម្មណ៍ ការប្រៀបធៀប ឬបែបផែនវោហាសាស្ត្រ។\n\nមានប្រភេទសំខាន់ៗពីរគឺ It-clefts និង Wh-clefts (pseudo-clefts)។ It-clefts (It + be + ធាតុដែលត្រូវបញ្ជាក់ + relative clause) ត្រូវបានប្រើញឹកញាប់ដើម្បីកែតម្រូវការយល់ច្រឡំ ឬផ្តោតការយកចិត្តទុកដាក់លើប្រធានបទ កម្មបទ ឬកិរិយาวิសេស។\n\nWh-clefts ដែលជាទូទៅត្រូវបានណែនាំដោយឃ្លា 'what' ត្រូវបានប្រើដើម្បីផ្តោតលើសកម្មភាព ឬស្ថានភាពមួយ។ ការចេះស្ទាត់ជំនាញលើរចនាសម្ព័ន្ធទាំងនេះអនុញ្ញាតឱ្យអ្នកគ្រប់គ្រងការសរសេររបស់អ្នកបានយ៉ាងរលូន និងធានាបាននូវការសង្កត់ធ្ងន់ប្រកបដោយវិជ្ជាជីវៈ។",
    "formula": "It + is/was + [Emphasized Element] + that/who/which... OR What + [Clause] + is/was + [Emphasized Element]",
    "formulaKhmer": "It + is/was + [ធាតុដែលត្រូវបញ្ជាក់] + that/who/which... ឬ What + [ឃ្លា] + is/was + [ធាតុដែលត្រូវបញ្ជាក់]",
    "whenToUse": [
      "To correct a misconception or false assumption held by the listener or reader.",
      "To create dramatic focus and contrast in formal academic writing or persuasive speeches.",
      "To smoothly bridge known information (theme) with new, surprising information (rheme) at the end of a sentence."
    ],
    "whenToUseKhmer": [
      "ដើម្បីកែតម្រូវការយល់ខុស ឬការសន្និដ្ឋានខុសរបស់អ្នកស្តាប់ ឬអ្នកអាន។",
      "ដើម្បីបង្កើតការផ្តោតអារម្មណ៍ខ្លាំង និងការប្រៀបធៀបក្នុងការសរសេរ学术 ឬសុន្ទរកថាបញ្ចុះបញ្ចូល។",
      "ដើម្បីភ្ជាប់ព័ត៌មានដែលគេដឹងស្រាប់ទៅនឹងព័ត៌មានថ្មីនៅចុងបញ្ចប់នៃប្រយោគដោយរលូន។"
    ],
    "positiveExamples": [
      "It was not until the twentieth century that quantum mechanics revolutionized modern physics.",
      "What the committee decided to do was postpone the implementation of the new policy indefinitely."
    ],
    "positiveExamplesKhmer": [
      "រហូតដល់សតវត្សរ៍ទី ២០ ទើបមេកានិចកង់ទិចបានធ្វើបដិវត្តន៍រូបវិទ្យាទំនើប។",
      "អ្វីដែលគណៈកម្មាធិការបានសម្រេចចិត្តធ្វើគឺការពន្យារពេលការអនុវត្តគោលនយោបាយថ្មីនេះជាអកំណត់។"
    ],
    "negativeExamples": [
      "What broke the window it was a heavy stone thrown by the wind.",
      "It is my colleagues who I respect them the most for their dedication."
    ],
    "negativeExamplesKhmer": [
      "អ្វីដែលបំបكបង្អួចគឺថ្មធ្ងន់មួយដែលបោះដោយខ្យល់ (ខុសព្រោះមានប្រទ្បាក់ pronouns ស្ទួន 'it')។",
      "វាគឺជាសហការីរបស់ខ្ញុំដែលខ្ញុំគោរពពួកគេបំផុត (ខុសព្រោះមាន pronouns ស្ទួន 'them')។"
    ],
    "questionForm": "Was it the marketing strategy that caused the sudden drop in sales?",
    "questionFormKhmer": "តើវាជាយុទ្ធសាស្ត្រទីផ្សារមែនទេដែលបណ្តាលឱ្យការលក់ធ្លាក់ចុះយ៉ាងគំហុក?",
    "visualTimeline": "Highlights a specific point in time or event from the past or present, contrasting it against background assumptions to alter pragmatic focus.",
    "visualTimelineKhmer": "គូសបញ្ជាក់ពីចំណុចជាក់លាក់មួយក្នុងពេលអតីតកាល ឬបច្ចុប្បន្ន ដោយប្រៀបធៀបវាទៅនឹងការសន្និដ្ឋានទូទៅ។",
    "examples": [
      {
        "english": "It is linguistic nuance that distinguishes a proficient speaker from a native-like expert.",
        "translation": "The exact factor that makes the difference is linguistic nuance.",
        "translationKhmer": "វាគឺជាភាពខុសគ្នាតិចតួចทางភាសា ដែលបែងចែកអ្នកចេះស្ទាត់ពីអ្នកជំនាញដូចម្ចាស់ភាសា។",
        "note": "Uses an It-cleft to emphasize the subject 'linguistic nuance'."
      },
      {
        "english": "What investors are demanding now is absolute transparency regarding financial portfolios.",
        "translation": "The primary demand of investors at present is absolute transparency.",
        "translationKhmer": "អ្វីដែលវិនិយោគិនទាមទារឥឡូវនេះ គឺភាពច្បាស់លាស់ដាច់ខាតទាក់ទងនឹងផលប័ត្រហិរញ្ញវត្ថុ។",
        "note": "Uses a Wh-cleft to emphasize a nominal clause functioning as the complement."
      }
    ],
    "tips": [
      "Never repeat the emphasized pronoun or noun within the relative clause of an It-cleft (e.g., avoid 'It was John who he left').",
      "Use 'All' instead of 'What' when you want to convey a limiting sense meaning 'the only thing' (e.g., 'All I need is time')."
    ],
    "commonMistakes": [
      {
        "incorrect": "What I need it is a long vacation.",
        "correct": "What I need is a long vacation.",
        "explanation": "Do not repeat the object pronoun 'it' after the 'be' verb in a Wh-cleft structure."
      }
    ],
    "summary": "Cleft sentences divide a single clause into two parts using 'It + be' or 'Wh- words + be' to strategically highlight specific elements and control discourse emphasis.",
    "summaryKhmer": "ប្រយោគបំបែកបែងចែកប្រយោគមួយជាពីរផ្នែកដោយប្រើ 'It + be' ឬ 'Wh- words + be' ដើម្បីគូសបញ្ជាក់ធាតុជាក់លាក់ និងគ្រប់គ្រងការផ្ដោតការយកចិត្តទុកដាក់ក្នុងកិច្ចសន្ទនា។",
    "practiceQuestions": [
      {
        "id": "q1",
        "question": "Choose the correct cleft sentence to emphasize the time: 'We discovered the truth only after the audit.'",
        "options": [
          "It was only after the audit that we discovered the truth.",
          "It is after the audit what we discovered the truth.",
          "What we discovered the truth was after the audit.",
          "It discovered the truth that was after the audit."
        ],
        "correctAnswer": "It was only after the audit that we discovered the truth."
      },
      {
        "id": "q2",
        "question": "Select the correct Wh-cleft sentence for: 'I really need a quiet place to study.'",
        "options": [
          "What I really need is a quiet place to study.",
          "It is what I really need a quiet place to study.",
          "A quiet place to study is what need I really.",
          "All what I need is a quiet place to study."
        ],
        "correctAnswer": "What I really need is a quiet place to study."
      }
    ]
  },
  {
    "id": "conditional-omission",
    "title": "Inversion & Omission in Advanced Conditionals",
    "level": "C1",
    "shortDesc": "Master advanced formal conditional structures through subject-auxiliary inversion and the omission of 'if'.",
    "shortDescKhmer": "ស្វែងយល់ពីโครงสร้างប្រយោគលក្ខខណ្ឌកម្រិតខ្ពស់តាមរយៈការផ្លាស់ប្តូរទីតាំងកិរិយាសព្ទជំនួយ និងការលុបចោលពាក្យ 'if'។",
    "explanation": "At the C1 level, standard conditional clauses (using 'if') are often replaced by more formal, concise structures involving inversion or omission. By removing 'if', we invert the auxiliary verb and the subject. This stylistic choice is frequent in academic writing, formal speeches, and professional correspondence.\n\nFor first conditionals, 'should' is inverted: *Should you require further assistance, please contact us.* For second conditionals, 'were' is fronted: *Were they to accept the proposal, the project would proceed.* For third conditionals, 'had' is moved to the front: *Had we known about the delay, we would have adjusted our schedule.* Additionally, conjunctions like 'provided that', 'on condition that', or 'supposing' can introduce unique stylistic nuances.",
    "explanationKhmer": "នៅកម្រិត C1 ប្រយោគលក្ខខណ្ឌធម្មតា (ដែលប្រើ 'if') ច្រើនតែត្រូវបានជំនួសដោយទម្រង់ផ្លូវការ និងខ្លីជាងមុន ដែលពាក់ព័ន្ធនឹងការបញ្ច្រាសប្រធាននិងកិរិយាសព្ទ ឬការលុបចោលពាក្យ 'if'។ ការដកពាក្យ 'if' ចេញ ហើយដាក់កិរិយាសព្ទជំនួយឡើងមុនប្រធាន គឺជាការពេញនិយមក្នុងការសរសេរ学术 (សិក្សាស្រាវជ្រាវ) សុន្ទរកថាផ្លូវការ និងលិខិតបዕ្ញាក់ការងារ។\n\nសម្រាប់លក្ខខណ្ឌទី១ ពាក្យ 'should' ត្រូវដាក់មុនប្រធាន៖ *Should you require further assistance...* សម្រាប់លក្ខខណ្ឌទី២ ពាក្យ 'were' ត្រូវដាក់ខាងមុខ៖ *Were they to accept...* និងសម្រាប់លក្ខខណ្ឌទី៣ ពាក្យ 'had' ត្រូវដាក់ខាងមុខ៖ *Had we known...*។",
    "formula": "Had / Were / Should + Subject + [Main Verb/Past Participle/To-Infinitive] + Main Clause",
    "formulaKhmer": "Had / Were / Should + ប្រធាន + [កិរិយាសព្ទចម្បង/V3/To-Infinitive] + ប្រយោគចម្បង",
    "whenToUse": [
      "In formal or academic writing to elevate stylistic tone",
      "In professional correspondence to sound more polite and concise",
      "To emphasize a hypothetical or counterfactual condition"
    ],
    "whenToUseKhmer": [
      "ក្នុងការសរសេរផ្លូវការ ឬការសរសេរអត្ថបទសិក្សា ដើម្បីលើកកម្ពស់សម្លេងទម្រង់ភាសា",
      "ក្នុងលិខិតរដ្ឋបាល ឬអាជីវកម្ម ដើម្បីស្តាប់ទៅមានភាពគួរសម និងខ្លីច្បាស់លាស់",
      "ដើម្បីបញ្ជាក់ពីស្ថានភាពសម្មតិកម្ម ឬផ្ទុយពីការពិត"
    ],
    "positiveExamples": [
      "Had the board of directors anticipated the market shift, the merger would have succeeded.",
      "Were an economic crisis to occur, central banks would intervene immediately."
    ],
    "positiveExamplesKhmer": [
      "ប្រសិនបើក្រុមប្រឹក្សាភិបាលបានរំពឹងទុកការផ្លាស់ប្តូរទីផ្សារ ការរួមបញ្ចូលគ្នានឹងទទួលបានជោគជ័យ។",
      "ប្រសិនបើវិបត្តិសេដ្ឋកិច្ចកើតឡើង ធនាគារកណ្តាលនឹងអន្តរាគមន៍ភ្លាមៗ។"
    ],
    "negativeExamples": [
      "If had I known the risks, I would not have invested.",
      "Were she knew the truth, she would be furious."
    ],
    "negativeExamplesKhmer": [
      "ប្រសិនបើខ្ញុំបានដឹងពីហានិភ័យ (ខុសវេយ្យាករณ์ ដោយសារមានទាំង if និង inversion)",
      "ប្រសិនបើនាងដឹងការពិត នាងនឹងខឹងសម្បាយ៉ាងខ្លាំង (ខុសទម្រង់កិរិយាសព្ទក្រោយ were)"
    ],
    "questionForm": "Should you have any questions, whom should we contact?",
    "questionFormKhmer": "ប្រសិនបើអ្នកមានសំណួរអ្វី តើអ្នកណាម្នាក់ដែលយើងគួរទាក់ទង?",
    "visualTimeline": "Hypothetical past, present, or future framing used strictly in formal registers to distance the speaker or writer from direct assertion.",
    "visualTimelineKhmer": "ការកំណត់ស៊ុមសម្មតិកម្មអតីតកាល បច្ចុប្បន្នកាល ឬអនាគតកាល ដែលប្រើប្រាស់យ៉ាងតឹងរ៉ឹងក្នុងទម្រង់ផ្លូវការ ដើម្បីបង្កើតគម្លាតពីការបញ្ជាក់ផ្ទាល់។",
    "examples": [
      {
        "english": "Should you encounter any discrepancies in the report, notify management at once.",
        "translation": "If you happen to encounter discrepancies, let management know immediately.",
        "translationKhmer": "ប្រសិនបើអ្នកជួបប្រទះភាពមិនប្រក្រតីណាមួយនៅក្នុងរបាយការណ៍ សូមជូនដំណឹងដល់ថ្នាក់ដឹកនាំជាបន្ទាន់។",
        "note": "Replaces 'If you should encounter' with formal inversion."
      },
      {
        "english": "Had it not been for the generous grant, the laboratory would have closed.",
        "translation": "If there hadn't been a generous grant, the lab would have been forced to close.",
        "translationKhmer": "ប្រសិនបើគ្មានជំនួយឧបត្ថម្ភដ៏ច្រើនសន្ធឹកសន្ធាប់នោះទេ មន្ទីរពិសោធន៍មុខជាត្រូវបិទទ្វារជាមិនខាន។",
        "note": "Advanced fixed structure using 'Had it not been for' replacing 'If it hadn't been for'."
      }
    ],
    "tips": [
      "Never use 'if' when employing subject-auxiliary inversion (e.g., *Incorrect: If had I known...*).",
      "In negative inverted conditionals, do not contract 'had not' or 'were not' (e.g., *Had we not* instead of *Hadn't we*)."
    ],
    "commonMistakes": [
      {
        "incorrect": "If were they to refuse our offer, we would look elsewhere.",
        "correct": "Were they to refuse our offer, we would look elsewhere.",
        "explanation": "You cannot combine 'if' with the inverted structure (Were they)."
      }
    ],
    "summary": "In advanced conditionals, 'if' can be omitted by inverting the auxiliary verb (Had, Were, Should) with the subject to achieve a formal, sophisticated tone.",
    "summaryKhmer": "នៅក្នុងប្រយោគលក្ខខណ្ឌកម្រិតខ្ពស់ ពាក្យ 'if' អាចត្រូវបានលុបចោលដោយការបញ្ច្រាសកិរិយាសព្ទជំនួយ (Had, Were, Should) ជាមួយប្រធាន ដើម្បីទទួលបានសម្លេងភាសាផ្លូវការ និងស៊ីជម្រៅ។",
    "practiceQuestions": [
      {
        "id": "q1",
        "question": "______ the negotiations to fail, the company would face severe financial penalties.",
        "options": [
          "Were",
          "Had",
          "Should",
          "If"
        ],
        "correctAnswer": "Were"
      },
      {
        "id": "q2",
        "question": "______ we received the shipment on time, we could have fulfilled the orders.",
        "options": [
          "Should",
          "Had",
          "Were",
          "Did"
        ],
        "correctAnswer": "Had"
      }
    ]
  },
  {
    "id": "nominal-clauses",
    "title": "Advanced Nominal Clauses & Subordinate Structures",
    "level": "C1",
    "shortDesc": "Master the use of complex nominal clauses, cleft sentences, and subordinate structures to elevate your academic and professional writing.",
    "shortDescKhmer": "ស្ទាត់ជំនាញការប្រើប្រាស់ប្រយោគនាមស្មុគស្មាញ និងរចនាសម្ព័ន្ធបន្ទាប់បន្សំ ដើម្បីលើកកម្ពស់ការសរសេររបស់អ្នក.",
    "explanation": "At the C1 level, mastering nominal clauses (that-clauses, wh-clauses, and infinitive clauses functioning as nouns) allows you to package complex ideas seamlessly as subjects, objects, or complements. Furthermore, advanced writers utilize cleft sentences (e.g., 'What is crucial is that...') and dummy pronouns ('It is widely believed that...') to manipulate information structure, placing strategic emphasis on key takeaways. Understanding the syntactic constraints, such as subjunctive triggers in nominal clauses (e.g., 'I insist that he *be* present'), separates proficient speakers from native-level advanced communicators.",
    "explanationKhmer": "នៅកម្រិត C1 ការស្ទាត់ជំនាញប្រយោគនាមអនុញ្ញាតឱ្យអ្នកបញ្ចូលគំនិតស្មុគស្មាញជារួមជាប្រធានកម្ម កម្មបទ ឬបំពេញបទ។ លើសពីនេះ អ្នកសរសេរកម្រិតខ្ពស់ប្រើប្រាស់ប្រយោគបំបែកដើម្បីរៀបចំរចនាសម្ព័ន្ធព័ត៌មាន និងផ្ដោតសំខាន់លើចំណុចគន្លឹះ។",
    "formula": "[Introductory Phrase/Dummy It] + [Verb] + [Nominal Clause (What/That/Whether) + Subject + Verb]",
    "formulaKhmer": "[ឃ្លាផ្តើម/It ជំនួស] + [កិរិយាសព្ទ] + [ប្រយោគនាម (What/That/Whether) + ប្រធាន + កិរិយាសព្ទ]",
    "whenToUse": [
      "To shift the information focus using pseudo-cleft structures in academic essays.",
      "To express strong recommendations or necessities using the subjunctive in nominal that-clauses.",
      "To condense lengthy arguments into sophisticated subject or object complements."
    ],
    "whenToUseKhmer": [
      "ដើម្បីផ្លាស់ប្តូរការផ្តោតអារម្មណ៍ព័ត៌មានដោយប្រើប្រាស់រចនាសម្ព័ន្ធ pseudo-cleft ក្នុងការសរសេរអត្ថបទសិក្សា។",
      "ដើម្បីបង្ហាញពីអនុសាសន៍ខ្លាំងៗដោយប្រើប្រាស់កិរិយាសព្ទបញ្ជាក្នុងប្រយោគ that-clause។",
      "ដើម្បីបង្រួមការវែកញែកវែងៗទៅជាប្រធានឬកម្មបទបំពេញដ៏ស៊ីជម្រៅ។"
    ],
    "positiveExamples": [
      "What remains to be seen is whether the policy will yield the desired economic outcomes.",
      "It is imperative that every stakeholder be informed of the regulatory changes."
    ],
    "positiveExamplesKhmer": [
      "អ្វីដែលនៅសល់គឺថាតើគោលនយោបាយនេះនឹងផ្តល់លទ្ធផលសេដ្ឋកិច្ចដែលចង់បានដែរឬទេ។",
      "វាជារឿងចាំបាច់ដែលភាគីពាក់ព័ន្ធទាំងអស់ត្រូវទទួលបានដំណឹងអំពីការផ្លាស់ប្តូរបទប្បញ្ញត្តិ។"
    ],
    "negativeExamples": [
      "What we need is solve this problem immediately.",
      "It is important that he is present at the meeting tomorrow."
    ],
    "negativeExamplesKhmer": [
      "អ្វីដែលយើងត្រូវការគឺដោះស្រាយបញ្ហានេះភ្លាមៗ។ (កំហុសវេយ្យាករណ៍)",
      "វាជារឿងសំខាន់ដែលគាត់មានវត្តមាននៅក្នុងកិច្ចប្រជុំស្អែកនេះ។ (ខុសទម្រង់ subjunctive)"
    ],
    "questionForm": "What is vital to understand is how these mechanisms interact under pressure.",
    "questionFormKhmer": "អ្វីដែលមានសារៈសំខាន់ក្នុងការយល់ដឹងគឺរបៀបដែលយន្តការទាំងនេះមានអន្តរកម្មក្រោមសម្ពាធ។",
    "visualTimeline": "Simultaneous or forward-looking perspective where the nominal clause acts as a conceptual anchor for future implications.",
    "visualTimelineKhmer": "ទស្សនវិស័យដំណាលគ្នាឬរំពឹងទុកមុខ ដែលប្រយោគនាមដើរតួជាយុថ្កាគំនិតសម្រាប់ផលវិបាកនាពេលអនាគត។",
    "examples": [
      {
        "english": "Little did they know how drastically the new directive would alter their operational framework.",
        "translation": "They were completely unaware of the dramatic changes the directive would cause.",
        "translationKhmer": "ពួកគេមិនដឹងទាល់តែសោះថាបទបញ្ជាថ្មីនេះនឹងផ្លាស់ប្តូរក្របខ័ណ្ឌប្រតិបត្តិការរបស់ពួកគេយ៉ាងដូចម្តេច។",
        "note": "Inversion combined with an advanced wh-nominal clause."
      },
      {
        "english": "The board demanded that the CEO step down immediately.",
        "translation": "The board insisted on the immediate resignation of the CEO.",
        "translationKhmer": "ក្រុមប្រឹក្សាភិបាលបានទាមទារឱ្យនាយកប្រតិបត្តិលាលែងពីតំណែងជាបន្ទាន់។",
        "note": "Mandative subjunctive 'step down' (base form) used in the nominal that-clause."
      }
    ],
    "tips": [
      "Always use the bare infinitive (mandative subjunctive) after verbs like demand, insist, and adjectives like crucial, imperative.",
      "Use pseudo-cleft sentences starting with 'What' to naturally link paragraphs and emphasize your main argument."
    ],
    "commonMistakes": [
      {
        "incorrect": "The issue is that what we can do is limited.",
        "correct": "The issue is that what we can do is severely limited.",
        "explanation": "Avoid stacking redundant clause markers awkwardly without proper modifiers or rhythm."
      }
    ],
    "summary": "Advanced nominal clauses and cleft structures empower C1 writers to control emphasis, maintain formal register, and synthesize complex ideas effectively.",
    "summaryKhmer": "ប្រយោគនាមកម្រិតខ្ពស់ និងរចនាសម្ព័ន្ធបំបែកផ្តល់អំណាចដល់អ្នកសរសេរកម្រិត C1 ក្នុងការគ្រប់គ្រងការផ្តោតសំខាន់ និងសំយោគគំនិតស្មុគស្មាញប្រកបដោយប្រសិទ្ធភាព។",
    "practiceQuestions": [
      {
        "id": "q1",
        "question": "Choose the correct form: It is crucial that she _____ the proposal before the deadline.",
        "options": [
          "submits",
          "submit",
          "submitted",
          "submitting"
        ],
        "correctAnswer": "submit"
      },
      {
        "id": "q2",
        "question": "Identify the correct advanced structure: _____ remains a mystery is how they solved the equation.",
        "options": [
          "What",
          "That",
          "It",
          "Which"
        ],
        "correctAnswer": "What"
      }
    ]
  },
  {
    "id": "participle-clauses",
    "title": "Advanced Participle Clauses & Reduced Relatives",
    "level": "C1",
    "shortDesc": "Learn how to use participle clauses and reduced relatives to create sophisticated, concise, and academic-level English sentences.",
    "shortDescKhmer": "រៀនពីរបៀបប្រើប្រាស់ Participle Clauses និង Reduced Relatives ដើម្បីបង្កើតប្រយោគភាសាអង់គ្លេសដែលមានភាពស្មុគស្មាញ សង្ខេប និងមានកម្រិតសិក្សាធិការខ្ពស់។",
    "explanation": "Participle clauses allow us to pack information into a single sentence by omitting the relative pronoun and the verb 'to be'. Present participles (-ing) are used for active meanings, while past participles (-ed/3rd form) are used for passive meanings. Perfect participles (having + past participle) are used when the action in the clause happened before the main action. At a C1 level, these structures are essential for condensing complex thoughts in academic writing and formal speech, avoiding repetitive 'which' or 'that' clauses.\n\nCrucially, the subject of the participle clause must be the same as the subject of the main clause. Failure to ensure this results in a 'dangling modifier', which is a common error in advanced writing. When the participle clause is placed at the start of a sentence, it often denotes a reason or a temporal sequence, adding a professional cadence to the prose.",
    "explanationKhmer": "Participle clauses អនុញ្ញាតឱ្យយើងសង្ខេបព័ត៌មានទៅក្នុងប្រយោគតែមួយដោយលុបចោលសព្វនាម (relative pronoun) និងកិរិយាសព្ទ 'to be'។ Present participles (-ing) ប្រើសម្រាប់អត្ថន័យសកម្ម ចំណែកឯ Past participles (-ed/ទម្រង់ទី៣) ប្រើសម្រាប់អត្ថន័យអកម្ម។ Perfect participles (having + past participle) ប្រើនៅពេលសកម្មភាពនៅក្នុងឃ្លានោះបានកើតឡើងមុនសកម្មភាពសំខាន់។ នៅកម្រិត C1 រចនាសម្ព័ន្ធទាំងនេះមានសារៈសំខាន់សម្រាប់ការសង្ខេបគំនិតស្មុគស្មាញក្នុងការសរសេរតាមបែបសិក្សា និងការនិយាយផ្លូវការ ដោយចៀសវាងការប្រើឃ្លា 'which' ឬ 'that' ដដែលៗ។\n\nចំណុចសំខាន់គឺប្រធាននៃ participle clause ត្រូវតែដូចគ្នាទៅនឹងប្រធាននៃប្រយោគមេ។ ការមិនគោរពច្បាប់នេះនឹងបណ្តាលឱ្យមានកំហុសហៅថា 'dangling modifier'។ នៅពេលដែល participle clause ដាក់នៅដើមប្រយោគ វាច្រើនតែបង្ហាញពីមូលហេតុ ឬលំដាប់ពេលវេលា ដែលធ្វើឱ្យការសរសេរមានលក្ខណៈវិជ្ជាជីវៈ។",
    "formula": "[Present Participle/Past Participle/Perfect Participle] + [Comma] + [Main Clause]",
    "formulaKhmer": "កិរិយាសព្ទដែលមាន (-ing/-ed/having+V3) + សញ្ញាក្បៀស + ប្រយោគមេ",
    "whenToUse": [
      "To express reasons or causes in formal writing.",
      "To link two events happening simultaneously.",
      "To provide extra information about a noun without adding extra clauses."
    ],
    "whenToUseKhmer": [
      "ដើម្បីបង្ហាញពីហេតុផល ឬមូលហេតុក្នុងការសរសេរផ្លូវការ។",
      "ដើម្បីភ្ជាប់ព្រឹត្តិការណ៍ពីរដែលកើតឡើងដំណាលគ្នា។",
      "ដើម្បីផ្តល់ព័ត៌មានបន្ថែមអំពីនាមដោយមិនចាំបាច់បន្ថែមឃ្លាវែងៗ។"
    ],
    "positiveExamples": [
      "Having completed the project ahead of schedule, the team was granted an extra week of leave.",
      "The book, written by a renowned scholar, offers a unique perspective on climate policy."
    ],
    "positiveExamplesKhmer": [
      "ដោយបានបញ្ចប់គម្រោងមុនកាលកំណត់ ក្រុមការងារត្រូវបានអនុញ្ញាតឱ្យឈប់សម្រាកបន្ថែមមួយសប្តាហ៍។",
      "សៀវភៅដែលសរសេរដោយអ្នកប្រាជ្ញដ៏ល្បីល្បាញមួយរូប បានផ្តល់នូវទស្សនៈប្លែកៗអំពីគោលនយោបាយអាកាសធាតុ។"
    ],
    "negativeExamples": [
      "Walking down the street, the trees looked beautiful. (Incorrect: The trees were not walking)",
      "Having been late, the boss was angry. (Incorrect: The boss was not late, the subject was)"
    ],
    "negativeExamplesKhmer": [
      "ការដើរតាមផ្លូវ ដើមឈើមើលទៅស្រស់ស្អាត។ (ខុស៖ ដើមឈើមិនមែនជាអ្នកដើរទេ)",
      "ដោយសារតែយឺត មេក៏ខឹង។ (ខុស៖ មេមិនមែនជាអ្នកយឺតទេ)"
    ],
    "questionForm": "Not applicable; participle clauses typically appear in declarative, formal statements rather than interrogatives.",
    "questionFormKhmer": "មិនមានទម្រង់សំណួរផ្ទាល់ទេ ព្រោះ participle clauses ជាទូទៅប្រើក្នុងប្រយោគរៀបរាប់ផ្លូវការ។",
    "visualTimeline": "Past (Perfect Participle) -> Present/Concurrent (Present Participle) -> Consequence (Main Clause)",
    "visualTimelineKhmer": "អតីតកាល (Perfect Participle) -> បច្ចុប្បន្ន/ដំណាលគ្នា (Present Participle) -> លទ្ធផល (ប្រយោគមេ)",
    "examples": [
      {
        "english": "Looking out the window, she noticed a mysterious figure.",
        "translation": "While she was looking out the window, she noticed a mysterious figure.",
        "translationKhmer": "ខណៈពេលកំពុងសម្លឹងមើលទៅក្រៅបង្អួច នាងបានឃើញតួអង្គអាថ៌កំបាំងម្នាក់។",
        "note": "Demonstrates simultaneous action."
      },
      {
        "english": "Located in the heart of the city, the hotel is highly accessible.",
        "translation": "The hotel, which is located in the heart of the city, is highly accessible.",
        "translationKhmer": "ដោយសារតែស្ថិតនៅចំកណ្តាលទីក្រុង សណ្ឋាគារនេះមានភាពងាយស្រួលក្នុងការធ្វើដំណើរទៅដល់។",
        "note": "Reduces a relative clause for brevity."
      }
    ],
    "tips": [
      "Always check that the subject of the participle clause is the same as the subject of the main clause.",
      "Use 'Having + V3' to show clearly that one event finished before the next began."
    ],
    "commonMistakes": [
      {
        "incorrect": "Seeing the heavy rain, the picnic was cancelled.",
        "correct": "Seeing the heavy rain, we decided to cancel the picnic.",
        "explanation": "The original sentence implies the picnic was 'seeing' the rain, which is logically impossible."
      }
    ],
    "summary": "Participle clauses serve to condense complex information by replacing relative clauses or adverbial phrases with participle forms (-ing, -ed, having+V3), provided the subject remains consistent.",
    "summaryKhmer": "Participle clauses បម្រើក្នុងគោលបំណងសង្ខេបព័ត៌មានស្មុគស្មាញដោយជំនួស relative clauses ឬឃ្លា adverbial ជាមួយនឹងទម្រង់ participle (-ing, -ed, having+V3) ដោយលក្ខខណ្ឌថាប្រធាននៃប្រយោគត្រូវតែដូចគ្នា។",
    "practiceQuestions": [
      {
        "id": "q1",
        "question": "Choose the correct replacement: 'The man who is standing by the door is my boss.'",
        "options": [
          "The man standing by the door is my boss.",
          "The man stood by the door is my boss.",
          "Standing by the door, the man is my boss.",
          "The man who stands by the door is my boss."
        ],
        "correctAnswer": "The man standing by the door is my boss."
      },
      {
        "id": "q2",
        "question": "Which sentence uses the perfect participle correctly?",
        "options": [
          "Having eaten dinner, the dishes were washed.",
          "Having finished her homework, Sarah went to bed.",
          "Having finished her homework, bed was where Sarah went.",
          "Having eating her dinner, Sarah slept."
        ],
        "correctAnswer": "Having finished her homework, Sarah went to bed."
      }
    ]
  },
  {
    "id": "past-modals-deduction",
    "title": "Past Modals of Speculation & Deduction",
    "level": "C1",
    "shortDesc": "Master the use of past modals to express degrees of certainty, logical deductions, and unrealized actions in past contexts.",
    "shortDescKhmer": "ស្វែងយល់ពីការប្រើប្រាស់កិរិយាស័ព្ទជំនួយអតីតកាល ដើម្បីបង្ហាញកម្រិតនៃភាពច្បាស់លាស់ ការសន្និដ្ឋានសមហេតុផល និងសកម្មភាពដែលមិនបានកើតឡើងក្នុងបរិបទអតីតកាល។",
    "explanation": "At the C1 level, expressing speculation and deduction about the past requires moving beyond basic structures into nuanced modal verbs paired with the perfect infinitive (have + past participle). When we look back at evidence and try to make logical deductions, the choice of modal drastically alters our degree of certainty.\n\n'Must have + V3' is used when we are almost certain something happened based on compelling evidence. Conversely, 'can't have + V3' or 'couldn't have + V3' expresses strong logical impossibility in the past. For possibilities where we lack definitive proof, we deploy 'might have', 'may have', or 'could have' + V3. Note a subtle C1 distinction: 'could have' often emphasizes theoretical possibility or an unrealized opportunity, whereas 'might have' leans slightly more toward hesitation or weaker probability.\n\nFurthermore, past modals frequently express counterfactual regret or criticism. 'Should have' and 'ought to have' indicate an unfulfilled obligation or a missed expectation, while 'shouldn't have' criticizes an action already completed. When dealing with actions that were completely unnecessary yet carried out anyway, 'needn't have + V3' is the precise form, contrasting sharply with 'didn't need to', which implies the necessity was absent regardless of whether the action occurred.",
    "explanationKhmer": "នៅកម្រិត C1 ការបង្ហាញពីការប៉ាន់ស្មាន និងការសន្និដ្ឋានអំពីអតីតកាលទាមទារឱ្យមានការឈានហួសពីទម្រង់មូលដ្ឋាន ដោយប្រើប្រាស់កិរិយាស័ព្ទជំនួយកម្រិតខ្ពស់ជាមួយ perfect infinitive (have + ភាគទី៣)។ នៅពេលដែលយើងពិនិត្យមើលភស្តុតាងនិងធ្វើការសន្និដ្ឋាន ការជ្រើសរើសកិរិយាស័ព្ទជំនួយផ្លាស់ប្តូរកម្រិតនៃការប្រាកដប្រជាយ៉ាងខ្លាំង។\n\n'Must have + V3' ត្រូវ បាន ប្រើ នៅពេល ដែល យើង ស្ទើរតែ ប្រាកដ ថា មាន អ្វី មួយ កើតឡើង ផ្អែកលើ ភស្តុតាង ច្បាស់លាស់។ ផ្ទុយទៅវិញ 'can't have + V3' ឬ 'couldn't have + V3' បង្ហាញពីភាពមិនអាចទៅរួចក្នុងអតីតកាល។ ចំពោះលទ្ធភាពដែលយើងខ្វះភស្តុតាងជាក់លាក់ យើងប្រើប្រាស់ 'might have', 'may have' ឬ 'could have' + V3។\n\nលើសពីនេះ កិរិយាស័ព្ទជំនួយអតីតកាលតែងតែបង្ហាញពីការស្តាយក្រោយ ឬការរិះគន់។ 'Should have' និង 'ought to have' បង្ហាញពីកាតព្វកិច្ចដែលមិនបានបំពេញ ឬការរំពឹងទុកដែលខកខាន ខណៈពេលដែល 'shouldn't have' រិះគន់សកម្មភាពដែលបានធ្វើរួច។ ចំពោះសកម្មភាពដែលគ្មានសារៈសំខាន់ទាល់តែសោះប៉ុន្តែបែរជាធ្វើទៅវិញ 'needn't have + V3' គឺជាទម្រង់ដែលត្រូវ.",
    "formula": "Modal Verb (must/might/could/can't/should) + have + Past Participle (V3)",
    "formulaKhmer": "កិរិយាស័ព្ទជំនួយ (must/might/could/can't/should) + have + ភាគទី៣ (V3)",
    "whenToUse": [
      "Deducing logical certainties from past evidence.",
      "Expressing past possibilities with varying degrees of probability.",
      "Critiquing past actions or expressing unrealized obligations."
    ],
    "whenToUseKhmer": [
      "ការសន្និដ្ឋានយ៉ាងច្បាស់លាស់ពីភស្តុតាងអតីតកាល។",
      "ការបង្ហាញពីលទ្ធភាពក្នុងអតីតកាលដែលមានកម្រិតប្រូបាប៊ីលីតេខុសៗគ្នា។",
      "ការរិះគន់សកម្មភាពអតីតកាល ឬបង្ហាញពីកាតព្វកិច្ចដែលមិនបានបំពេញ។"
    ],
    "positiveExamples": [
      "She must have overlooked the email given the sheer volume of correspondence she receives.",
      "They could have resolved the issue sooner if they had consulted engineering."
    ],
    "positiveExamplesKhmer": [
      "នាងប្រាកដជាបានរំលងអ៊ីមែលនោះហើយ ដោយសារតែបរិមាណសារដ៏ច្រើនសន្ធឹកសន្ធាប់ដែលនាងទទួលបាន។\nពួកគេអាចនឹងដោះស្រាយបញ្ហានោះបានលឿនជាងមុន ប្រសិនបើពួកគេបានពិគ្រោះយោបល់ជាមួយផ្នែកវិស្វកម្ម។"
    ],
    "negativeExamples": [
      "He can't have misinterpreted the directives; they were explicitly detailed.",
      "We shouldn't have dispatched the report without a rigorous legal review."
    ],
    "negativeExamplesKhmer": [
      "គាត់មិនអាចយល់ខុសលើការណែនាំទាំងនោះទេ ព្រោះវាត្រូវបានពន្យល់លម្អិតយ៉ាងច្បាស់។\nយើងមិនគួរផ្ញើរបាយការណ៍នោះចេញដោយគ្មានការពិនិត្យផ្នែកច្បាប់យ៉ាងតឹងរឹងនោះទេ។"
    ],
    "questionForm": "Could she have anticipated this market shift, or was it entirely unprecedented?",
    "questionFormKhmer": "តើនាងអាចរំពឹងទុកពីការផ្លាស់ប្តូរទីផ្សារនេះដែរឬទេ ឬមួយក៏វាជាករណីមិនធ្លាប់មានពីមុនមកទាំងស្រុង?",
    "visualTimeline": "Past action evaluated from the present perspective using retrospective modals.",
    "visualTimelineKhmer": "សកម្មភាពអតីតកាលដែលត្រូវបានវាយតម្លៃពីទស្សនៈបច្ចុប្បន្នដោយប្រើកិរិយាស័ព្ទជំនួយអតីតកាល។",
    "examples": [
      {
        "english": "The archaeological findings suggest the civilization might have migrated due to severe prolonged drought.",
        "translation": "It is possible, though unproven, that climate forced their migration.",
        "translationKhmer": "ការរកឃើញทางបុរាណវិទ្យាបានបង្ហាញថា អរិយធម៌នោះប្រហែលជាបានភៀសខ្លួនដោយសារគ្រោះរាំងស្ងួតអូសបន្លាយយ៉ាងធ្ងន់ធ្ងរ។",
        "note": "Expressed via 'might have' to denote speculative probability."
      },
      {
        "english": "You needn't have translated the entire dossier; a summary would have sufficed.",
        "translation": "You did translate it, but it was unnecessary.",
        "translationKhmer": "អ្នកមិនចាំបាច់បកប្រែឯកសារទាំងអស់នោះទេ ការសង្ខេបគឺគ្រប់គ្រាន់ហើយ។",
        "note": "Demonstrates 'needn't have + V3' for completed unnecessary actions."
      }
    ],
    "tips": [
      "Reserve 'must have' strictly for logical deductions, avoiding it for expressions of future necessity or permission.",
      "Master the distinction between 'didn't need to' (action may or may not have happened) and 'needn't have' (action definitely happened)."
    ],
    "commonMistakes": [
      {
        "incorrect": "She must left her briefcase in the boardroom.",
        "correct": "She must have left her briefcase in the boardroom.",
        "explanation": "Modals of deduction require the auxiliary 'have' followed by the past participle (V3), not just the base verb or past form."
      }
    ],
    "summary": "Past modals use 'modal + have + V3' to retroactively deduce, speculate, or critique past occurrences based on present judgments.",
    "summaryKhmer": "កិរិយាស័ព្ទជំនួយអតីតកាលប្រើប្រាស់ 'modal + have + V3' ដើម្បីសន្និដ្ឋាន ប៉ាន់ស្មាន ឬរិះគន់ព្រឹត្តិការណ៍អតីតកាលឡើងវិញដោយផ្អែកលើការវិនិច្ឆ័យបច្ចុប្បន្ន។",
    "practiceQuestions": [
      {
        "id": "q1",
        "question": "The laboratory results show no anomalies. The contamination ________ happened during the filtration phase.",
        "options": [
          "can't have",
          "must have",
          "should have",
          "needn't have"
        ],
        "correctAnswer": "can't have"
      },
      {
        "id": "q2",
        "question": "Why did you purchase redundant software? You ________ us before finalizing the procurement.",
        "options": [
          "might consult",
          "should have consulted",
          "must consult",
          "could consult"
        ],
        "correctAnswer": "should have consulted"
      }
    ]
  }
];
