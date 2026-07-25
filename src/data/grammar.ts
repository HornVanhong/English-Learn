import { GrammarLesson } from '@/types';

export const grammarLessons: GrammarLesson[] = [
  {
    "id": "be-verb",
    "title": "The \"Be\" Verb",
    "level": "A1",
    "shortDesc": "Learn the forms and uses of the most fundamental verb in English: am, is, are.",
    "explanation": "The verb \"to be\" is the most common and important verb in English. It is used to describe states of being, identities, qualities, and locations. Unlike other verbs, \"to be\" changes its form completely based on the subject (I, you, he/she/it, we, they) and the tense.",
    "examples": [
      {
        "english": "I am a student.",
        "translation": "Yo soy un estudiante / Ich bin ein Schüler.",
        "translationKhmer": "ខ្ញុំជាសិស្ស។"
      },
      {
        "english": "She is at school.",
        "translation": "Ella está en la escuela / Sie ist in der Schule.",
        "translationKhmer": "នាងនៅសាលា។"
      },
      {
        "english": "They are very friendly.",
        "translation": "Ellos son muy amigables / Sie sind sehr freundlich.",
        "translationKhmer": "ពួកគេមានភាពរួសរាយរាក់ទាក់ណាស់។"
      }
    ],
    "tips": [
      "Use contractions in speech and informal writing: I'm, you're, he's, she's, it's, we're, they're.",
      "To make questions, swap the subject and the verb: \"You are happy\" becomes \"Are you happy?\".",
      "Add \"not\" to make a sentence negative: \"I am not tired\", \"He is not ready\"."
    ],
    "commonMistakes": [
      {
        "incorrect": "They is very tired.",
        "correct": "They are very tired.",
        "explanation": "\"They\" is plural, so it requires the plural form \"are\"."
      },
      {
        "incorrect": "I is a doctor.",
        "correct": "I am a doctor.",
        "explanation": "The subject pronoun \"I\" always pairs with \"am\" in the present tense."
      }
    ],
    "summary": "The verb \"to be\" has three present tense forms: am (for I), is (for he, she, it), and are (for you, we, they). It is used for identity, location, characteristics, and feelings.",
    "practiceQuestions": [
      {
        "id": "be-q1",
        "question": "Choose the correct verb: \"We ______ excited about the trip.\"",
        "options": [
          "am",
          "is",
          "are"
        ],
        "correctAnswer": "are"
      },
      {
        "id": "be-q2",
        "question": "Identify the correct question form:",
        "options": [
          "Is she a doctor?",
          "She is a doctor?",
          "Are she a doctor?"
        ],
        "correctAnswer": "Is she a doctor?"
      },
      {
        "id": "be-q3",
        "question": "Fill in the blank: \"It ______ cold outside today.\"",
        "options": [
          "am",
          "is",
          "are"
        ],
        "correctAnswer": "is"
      }
    ],
    "shortDescKhmer": "រៀនទម្រង់ និងការប្រើប្រាស់កិរិយាសព្ទមូលដ្ឋានបំផុតជាភាសាអង់គ្លេស៖ am, is, are ។",
    "explanationKhmer": "កិរិយាស័ព្ទ \"to be\" គឺជាកិរិយាសព្ទទូទៅ និងសំខាន់បំផុតនៅក្នុងភាសាអង់គ្លេស។ វា​ត្រូវ​បាន​ប្រើ​ដើម្បី​ពណ៌នា​អំពី​ស្ថានភាព​នៃ​ការ​រស់នៅ អត្តសញ្ញាណ គុណភាព និង​ទីតាំង។ មិនដូចកិរិយាស័ព្ទផ្សេងទៀត \"to be\" ផ្លាស់ប្តូរទម្រង់របស់វាទាំងស្រុងដោយផ្អែកលើប្រធានបទ (ខ្ញុំ, អ្នក, គាត់ / នាង / វា, យើង, ពួកគេ) និងភាពតានតឹង។",
    "summaryKhmer": "កិរិយាស័ព្ទ \"to be\" មានទម្រង់តានតឹងបច្ចុប្បន្នចំនួនបី: am (សម្រាប់ខ្ញុំ), គឺ (សម្រាប់គាត់, នាង, វា) និងគឺ (សម្រាប់អ្នក, យើង, ពួកគេ) ។ វាត្រូវបានប្រើសម្រាប់អត្តសញ្ញាណ ទីតាំង លក្ខណៈ និងអារម្មណ៍។"
  },
  {
    "id": "articles",
    "title": "Articles (A, An, The)",
    "level": "A1",
    "shortDesc": "Understand when to use a/an (indefinite) versus the (definite article).",
    "explanation": "Articles are words that define a noun as specific or unspecific. English has three articles: \"a\", \"an\", and \"the\". \"A\" and \"an\" are indefinite articles, used for singular countable nouns that are not specific. \"The\" is the definite article, used when both the speaker and listener know exactly which noun is being discussed.",
    "examples": [
      {
        "english": "I saw a dog in the park. The dog was chasing a ball.",
        "translation": "Vi un perro en el parque (cualquiera). El perro (el que vi) estaba persiguiendo una pelota.",
        "translationKhmer": "ខ្ញុំបានឃើញឆ្កែនៅក្នុងឧទ្យាន។ ឆ្កែកំពុងដេញតាមបាល់។"
      },
      {
        "english": "She wants an apple.",
        "translation": "Ella quiere una manzana (cualquier manzana).",
        "translationKhmer": "នាងចង់បានផ្លែប៉ោមមួយ។"
      },
      {
        "english": "The moon is beautiful tonight.",
        "translation": "La luna está hermosa esta noche (hay solo una luna).",
        "translationKhmer": "ព្រះច័ន្ទគឺស្រស់ស្អាតណាស់យប់នេះ។"
      }
    ],
    "tips": [
      "Use \"a\" before words starting with consonant sounds (e.g., a cat, a university - \"yoo-niversity\").",
      "Use \"an\" before words starting with vowel sounds (e.g., an apple, an hour - the \"h\" is silent).",
      "Do not use \"a/an\" with plural nouns or uncountable nouns: use \"some\" or no article (e.g., \"I love milk\", \"She has dogs\")."
    ],
    "commonMistakes": [
      {
        "incorrect": "He is an university student.",
        "correct": "He is a university student.",
        "explanation": "\"University\" starts with a consonant sound (/j/), so it takes \"a\"."
      },
      {
        "incorrect": "I want a apple.",
        "correct": "I want an apple.",
        "explanation": "\"Apple\" begins with a vowel sound, so it must take \"an\" for smooth pronunciation."
      }
    ],
    "summary": "Use \"a/an\" for generic singular nouns. Use \"a\" for consonant sounds, and \"an\" for vowel sounds. Use \"the\" when a noun is unique, specific, or already mentioned.",
    "practiceQuestions": [
      {
        "id": "art-q1",
        "question": "Choose the correct article: \"Could you pass me ______ salt, please?\"",
        "options": [
          "a",
          "an",
          "the"
        ],
        "correctAnswer": "the"
      },
      {
        "id": "art-q2",
        "question": "Choose the correct article: \"He will arrive in ______ hour.\"",
        "options": [
          "a",
          "an",
          "the"
        ],
        "correctAnswer": "an"
      },
      {
        "id": "art-q3",
        "question": "Select the correct sentence:",
        "options": [
          "I love a books.",
          "I bought a new book yesterday.",
          "She is the doctor, but I don't know which one."
        ],
        "correctAnswer": "I bought a new book yesterday."
      }
    ],
    "shortDescKhmer": "ស្វែងយល់ថាពេលណាត្រូវប្រើ a/an (មិនកំណត់) ធៀបនឹង (អត្ថបទច្បាស់លាស់)។",
    "explanationKhmer": "អត���ថបទ គឺជាពាក្យដែលកំណត់នាមថាជាក់លាក់ ឬមិនជាក់លាក់។ ភាសាអង់គ្លេសមានអត្ថបទបីគឺ \"a\", \"an\" និង \"the\" ។ \"A\" និង \"an\" គឺជាអត្ថបទមិនកំណត់ ប្រើសម្រាប់នាមដែលអាចរាប់បានឯកវចនៈ ដែលមិនជាក់លាក់។ \"នេះ\" គឺជាអត្ថបទច្បាស់លាស់ ប្រើនៅពេលដែលអ្នកនិយាយ និងអ្នកស្តាប់ដឹងច្បាស់ថានាមណាមួយកំពុងត្រូវបានពិភាក្សា។",
    "summaryKhmer": "ប្រើ \"a/an\" សម្រាប់នាមឯកវចនៈទូទៅ។ ប្រើ \"a\" សម្រាប់សំឡេងព្យញ្ជនៈ និង \"an\" សម្រាប់សំឡេងស្រៈ។ ប្��ើ \"the\" នៅពេលដែលនាមមានតែមួយគត់ ជាក់លាក់ ឬបានរៀបរាប់រួចហើយ។"
  },
  {
    "id": "pronouns",
    "title": "Pronouns",
    "level": "A1",
    "shortDesc": "Learn subject, object, possessive pronouns, and possessive adjectives.",
    "explanation": "Pronouns replace nouns to avoid repetition. There are different types: Subject pronouns (do the action), Object pronouns (receive the action), Possessive adjectives (show ownership before a noun), and Possessive pronouns (replace a noun showing ownership).",
    "examples": [
      {
        "english": "She loves him.",
        "translation": "Ella lo ama. (\"She\" is subject, \"him\" is object).",
        "translationKhmer": "នាងស្រឡាញ់គាត់។"
      },
      {
        "english": "This is my book. It is mine.",
        "translation": "Este es mi libro. Es mío. (\"my\" is possessive adjective, \"mine\" is possessive pronoun).",
        "translationKhmer": "នេះជាសៀវភៅរបស់ខ្ញុំ។ វាជារបស់ខ្ញុំ។"
      },
      {
        "english": "They called us yesterday.",
        "translation": "Ellos nos llamaron ayer. (\"They\" is subject, \"us\" is object).",
        "translationKhmer": "ពួកគេបានទូរស័ព្ទមកយើងកាលពីម្សិលមិញ។"
      }
    ],
    "tips": [
      "Possessive adjectives (my, your, his, her, its, our, their) must be followed by a noun: \"This is my house.\"",
      "Possessive pronouns (mine, yours, his, hers, ours, theirs) stand alone: \"This house is mine.\"",
      "Make sure the pronoun agrees in number and gender with the noun it replaces."
    ],
    "commonMistakes": [
      {
        "incorrect": "This book is my.",
        "correct": "This book is mine.",
        "explanation": "\"My\" is an adjective and needs a noun. Use \"mine\" when there is no noun following."
      },
      {
        "incorrect": "Him went to the store.",
        "correct": "He went to the store.",
        "explanation": "Use the subject pronoun \"He\" as the subject of the verb \"went\"."
      }
    ],
    "summary": "Subject pronouns (I, you, he, she, it, we, they) do the action. Object pronouns (me, you, him, her, it, us, them) receive the action. Possessive adjectives show ownership before nouns, and possessive pronouns show ownership alone.",
    "practiceQuestions": [
      {
        "id": "pro-q1",
        "question": "Replace the underlined word: \"John loves Mary. John bought a flower for <u>Mary</u>.\"",
        "options": [
          "she",
          "her",
          "hers"
        ],
        "correctAnswer": "her"
      },
      {
        "id": "pro-q2",
        "question": "Choose the correct word: \"Is this jacket ______?\"",
        "options": [
          "your",
          "yours",
          "you"
        ],
        "correctAnswer": "yours"
      },
      {
        "id": "pro-q3",
        "question": "Choose the correct pronoun: \"We are going to the park. Do you want to come with ______?\"",
        "options": [
          "we",
          "us",
          "our"
        ],
        "correctAnswer": "us"
      }
    ],
    "shortDescKhmer": "រៀនមុខវិជ្ជា វត្ថុ សព្វនាម សព្វនាម និងគុណនាមកម្មសិទ្ធិ។",
    "explanationKhmer": "សព្វនាម ជំនួសនាម ដើម្បីជៀសវាងពាក្យដដែលៗ។ មានប្រភេទផ្សេងៗគ្នា៖ Subject pronouns (do action), Object pronouns (receive the action), Possessive adjective (បង្ហាញភាពជាម្ចាស់មុននាមមួយ) និង Possessive pronouns (ជំនួសនាមបង្ហាញពីភាពជាម្ចាស់)។",
    "summaryKhmer": "សព្វនាមប្រធានបទ (ខ្ញុំ, អ្នក, គាត់, នាង, វា, យើង, ពួកគេ) ធ្វើសកម្មភាព។ សព្វនាមវត្ថុ (ខ្ញុំ, អ្នក, គាត់, នាង, វា, យើង, ពួកគេ) ទទួលសកម្មភាព។ Possessive adjectives បង្ហាញពីភាពជាម្ចាស់នៅចំពោះមុខនាម ហើយសព្វនាមមានកម្មសិទ្ធិបង្ហាញពីភាពជាម្ចាស់តែម្នាក់ឯង។"
  },
  {
    "id": "present-simple",
    "title": "Present Simple",
    "level": "A2",
    "shortDesc": "Talk about habits, facts, and daily routines in the present.",
    "explanation": "The Present Simple is used to express general truths, habits, facts, and routines. For spelling, verbs ending in consonants just take the base form. However, for third-person singular subjects (he, she, it), we add \"-s\" or \"-es\" to the base verb.",
    "examples": [
      {
        "english": "I drink coffee every morning.",
        "translation": "Bebo café todas las mañanas (routine).",
        "translationKhmer": "ខ្ញុំផឹកកាហ្វេរាល់ព្រឹក។"
      },
      {
        "english": "The sun rises in the east.",
        "translation": "El sol sale por el este (general truth).",
        "translationKhmer": "ព្រះអាទិត្យរះនៅទិសខាងកើត។"
      },
      {
        "english": "He plays football on Saturdays.",
        "translation": "Él juega fútbol los sábados (third person -s).",
        "translationKhmer": "គាត់លេងបាល់ទាត់នៅថ្ងៃសៅរ៍។"
      }
    ],
    "tips": [
      "To make negative sentences, use \"do not / don't\" or \"does not / doesn't\" + base verb: \"I don't play\", \"She doesn't play\" (no -s on play!).",
      "To make questions, start with \"Do\" or \"Does\" + subject + base verb: \"Does he speak English?\".",
      "Look for keywords like: always, usually, often, sometimes, never, every day, once a week."
    ],
    "commonMistakes": [
      {
        "incorrect": "She live in London.",
        "correct": "She lives in London.",
        "explanation": "Always add \"-s\" or \"-es\" to the verb when the subject is he, she, or it in Present Simple affirmative."
      },
      {
        "incorrect": "He doesn't likes apples.",
        "correct": "He doesn't like apples.",
        "explanation": "After the auxiliary \"does/doesn't\", the verb returns to its base form (no \"-s\")."
      }
    ],
    "summary": "Use Present Simple for habits, facts, and schedules. For subjects he/she/it, add \"-s\" to the verb in positive sentences. Use \"do/does\" for questions and negatives.",
    "practiceQuestions": [
      {
        "id": "ps-q1",
        "question": "Choose the correct form: \"My brother ______ television after dinner.\"",
        "options": [
          "watch",
          "watches",
          "watching"
        ],
        "correctAnswer": "watches"
      },
      {
        "id": "ps-q2",
        "question": "Fill in the blank: \"They ______ live in New York anymore.\"",
        "options": [
          "don't",
          "doesn't",
          "not"
        ],
        "correctAnswer": "don't"
      },
      {
        "id": "ps-q3",
        "question": "Choose the correct question format:",
        "options": [
          "Does he plays soccer?",
          "Do he play soccer?",
          "Does he play soccer?"
        ],
        "correctAnswer": "Does he play soccer?"
      }
    ],
    "shortDescKhmer": "និយាយអំពីទម្លាប់ ការពិត និងទម្លាប់ប្រចាំថ្ងៃក្នុងពេលបច្ចុប្បន្ន។",
    "explanationKhmer": "Present Simple ត្រូវបានប្រើដើម្បីបង្ហាញពីការពិតទូទៅ ទម្លាប់ ការពិត និងទម្លាប់។ សម្រាប់អក្ខរាវិរុទ្ធ កិរិយាស័ព្ទដែលបញ្ចប់ដោយព្យញ្ជនៈគ្រាន់តែយកទម្រង់មូលដ្ឋាន។ ទោះយ៉ាងណាក៏ដោយ សម្រាប់មុខវិជ្ជាឯកវចនៈបុគ្គលទីបី (គាត់ នាង វា) យើងបន្ថែម \"-s\" ឬ \"-es\" ទៅកិរិយាស័ព្ទមូលដ្ឋាន។",
    "summaryKhmer": "ប្រើ Present Simple សម្រាប់ទម្លាប់ ការពិត និងកាលវិភាគ។ សម្រាប់មុខវិជ្ជាដែលគាត់/នាង/វា បន្ថែម \"-s\" ទៅកិរិយាស័ព្ទក្នុងប្រយោគវិជ្ជមាន។ ប្រើ \"ធ្វើ/ធ្វើ\" សម្រាប់សំណួរ និងអវិជ្ជមាន។"
  },
  {
    "id": "present-continuous",
    "title": "Present Continuous",
    "level": "A2",
    "shortDesc": "Describe actions happening right now, temporary situations, or future plans.",
    "explanation": "The Present Continuous is formed using the present tense of the \"be\" verb (am, is, are) + the main verb ending in \"-ing\". It is used for actions happening right at this moment, temporary projects, or confirmed future arrangements.",
    "examples": [
      {
        "english": "I am writing a letter right now.",
        "translation": "Estoy escribiendo una carta en este momento.",
        "translationKhmer": "ខ្ញុំ​កំពុង​សរសេរ​សំបុត្រ​មួយ​ឥឡូវ​នេះ។"
      },
      {
        "english": "She is staying with her cousin this week.",
        "translation": "Ella se está quedando con su prima esta semana (temporary).",
        "translationKhmer": "នាងកំពុងស្នាក់នៅជាមួយបងប្អូនជីដូនមួយរបស់នាងក្នុងសប្តាហ៍នេះ។"
      },
      {
        "english": "They are meeting the client tomorrow at noon.",
        "translation": "Ellos se reunirán con el cliente mañana al mediodía (future plan).",
        "translationKhmer": "ពួកគេ​នឹង​ជួប​អតិថិជន​នៅ​ថ្ងៃ​ស្អែក​។"
      }
    ],
    "tips": [
      "Do not use continuous forms with state/stative verbs like love, hate, know, believe, understand, want (e.g. say \"I know him\", not \"I am knowing him\").",
      "For verbs ending in \"-e\", drop the \"e\" before adding \"-ing\" (e.g. write -> writing).",
      "For short verbs ending in consonant-vowel-consonant, double the final consonant (e.g. run -> running, sit -> sitting)."
    ],
    "commonMistakes": [
      {
        "incorrect": "I am wanting some chocolate.",
        "correct": "I want some chocolate.",
        "explanation": "\"Want\" is a stative verb expressing a desire, which is not usually used in the continuous form."
      },
      {
        "incorrect": "They playing basketball in the backyard.",
        "correct": "They are playing basketball in the backyard.",
        "explanation": "Always remember to include the helping \"be\" verb (am/is/are) in the Present Continuous."
      }
    ],
    "summary": "Present Continuous is: [Am/Is/Are] + [Verb-ing]. Use it for actions in progress now, temporary situations, or near future arrangements. Avoid it with stative verbs.",
    "practiceQuestions": [
      {
        "id": "pc-q1",
        "question": "Fill in the blank: \"Look! The baby ______ sleeping in the crib.\"",
        "options": [
          "is",
          "are",
          "am"
        ],
        "correctAnswer": "is"
      },
      {
        "id": "pc-q2",
        "question": "Identify the incorrect sentence:",
        "options": [
          "She is cooking dinner.",
          "I am reading a novel.",
          "I am liking this soup."
        ],
        "correctAnswer": "I am liking this soup."
      },
      {
        "id": "pc-q3",
        "question": "Choose the correct form: \"We ______ to Paris this Friday.\"",
        "options": [
          "are flying",
          "flies",
          "flying"
        ],
        "correctAnswer": "are flying"
      }
    ],
    "shortDescKhmer": "ពិពណ៌នាអំពីសកម្មភាពដែលកើតឡើងនៅពេលនេះ ស្ថានភាពបណ្តោះអាសន្ន ឬផែនការអនាគត។",
    "explanationKhmer": "Present Continuous ត្រូវបានបង្កើតឡើងដោយប្រើបច្ចុប្បន្នកាលនៃកិរិយាស័ព្ទ \"be\" (am, is, are) + កិរិយាសព្ទចម្បងដែលបញ្ចប់ដោយ \"-ing\" ។ វាត្រូវបានប្រើសម្រាប់សកម្មភាពដែលកំពុងកើតឡើងនៅពេលនេះ គម្រោងបណ្តោះអាសន្ន ឬបញ្ជាក់ការរៀបចំនាពេលអនាគត។",
    "summaryKhmer": "Present Continuous គឺ៖ [Am/Is/Are] + [Verb-ing]។ ប្រើវាសម្រាប់សកម្មភាពដែលកំពុងដំណើរការឥឡូវនេះ ស្ថានភាពបណ្តោះអាសន្ន ឬការរៀបចំនាពេលខាង��ុខ។ ជៀសវាងវាដោយកិរិយាស័ព្ទថេរ។"
  },
  {
    "id": "past-simple",
    "title": "Past Simple",
    "level": "A2",
    "shortDesc": "Talk about actions that started and finished in the past.",
    "explanation": "The Past Simple is used to describe completed actions in the past. Regular verbs form the past tense by adding \"-ed\" or \"-d\" to the base form (e.g., walk -> walked). However, many common verbs are irregular and must be memorized individually (e.g., go -> went, see -> saw, buy -> bought).",
    "examples": [
      {
        "english": "We visited Rome last summer.",
        "translation": "Visitamos Roma el verano pasado (regular).",
        "translationKhmer": "យើងបានទៅលេងទីក្រុងរ៉ូមកាលពីរដូវក្តៅមុន។"
      },
      {
        "english": "He wrote three letters yesterday.",
        "translation": "Él escribió tres cartas ayer (irregular: write -> wrote).",
        "translationKhmer": "គាត់បានសរសេរសំបុត្រចំនួនបីកាលពីម្សិលមិញ។"
      },
      {
        "english": "I did not sleep well last night.",
        "translation": "No dormí bien anoche (negative with did not).",
        "translationKhmer": "យប់មិញខ្ញុំគេ��មិនលក់ទេ។"
      }
    ],
    "tips": [
      "Use the auxiliary \"did / did not (didn't)\" for negatives and questions, followed by the base form of the verb: \"Did you go?\" (not \"Did you went?\").",
      "The past form of the \"be\" verb is was (for I, he, she, it) and were (for you, we, they). It does not use \"did\" in negatives or questions: \"I wasn't there\", \"Were you sick?\".",
      "Look for past indicators: yesterday, ago, last week, in 2010."
    ],
    "commonMistakes": [
      {
        "incorrect": "Did you bought that phone?",
        "correct": "Did you buy that phone?",
        "explanation": "In questions, the past tense is already indicated by \"Did\". The main verb must be in its base form (\"buy\")."
      },
      {
        "incorrect": "I was went to the cinema.",
        "correct": "I went to the cinema.",
        "explanation": "Do not combine \"was/were\" with a past tense action verb. Just use the action verb directly."
      }
    ],
    "summary": "Past Simple describes finished past actions. Regular verbs add \"-ed\". Irregular verbs change forms. Negative/Questions use \"did\" + base verb, except for the \"be\" verb (was/were).",
    "practiceQuestions": [
      {
        "id": "pas-q1",
        "question": "Choose the correct verb form: \"She ______ her keys on the table an hour ago.\"",
        "options": [
          "left",
          "leave",
          "leaves"
        ],
        "correctAnswer": "left"
      },
      {
        "id": "pas-q2",
        "question": "Fill in the blank: \"I ______ not see you at the party yesterday.\"",
        "options": [
          "do",
          "did",
          "was"
        ],
        "correctAnswer": "did"
      },
      {
        "id": "pas-q3",
        "question": "Choose the correct past sentence:",
        "options": [
          "Where did you went?",
          "Where were you go?",
          "Where did you go?"
        ],
        "correctAnswer": "Where did you go?"
      }
    ],
    "shortDescKhmer": "និយាយអំពីសកម្មភាពដែលបានចាប់ផ្តើម និងបញ្ចប់កាលពីអតីតកាល។",
    "explanationKhmer": "Past Simple ត្រូវបានប្រើដើម្បីពិពណ៌នាអំពីសកម្មភាពដែលបានបញ្ចប់កាលពីអតីតកាល។ កិរិយាស័ព្ទធម្មតាបង្កើតជាអតីតកាលដោយបន្ថែម \"-ed\" ឬ \"-d\" ទៅទម្រង់មូលដ្ឋាន (ឧ. ដើរ -> ដើរ) ។ ទោះជាយ៉ាងណាក៏ដោយ កិរិយាសព្ទទូទៅជាច្រើនគឺមិនទៀងទាត់ ហើយត្រូវតែទន្ទេញចាំរៀងៗខ្លួន (ឧ. ទៅ -> ទ��, មើល -> saw, buy -> buy)។",
    "summaryKhmer": "Past Simple ពិពណ៌នាអំពីសកម្មភាពអតីតកាលដែលបានបញ្ចប់។ កិរិយាស័ព្ទធម្មតាបន្ថែម \"-ed\" ។ កិរិយាស័ព្ទមិនទៀងទាត់ផ្លាស់ប្តូរទម្រង់។ សំណួរ/អវិជ្ជមានប្រើ \"did\" + កិរិយាសព្ទគោល លើកលែងតែកិរិយាស័ព្ទ \"be\" (was/were) ។"
  },
  {
    "id": "future-tense",
    "title": "Future Tense (Will & Going to)",
    "level": "B1",
    "shortDesc": "Express predictions, plans, decisions, and future outcomes using will and going to.",
    "explanation": "There are two primary ways to express the future in English. Use \"will\" + base verb for instant decisions, offers, promises, and general predictions. Use \"be going to\" + base verb for plans, intentions, and predictions based on current evidence.",
    "examples": [
      {
        "english": "I think it will rain tomorrow.",
        "translation": "Creo que lloverá mañana (prediction).",
        "translationKhmer": "ខ្ញុំគិតថានឹងមានភ្លៀងនៅថ្ងៃស្អែក។"
      },
      {
        "english": "I am going to visit my parents this weekend.",
        "translation": "Voy a visitar a mis padres este fin de semana (pre-made plan).",
        "translationKhmer": "ខ្ញុំនឹងទៅលេងឪពុកម្តាយរបស់ខ្ញុំនៅចុងសប្តាហ៍នេះ។"
      },
      {
        "english": "The phone is ringing. I'll answer it!",
        "translation": "El teléfono está sonando. ¡Yo contestaré! (spontaneous decision).",
        "translationKhmer": "ទូរសព្ទ​កំពុង​រោទ៍។ ខ្ញុំនឹងឆ្លើយ!"
      }
    ],
    "tips": [
      "Use \"will\" for spontaneous actions: \"I'll help you with those bags.\"",
      "Use \"going to\" for plans already decided: \"We are going to buy a new car next month.\"",
      "Use \"going to\" for logical physical predictions: \"Look at those dark clouds! It is going to rain.\""
    ],
    "commonMistakes": [
      {
        "incorrect": "I will going to study medicine next year.",
        "correct": "I am going to study medicine next year.",
        "explanation": "Do not mix \"will\" and \"going to\". Use one or the other depending on the context."
      },
      {
        "incorrect": "I think she will buys the red dress.",
        "correct": "I think she will buy the red dress.",
        "explanation": "After modal auxiliary \"will\", the verb must be in its bare base form (no \"-s\")."
      }
    ],
    "summary": "Use \"will\" for predictions, promises, offers, and instant decisions. Use \"be going to\" for intentions, pre-made plans, and predictions supported by present evidence.",
    "practiceQuestions": [
      {
        "id": "fut-q1",
        "question": "Choose the correct option: \"I have decided. I ______ study Spanish.\"",
        "options": [
          "will",
          "am going to",
          "going to"
        ],
        "correctAnswer": "am going to"
      },
      {
        "id": "fut-q2",
        "question": "Choose the best response to \"I am so cold!\": \"Don't worry. I ______ close the window.\"",
        "options": [
          "will",
          "am going to",
          "going to"
        ],
        "correctAnswer": "will"
      },
      {
        "id": "fut-q3",
        "question": "Fill in the blank: \"Look at that runner! He is far ahead. He ______ win the race.\"",
        "options": [
          "will",
          "is going to",
          "wins"
        ],
        "correctAnswer": "is going to"
      }
    ],
    "shortDescKhmer": "បង្ហាញការព្យាករណ៍ ផែនការ ការសម្រេចចិត្ត និងលទ្ធផលនាពេលអនាគតដោយប្រើឆន្ទៈ និងទៅ។",
    "explanationKhmer": "មានវិធីចម្បងពីរដើម្បីបង្ហាញពីអនាគតជាភាសាអង់គ្លេស។ ប្រើ \"ឆន្ទៈ\" + កិរិយាស័ព្ទមូលដ្ឋានសម្រាប់ការសម្រេចចិត្តភ្លាមៗ ការផ្តល់ជូន ការសន្យា និងការព្យាករណ៍ទូទៅ។ ប្រើ \"be going to\" + កិរិយាស័ព្ទមូលដ្ឋានសម្រាប់ផែនការ ចេតនា និងការព្យាករណ៍ដោយផ្អែកលើភស្តុតាងបច្ចុប្បន្ន។",
    "summaryKhmer": "ប្រើ \"ឆន្ទៈ\" សម្រាប់ការទស្សន៍ទាយ ការសន្យា ការផ្តល់ជូន និងការសម្រេចចិត្តភ្លាមៗ។ ប្រើ \"នឹងទៅ\" សម្រាប់ចេតនា ផែនការដែលបានបង្កើតជាមុន និងការព្យាករណ៍ដែលគាំទ្រដោយភស្តុតាងបច្ចុប្បន្ន។"
  },
  {
    "id": "modal-verbs",
    "title": "Modal Verbs",
    "level": "B1",
    "shortDesc": "Understand modals expressing ability, permission, obligation, and advice: can, must, should.",
    "explanation": "Modal verbs are auxiliary (helping) verbs that express ability, possibility, permission, advice, or obligation. They do not change form (no \"-s\" for he/she/it) and are always followed by the base form of the main verb without \"to\" (except for ought to / have to).",
    "examples": [
      {
        "english": "I can speak three languages.",
        "translation": "Puedo hablar tres idiomas (ability).",
        "translationKhmer": "ខ្ញុំអាចនិយាយបានបីភាសា។"
      },
      {
        "english": "You should see a doctor for your cough.",
        "translation": "Deberías ver a un médico por tu tos (advice/recommendation).",
        "translationKhmer": "អ្នកគួរតែទៅជួបគ្រូពេទ្យ ដើម្បីក្អករបស់អ្នក។"
      },
      {
        "english": "Students must submit their assignments by Friday.",
        "translation": "Los estudiantes deben entregar sus tareas antes del viernes (obligation).",
        "translationKhmer": "សិស្សត្រូវបញ្ជូនកិច្ចការរបស់ពួកគេឱ្យបានមុនថ្ងៃសុក្រ។"
      }
    ],
    "tips": [
      "Do not add \"-s\" to modal verbs: \"He can swim\" (not \"He cans swim\").",
      "Never put \"to\" between a modal verb and the main verb: \"I should go\" (not \"I should to go\").",
      "For negatives, add \"not\" directly to the modal: cannot/can't, should not/shouldn't, must not/mustn't (mustn't means prohibition, not lack of necessity)."
    ],
    "commonMistakes": [
      {
        "incorrect": "She must to study harder.",
        "correct": "She must study harder.",
        "explanation": "Modal verbs are followed directly by the base verb without \"to\"."
      },
      {
        "incorrect": "He shoulds eat more vegetables.",
        "correct": "He should eat more vegetables.",
        "explanation": "Modal verbs do not take \"-s\" in the third person singular."
      }
    ],
    "summary": "Modal verbs (can, could, should, must, might, may) express conditions. They do not change endings, and are followed by base verbs without \"to\".",
    "practiceQuestions": [
      {
        "id": "mod-q1",
        "question": "Choose the correct sentence:",
        "options": [
          "He can to play the guitar.",
          "He can plays the guitar.",
          "He can play the guitar."
        ],
        "correctAnswer": "He can play the guitar."
      },
      {
        "id": "mod-q2",
        "question": "Fill in the blank for advice: \"You ______ drink plenty of water when it is hot.\"",
        "options": [
          "should",
          "must",
          "can"
        ],
        "correctAnswer": "should"
      },
      {
        "id": "mod-q3",
        "question": "Choose the correct form for prohibition: \"You ______ park here; it is illegal.\"",
        "options": [
          "shouldn't",
          "mustn't",
          "don't have to"
        ],
        "correctAnswer": "mustn't"
      }
    ],
    "shortDescKhmer": "ស្វែងយល់អំពីម៉ូឌុលដែលបង្ហាញពីសមត្ថភាព ការអនុញ្ញាត កាតព្វកិច្ច និងដំបូន្មាន៖ អាច ត្រូវតែ គួរតែ។",
    "explanationKhmer": "កិរិយាសព្ទ Modal គឺជាកិរិយាសព្ទជំនួយ (ជំនួយ) ដែលបង្ហាញពីសមត្ថភាព លទ្ធភាព ការអនុញ្ញាត ដំបូន្មាន ឬកាតព្វកិច្ច។ ពួកគេមិនផ្លាស់ប្តូរទម្រង់ (គ្មាន \"-s\" សម្រាប់គាត់ / នាង / វា) ហើយតែងតែត្រូវបានបន្តដោយទម្រង់មូលដ្ឋាននៃកិរិយាស័ព្ទចម្បងដោយគ្មាន \"ទៅ\" (លើកលែងតែគួរតែ / ត្រូវតែ) ។",
    "summaryKhmer": "កិរិយាស័ព្ទគំរូ (អាច, អាច, គួរ, ត្រូវតែ, អាច, អាច) បង្ហាញលក្ខខណ្ឌ។ ពួកវាមិនផ្លាស់ប្តូរការបញ្ចប់ទេ ហើយត្រូវបានបន្តដោយកិរិយាស័ព្ទមូលដ្ឋានដោយគ្មាន \"ទៅ\" ។"
  },
  {
    "id": "conditionals",
    "title": "Conditionals (Zero, First, Second)",
    "level": "B1",
    "shortDesc": "Master structure and uses of different conditional sentences representing facts, plans, and imaginary scenarios.",
    "explanation": "Conditional sentences describe a condition and a result. There are three primary types:\n1. **Zero Conditional**: (If + present, present) - Scientific facts or general truths.\n2. **First Conditional**: (If + present, will + verb) - Real, highly possible future situations.\n3. **Second Conditional**: (If + past simple, would + verb) - Imaginary, hypothetical, or unlikely situations in the present/future.",
    "examples": [
      {
        "english": "If you heat ice, it melts.",
        "translation": "Si calientas el hielo, se derrite (Zero Conditional - general fact).",
        "translationKhmer": "ប្រសិនបើអ្នកកំដៅទឹកកកវារលាយ។"
      },
      {
        "english": "If it rains tomorrow, we will cancel the picnic.",
        "translation": "Si llueve mañana, cancelaremos el picnic (First Conditional - real possibility).",
        "translationKhmer": "បើ​ភ្លៀង​ន��​ថ្ងៃ​ស្អែក យើង​នឹង​លុប​ចោល​ការ​ញ៉ាំ​អាហារ។"
      },
      {
        "english": "If I won the lottery, I would buy a large house.",
        "translation": "Si ganara la lotería, compraría una casa grande (Second Conditional - imaginary).",
        "translationKhmer": "ប្រសិនបើខ្ញុំឈ្នះឆ្នោតខ្ញុំនឹងទិញផ្ទះធំមួយ។"
      }
    ],
    "tips": [
      "You can swap the order of the clauses: \"If I am tired, I sleep\" is the same as \"I sleep if I am tired.\" Only use a comma when the \"if\" clause is first.",
      "In the Second Conditional, \"were\" is preferred over \"was\" for all subjects: \"If I were you, I would study.\"",
      "For First Conditional, do not use \"will\" in the \"if\" clause: \"If it will rain...\" is incorrect; say \"If it rains...\""
    ],
    "commonMistakes": [
      {
        "incorrect": "If I will see her, I will tell her.",
        "correct": "If I see her, I will tell her.",
        "explanation": "In the First Conditional, use the simple present tense in the \"if\" clause, not \"will\"."
      },
      {
        "incorrect": "If I was rich, I would travel around the world.",
        "correct": "If I were rich, I would travel around the world.",
        "explanation": "In Second Conditional sentences, \"were\" is grammatically preferred for all subject pronouns, including \"I\"."
      }
    ],
    "summary": "Zero Conditional states facts (If present, present). First Conditional states possible future plans (If present, will). Second Conditional states hypothetical dreams (If past, would).",
    "practiceQuestions": [
      {
        "id": "cond-q1",
        "question": "Choose the correct form: \"If she studies hard, she ______ pass the exam next week.\"",
        "options": [
          "would",
          "will",
          "passed"
        ],
        "correctAnswer": "will"
      },
      {
        "id": "cond-q2",
        "question": "Complete the sentence: \"If I ______ you, I would take that job offer.\"",
        "options": [
          "am",
          "was",
          "were"
        ],
        "correctAnswer": "were"
      },
      {
        "id": "cond-q3",
        "question": "Choose the correct conditional sentence:",
        "options": [
          "If you freeze water, it becomes ice.",
          "If you will freeze water, it will become ice.",
          "If you freeze water, it would become ice."
        ],
        "correctAnswer": "If you freeze water, it becomes ice."
      }
    ],
    "shortDescKhmer": "រចនាសម្ព័ន្ធមេ និងការប្រើប្រាស់ប្រយោគតាមលក្ខខណ្ឌផ្សេងៗដែលតំណាងឱ្យការពិត ផែនការ និងសេណារីយ៉ូស្រមើលស្រមៃ។",
    "explanationKhmer": "ប្រយោគតាមលក្ខខណ្ឌពិពណ៌នាអំពីលក្ខខណ្ឌ និងលទ្ធផល។ មានបីប្រភេទចម្បង៖",
    "summaryKhmer": "Zero Conditional states ការពិត (ប្រសិនបើមានវត្តមាន មានវត្តមាន) ។ First Conditional states ផែនការអនាគតដែលអាចកើតមាន (ប្រសិនបើបច្ចុប្បន្ននឹង) ។ Second Conditional states សុបិននិម្មិត (ប្រសិនបើអតីតកាលនឹង) ។"
  },
  {
    "id": "passive-voice",
    "title": "Passive Voice",
    "level": "B1+",
    "shortDesc": "Learn how to shift focus from the agent performing the action to the recipient of the action.",
    "explanation": "In active sentences, the subject does the action (e.g., \"The chef cooked the meal\"). In passive sentences, the subject receives the action, shifting focus to the object (e.g., \"The meal was cooked by the chef\"). The passive voice is formed using: [Be Verb (in appropriate tense)] + [Past Participle of main verb].",
    "examples": [
      {
        "english": "The house was built in 1990.",
        "translation": "La casa fue construida en 1990 (recipient: house; builder is not mentioned).",
        "translationKhmer": "ផ្ទះនេះត្រូវបានសាងសង់ក្នុងឆ្នាំ 1990 ។"
      },
      {
        "english": "English is spoken all over the world.",
        "translation": "El inglés se habla en todo el mundo (present passive).",
        "translationKhmer": "ភាសាអង់គ្លេសត្រូវបាននិយាយទូទាំងពិភពលោក។"
      },
      {
        "english": "The thieves were caught by the police.",
        "translation": "Los ladrones fueron atrapados por la policía (agent mentioned with \"by\").",
        "translationKhmer": "ចោរ​ត្រូវ​ប៉ូលិស​ចាប់​បាន។"
      }
    ],
    "tips": [
      "Only transitive verbs (verbs that take an object) can be put into the passive voice.",
      "Use \"by\" if you want to mention who did the action (the agent): \"Hamlet was written by Shakespeare.\"",
      "Use the passive voice when the agent is unknown, obvious, or less important than the action itself."
    ],
    "commonMistakes": [
      {
        "incorrect": "The book was wrote by him.",
        "correct": "The book was written by him.",
        "explanation": "Always use the past participle form of the main verb (\"written\") in passive constructions, not the simple past (\"wrote\")."
      },
      {
        "incorrect": "Active: \"She cleans the room.\" Passive: \"The room is clean by she.\"",
        "correct": "Active: \"She cleans the room.\" Passive: \"The room is cleaned by her.\"",
        "explanation": "Make sure to use the past participle \"cleaned\" and the object pronoun \"her\" after \"by\"."
      }
    ],
    "summary": "Form the passive voice using a form of \"to be\" + Past Participle. Use it to focus on the object receiving the action or when the actor is unknown.",
    "practiceQuestions": [
      {
        "id": "pass-q1",
        "question": "Convert to passive: \"The dog bit the boy.\"",
        "options": [
          "The boy was bitten by the dog.",
          "The boy is bitten by the dog.",
          "The dog was bitten by the boy."
        ],
        "correctAnswer": "The boy was bitten by the dog."
      },
      {
        "id": "pass-q2",
        "question": "Choose the correct passive verb: \"Thousands of books ______ published every year.\"",
        "options": [
          "are",
          "is",
          "were"
        ],
        "correctAnswer": "are"
      },
      {
        "id": "pass-q3",
        "question": "Fill in the blank: \"The painting was painted ______ a local artist.\"",
        "options": [
          "from",
          "with",
          "by"
        ],
        "correctAnswer": "by"
      }
    ],
    "shortDescKhmer": "ស្វែងយល់ពីរបៀបផ្លាស់ប្តូរការផ្តោតអារម្មណ៍ពីភ្នាក់ងារដែលអនុវត្តសកម្មភាពទៅអ្នកទទួលសកម្មភាព។",
    "explanationKhmer": "1. ** Zero Conditional**: (ប្រសិនបើ + បច្ចុប្បន្ន, បច្ចុប្បន្ន) - ការពិតវិទ្យាសាស្រ្ត ឬការពិតទូទៅ។",
    "summaryKhmer": "បង្កើតសំឡេងអកម្មដោយប្រើទម្រង់ \"to be\" + Past Participle ។ ប្រើវាដើម្បីផ្ដោតលើវត្ថុដែលទទួលសកម្មភាព ឬនៅពេលដែលតួអង្គមិនស្គាល់។"
  },
  {
    "id": "present-perfect",
    "title": "Present Perfect",
    "level": "B1+",
    "shortDesc": "Talk about experiences, changes, or past actions with present relevance using has/have + past participle.",
    "explanation": "The Present Perfect tense connects the past with the present. It is formed using \"have\" or \"has\" + the past participle of the verb (e.g. eaten, seen, walked). It is used for actions that happened at an unspecified time in the past, or actions that started in the past and continue into the present.",
    "examples": [
      {
        "english": "I have traveled to Tokyo twice.",
        "translation": "He viajado a Tokio dos veces (experience, time is not specified).",
        "translationKhmer": "ខ្ញុំបានធ្វើដំណើរទៅតូក្យូពីរដង។"
      },
      {
        "english": "She has lived here since 2018.",
        "translation": "Ella ha vivido aquí desde 2018 (action started in the past and continues now).",
        "translationKhmer": "នាង​បាន​រស់​នៅ​ទី​នេះ​តាំង​ពី​ឆ្នាំ ២០១៨។"
      },
      {
        "english": "We have already finished our dinner.",
        "translation": "Nosotros ya hemos terminado nuestra cena (past action with present relevance).",
        "translationKhmer": "យើងបានបញ្ចប់អាហារពេលល្ងាចរួចហើយ។"
      }
    ],
    "tips": [
      "Use \"since\" for a specific point in time (e.g. since 5 o'clock, since Monday) and \"for\" for a duration of time (e.g. for three hours, for ten years).",
      "Never use past time expressions like \"yesterday\", \"last week\", or \"in 2010\" with the Present Perfect. Use Past Simple instead.",
      "Check for signals like: already, yet, ever, never, just, so far."
    ],
    "commonMistakes": [
      {
        "incorrect": "I have seen that movie yesterday.",
        "correct": "I saw that movie yesterday.",
        "explanation": "Because \"yesterday\" is a specific past time, you must use the Past Simple rather than the Present Perfect."
      },
      {
        "incorrect": "She has lived here for 2015.",
        "correct": "She has lived here since 2015.",
        "explanation": "Use \"since\" for a starting point in time. Use \"for\" to represent durations like \"for five years\"."
      }
    ],
    "summary": "Form the Present Perfect with: [Have/Has] + [Past Participle]. Use it for experiences, actions that started in the past and continue now, or past actions that affect the present.",
    "practiceQuestions": [
      {
        "id": "pp-q1",
        "question": "Choose the correct form: \"They ______ never eaten sushi before.\"",
        "options": [
          "has",
          "have",
          "having"
        ],
        "correctAnswer": "have"
      },
      {
        "id": "pp-q2",
        "question": "Fill in the blank: \"He has been a teacher ______ ten years.\"",
        "options": [
          "since",
          "for",
          "ago"
        ],
        "correctAnswer": "for"
      },
      {
        "id": "pp-q3",
        "question": "Which sentence is grammatically correct?",
        "options": [
          "She has written three emails this morning.",
          "She has written three emails yesterday.",
          "She wrote three emails since Monday."
        ],
        "correctAnswer": "She has written three emails this morning."
      }
    ],
    "shortDescKhmer": "និយាយអំពីបទពិសោធន៍ ការផ្លាស់ប្តូរ ឬសកម្មភាពអតីតកាលជាមួយនឹងភាពពាក់ព័ន្ធបច្ចុប្បន្នដោយប្រើ has/have + past participle។",
    "explanationKhmer": "បច្ចុប្បន្ន Perfect Tense ភ្ជាប់អតីតកាលជាមួយបច្ចុប្បន្ន។ វា​ត្រូវ​បាន​បង្កើត​ឡើង​ដោយ​ប្រើ \"have\" ឬ \"has\" + ការ​ចូលរួម​ពី​អតីតកាល​នៃ​កិរិយាសព្ទ (ឧ. បរិភោគ, ឃើញ, ដើរ) ។ វា​ត្រូវ​បាន​ប្រើ​សម្រាប់​សកម្មភាព​ដែល​បាន​កើត​ឡើង​នៅ​ពេល​វេលា​ដែល​មិន​បាន​កំណត់​ក្នុង​អតីតកាល​ឬ​សកម្មភាព​ដែល​បាន​ចាប់​ផ្តើ​ម​នៅ​ក្នុង​អតីតកាល​និង​បន្ត​ទៅ​បច្ចុប្បន្ន​។",
    "summaryKhmer": "បង្កើតបច្ចុប្បន្នល្អឥតខ្ចោះជាមួយ៖ [មាន/មាន] + [ការចូលរួមអតីតកាល] ។ ប្រើវាសម្រាប់បទពិសោធន៍ សកម្មភាពដែលបានចាប់ផ្តើមកាលពីអតីតកាល និងបន្តឥឡូវនេះ ឬសកម្មភាពអតីតកាលដែលប៉ះពាល់ដល់បច្ចុប្បន្ន។"
  },
  {
    "id": "present-perfect-continuous",
    "title": "Present Perfect Continuous",
    "level": "B1+",
    "shortDesc": "Express actions that started in the past and are still continuing, or have recently finished with a clear result.",
    "explanation": "The Present Perfect Continuous tense emphasizes the duration or ongoing nature of an action. It is formed using \"have/has been\" + [Verb-ing]. Use it for activities that began in the past, are still happening now, or have recently stopped and have a noticeable connection to the present.",
    "examples": [
      {
        "english": "I have been studying English for two hours.",
        "translation": "He estado estudiando inglés por dos horas (and I am still studying).",
        "translationKhmer": "ខ្ញុំបានសិក្សាភាសាអង់គ្លេសរយៈពេលពីរម៉ោង។"
      },
      {
        "english": "It has been raining all day.",
        "translation": "Ha estado lloviendo todo el día (the ground is wet right now).",
        "translationKhmer": "វាមានភ្លៀងពេញមួយថ្ងៃ។"
      },
      {
        "english": "Why are you tired? I have been running.",
        "translation": "¿Por qué estás cansado? He estado corriendo (recent action with present result).",
        "translationKhmer": "ហេតុអ្វីបានជាអ្នកអស់កម្លាំង? ខ្ញុំបានរត់។"
      }
    ],
    "tips": [
      "Focus is on the process or duration, whereas Present Perfect Simple focus is on the result or completion (e.g. \"I have read 3 books\" vs \"I have been reading all day\").",
      "Like other continuous tenses, do not use stative verbs (e.g. say \"I have known him\", not \"I have been knowing him\")."
    ],
    "commonMistakes": [
      {
        "incorrect": "I have been knowing her for a long time.",
        "correct": "I have known her for a long time.",
        "explanation": "\"Know\" is a stative verb and cannot be used in the continuous form. Use Present Perfect Simple instead."
      },
      {
        "incorrect": "She has playing tennis since morning.",
        "correct": "She has been playing tennis since morning.",
        "explanation": "Always include the helping word \"been\" in the Present Perfect Continuous construction."
      }
    ],
    "summary": "Form Present Perfect Continuous with: [Have/Has] + [Been] + [Verb-ing]. Use it to focus on the duration of ongoing or recently completed actions.",
    "practiceQuestions": [
      {
        "id": "ppc-q1",
        "question": "Choose the correct form: \"We ______ been waiting for you for an hour!\"",
        "options": [
          "has",
          "have",
          "had"
        ],
        "correctAnswer": "have"
      },
      {
        "id": "ppc-q2",
        "question": "Identify the incorrect sentence:",
        "options": [
          "They have been playing games.",
          "She has been loving chocolate for years.",
          "I have been working on this report."
        ],
        "correctAnswer": "She has been loving chocolate for years."
      },
      {
        "id": "ppc-q3",
        "question": "Fill in the blank: \"He is sweaty because he ______ been cutting the grass.\"",
        "options": [
          "has",
          "is",
          "have"
        ],
        "correctAnswer": "has"
      }
    ],
    "shortDescKhmer": "សកម្មភាពបញ្ចេញមតិដែលបានចាប់ផ្តើមកាលពីអតីតកាល និងកំពុងបន្ត ឬថ្មីៗនេះបានបញ្ចប់ដោយលទ្ធផលច្បាស់លាស់។",
    "explanationKhmer": "បច្ចុប្បន្ន Perfect Continuous tense សង្កត់ធ្ងន់លើរយៈពេល ឬលក្ខណៈបន្តនៃសកម្មភាព។ វាត្រូវបានបង្កើតឡើងដោយប្រើ \"have / has been\" + [Verb-ing] ។ ប្រើវាសម្រាប់សកម្មភាពដែលបានចាប់ផ្តើមកាលពីអតីតកាល នៅតែកំពុងកើតឡើងឥឡូវនេះ ឬបានបញ្ឈប់ថ្មីៗនេះ និងមានទំនាក់ទំនងគួរឱ្យកត់សម្គាល់ជាមួយបច្ចុប្បន្ន។",
    "summaryKhmer": "ទម្រង់ Present Perfect Continuous ជាមួយ៖ [Have/Has] + [Been] + [Verb-ing]។ ប្រើវាដើម្បីផ្តោតលើរយៈពេលនៃសកម្មភាពដែលកំពុងបន្ត ឬដែលបានបញ្ចប់ថ្មីៗនេះ។"
  },
  {
    "id": "past-continuous",
    "title": "Past Continuous",
    "level": "B2",
    "shortDesc": "Describe actions that were in progress at a specific moment in the past, often interrupted by another action.",
    "explanation": "The Past Continuous describes an action that was going on or in progress at a specific time in the past. It is formed using \"was\" or \"were\" + [Verb-ing]. It is frequently used together with the Past Simple to show that a longer background action was interrupted by a shorter, sudden event.",
    "examples": [
      {
        "english": "I was sleeping when the phone rang.",
        "translation": "Yo estaba durmiendo cuando el teléfono sonó (sleeping is the background action, phone ringing is the interruption).",
        "translationKhmer": "ខ្ញុំ​កំពុង​ដេក​នៅ​ពេល​ទូរសព្ទ​រោទ៍។"
      },
      {
        "english": "They were studying at 8 PM yesterday.",
        "translation": "Ellos estaban estudiando a las 8 PM ayer (action in progress at a specific past time).",
        "translationKhmer": "ពួកគេរៀននៅម៉ោង ៨ យប់ម្សិលមិញ។"
      },
      {
        "english": "While she was cooking, he was washing dishes.",
        "translation": "Mientras ella estaba cocinando, él estaba lavando platos (parallel actions).",
        "translationKhmer": "ពេលនាងកំពុងធ្វើម្ហូប គាត់កំពុងលាងចាន។"
      }
    ],
    "tips": [
      "Use \"while\" before Past Continuous sentences (longer actions): \"While I was studying...\"",
      "Use \"when\" before Past Simple sentences (shorter events): \"...when you called.\"",
      "Subject matching: was (I, he, she, it), were (you, we, they)."
    ],
    "commonMistakes": [
      {
        "incorrect": "I was walk in the park when it started to rain.",
        "correct": "I was walking in the park when it started to rain.",
        "explanation": "Always add \"-ing\" to the main verb after was/were in the Past Continuous."
      },
      {
        "incorrect": "We was studying when she arrived.",
        "correct": "We were studying when she arrived.",
        "explanation": "The plural pronoun \"We\" requires the auxiliary verb \"were\"."
      }
    ],
    "summary": "Form Past Continuous with: [Was/Were] + [Verb-ing]. Use it for background actions, specific moments in progress, or parallel past events.",
    "practiceQuestions": [
      {
        "id": "pco-q1",
        "question": "Choose the correct verb: \"While they ______ playing football, it began to snow.\"",
        "options": [
          "was",
          "were",
          "did"
        ],
        "correctAnswer": "were"
      },
      {
        "id": "pco-q2",
        "question": "Fill in the blank: \"I ______ watching TV when you called me.\"",
        "options": [
          "was",
          "were",
          "am"
        ],
        "correctAnswer": "was"
      },
      {
        "id": "pco-q3",
        "question": "Select the correct sentence:",
        "options": [
          "What did you do at 9 PM yesterday?",
          "What were you doing at 9 PM yesterday?",
          "What was you doing at 9 PM yesterday?"
        ],
        "correctAnswer": "What were you doing at 9 PM yesterday?"
      }
    ],
    "shortDescKhmer": "ពិពណ៌នាអំពីសកម្មភាពដែលកំពុងដំណើរការនៅពេលជាក់លាក់មួយកាលពីអតីតកាល ដែលជារឿយៗត្រូវបានរំខានដោយសកម្មភាពផ្សេងទៀត។",
    "explanationKhmer": "Past Continuous ពិពណ៌នាអំពីសកម្មភាពដែលកំពុងបន្ត ឬកំពុងដំណើរការនៅពេលជាក់លាក់មួយកាលពីអតីតកាល។ វាត្រូវបានបង្កើតឡើងដោយប្រើ \"was\" ឬ \"were\" + [Verb-ing] ។ វាត្រូវបានគេប្រើជាញឹកញាប់រួមគ្នាជាមួយ Past Simple ដើម្បីបង្ហាញថាសកម្មភាពផ្ទៃខាងក្រោយយូរជាងនេះត្រូវបានរំខានដោយព្រឹត្តិការណ៍ភ្លាមៗខ្លីជាង។",
    "summaryKhmer": "ទម្រង់ Past Continuous ជាមួយ៖ [Was/Were] + [Verb-ing]។ ប្រើវាសម្រាប់សកម្មភាពផ្ទៃខាងក្រោយ គ្រាជាក់លាក់ដែលកំពុងដំណើរការ ឬព្រឹត្តិការណ៍អតីតកាលស្របគ្នា។"
  },
  {
    "id": "past-perfect",
    "title": "Past Perfect",
    "level": "B2",
    "shortDesc": "Clearly sequence two past events by expressing the action that happened before another past action using had + past participle.",
    "explanation": "The Past Perfect is the \"past of the past\". It is used to show which of two past actions happened first. It is formed using \"had\" + the past participle of the verb (e.g. had gone, had eaten). It is very helpful for storytelling and maintaining logical chronologies.",
    "examples": [
      {
        "english": "When I arrived at the station, the train had already left.",
        "translation": "Cuando llegué a la estación, el tren ya se había ido (the train left first, then I arrived).",
        "translationKhmer": "ពេល​មក​ដល់​ស្ថានីយ រថភ្លើង​បាន​ចេញ​ទៅ​ហើយ។"
      },
      {
        "english": "She had finished her homework before she went out to play.",
        "translation": "Ella había terminado su tarea antes de salir a jugar.",
        "translationKhmer": "នាងបានបញ្ចប់កិច្ចការផ្ទះមុនពេលនាងចេញទៅលេង។"
      },
      {
        "english": "I recognized him because I had met him before.",
        "translation": "Lo reconozí porque lo había conocido antes.",
        "translationKhmer": "ខ្ញុំ​ស្គាល់​គាត់​ព្រោះ​ខ្ញុំ​ធ្លាប់​ជួប​គាត់​ពីមុន​មក។"
      }
    ],
    "tips": [
      "Use Past Perfect for the action that happened first, and Past Simple for the action that happened second.",
      "Check for keywords: before, after, already, by the time, as soon as.",
      "If the order of events is clear from context, you can sometimes just use Past Simple, but Past Perfect adds absolute clarity."
    ],
    "commonMistakes": [
      {
        "incorrect": "The movie already started when we arrived.",
        "correct": "The movie had already started when we arrived.",
        "explanation": "Since the movie started before we arrived, we must use the Past Perfect for the earlier action."
      },
      {
        "incorrect": "I had went to bed before he called.",
        "correct": "I had gone to bed before he called.",
        "explanation": "Always use the past participle (\"gone\") with the auxiliary \"had\", not the past simple form (\"went\")."
      }
    ],
    "summary": "Form the Past Perfect with: [Had] + [Past Participle]. Use it for the earlier of two past actions.",
    "practiceQuestions": [
      {
        "id": "ppf-q1",
        "question": "Choose the correct verb form: \"By the time the police arrived, the thief ______ escaped.\"",
        "options": [
          "has",
          "had",
          "was"
        ],
        "correctAnswer": "had"
      },
      {
        "id": "ppf-q2",
        "question": "Complete the sentence: \"After she ______ dinner, she washed the dishes.\"",
        "options": [
          "had eaten",
          "eats",
          "has eaten"
        ],
        "correctAnswer": "had eaten"
      },
      {
        "id": "ppf-q3",
        "question": "Choose the correct past relationship: \"I did not have any money because I ______ my wallet.\"",
        "options": [
          "lose",
          "had lost",
          "was losing"
        ],
        "correctAnswer": "had lost"
      }
    ],
    "shortDescKhmer": "តម្រៀប​ព្រឹត្តិការណ៍​អតីតកាល​ពីរ​យ៉ាង​ច្បាស់​ដោយ​ការ​បង្ហាញ​សកម្មភាព​ដែល​បាន​កើត​ឡើង​មុន​សកម្មភាព​អតីតកាល​ផ្សេង​ទៀត​ដោយ​ប្រើ​ had + past participle។",
    "explanationKhmer": "អតីតកាលល្អឥតខ្ចោះគឺជា \"អតីតកាលនៃអតីតកាល\" ។ វា​ត្រូវ​បាន​ប្រើ​ដើម្បី​បង្ហាញ​ពី​សកម្មភាព​អតីតកាល​ពីរ​ណា​ដែល​បាន​កើត​ឡើង​មុន​គេ។ វា​ត្រូវ​បាន​បង្កើត​ឡើង​ដោយ​ប្រើ \"had\" + past participle នៃ​កិរិយាសព្ទ (ឧ. បាន​ទៅ, បាន​បរិភោគ) ។ វាមានប្រយោជន៍ខ្លាំងណាស់សម្រាប់ការនិទានរឿង និងរក្សាកាលប្បវត្តិឡូជីខល។",
    "summaryKhmer": "បង្កើតអតីតកាលល្អឥតខ្ចោះជាមួយ៖ [មាន] + [ការចូលរួមអតីតកាល] ។ ប្រើវាសម្រាប់សកម្មភាពពីមុនពីរមុន។"
  },
  {
    "id": "past-perfect-continuous",
    "title": "Past Perfect Continuous",
    "level": "B2",
    "shortDesc": "Show the duration of an ongoing past action up to the point when another past action occurred.",
    "explanation": "The Past Perfect Continuous tense shows that an action started in the past, continued for a duration, and was still in progress or had just ended when another past event took place. It is formed using \"had been\" + [Verb-ing]. It emphasizes duration rather than completion.",
    "examples": [
      {
        "english": "He had been working for ten hours before he finally went to sleep.",
        "translation": "Él había estado trabajando durante diez horas antes de finalmente irse a dormir.",
        "translationKhmer": "គាត់បានធ្វើការអស់រយៈពេលដប់ម៉ោង មុនពេលគាត់ចូលគេង។"
      },
      {
        "english": "The road was wet because it had been raining.",
        "translation": "La carretera estaba mojada porque había estado lloviendo.",
        "translationKhmer": "ផ្លូវ​នេះ​សើម​ព្រោះ​ភ្លៀង​ធ្លាក់។"
      },
      {
        "english": "We had been playing tennis for two hours when the storm broke.",
        "translation": "Habíamos estado jugando al tenis durante dos horas cuando estalló la tormenta.",
        "translationKhmer": "យើង​បាន​លេង​កីឡា​វាយ​កូន​បាល់​អស់​ពីរ​ម៉ោង​នៅ​ពេល​ដែល​ខ្���ល់​ព្យុះ​បក់​បោក។"
      }
    ],
    "tips": [
      "Similar to Present Perfect Continuous, but all actions and reference points are completely in the past.",
      "Avoid stative verbs. Say \"had owned\" rather than \"had been owning\"."
    ],
    "commonMistakes": [
      {
        "incorrect": "They had been knowing each other for years when they got married.",
        "correct": "They had known each other for years when they got married.",
        "explanation": "Use the Past Perfect Simple instead of the continuous form because \"know\" is a stative verb."
      },
      {
        "incorrect": "I was tired because I had working hard all day.",
        "correct": "I was tired because I had been working hard all day.",
        "explanation": "\"Had working\" is incorrect. You must write \"had been working\" to form the Past Perfect Continuous."
      }
    ],
    "summary": "Form Past Perfect Continuous with: [Had] + [Been] + [Verb-ing]. Use it to describe the duration of a past action leading up to another past point.",
    "practiceQuestions": [
      {
        "id": "ppfc-q1",
        "question": "Choose the correct form: \"She was out of breath because she ______ running.\"",
        "options": [
          "had",
          "had been",
          "was"
        ],
        "correctAnswer": "had been"
      },
      {
        "id": "ppfc-q2",
        "question": "Complete the sentence: \"We ______ waiting for thirty minutes when the bus arrived.\"",
        "options": [
          "were",
          "had been",
          "have been"
        ],
        "correctAnswer": "had been"
      },
      {
        "id": "ppfc-q3",
        "question": "Fill in the blank: \"He ______ working at the company for five years before he got promoted.\"",
        "options": [
          "has been",
          "had been",
          "was"
        ],
        "correctAnswer": "had been"
      }
    ],
    "shortDescKhmer": "បង្ហាញរយៈពេលនៃសកម្មភាពអតីតកាលដែលកំពុងបន្តរហូតដល់ចំណុចនៅពេលដែលសកម្មភាពអតីតកាលមួយផ្សេងទៀតបានកើតឡើង។",
    "explanationKhmer": "Past Perfect Continuous tense បង្ហាញ​ថា​សកម្មភាព​ដែល​បាន​ចាប់​ផ្តើម​ពី​អតីតកាល​បាន​បន្ត​ក្នុង​រយៈពេល​មួយ ហើយ​នៅ​តែ​កំពុង​ដំណើរការ​ឬ​ទើប​តែ​បាន​បញ្ចប់​នៅ​ពេល​ដែល​ព្រឹត្តិការណ៍​អតីតកាល​មួយ​ទៀត​បាន​កើត​ឡើង។ វាត្រូវបានបង្កើតឡើងដោយប្រើ \"ធ្លាប់\" + [កិរិយាសព្ទ-ing] ។ វាសង្កត់ធ្ងន់លើរយៈពេលជាជាងការបញ្ចប់។",
    "summaryKhmer": "Form Past Perfect Continuous with: [Had] + [Been] + [Verb-ing] ។ ប្រើវាដើម្បីពិពណ៌នាអំពីរយៈពេលនៃសកម្មភាពអតីតកាលដែលនាំទៅដល់ចំណុចអតីតកាលមួយផ្សេងទៀត។"
  },
  {
    "id": "future-continuous",
    "title": "Future Continuous",
    "level": "C1",
    "shortDesc": "Describe actions that will be in progress at a specific time in the future.",
    "explanation": "The Future Continuous describes an action that will be in progress or happening at a specific time in the future. It is formed using \"will be\" + [Verb-ing]. Use it to talk about ongoing events in the future or to make plans politely.",
    "examples": [
      {
        "english": "This time tomorrow, I will be flying to London.",
        "translation": "A esta hora mañana, estaré volando a Londres.",
        "translationKhmer": "ស្អែកនេះ ខ្ញុំនឹងហោះទៅទីក្រុងឡុងដ៍។"
      },
      {
        "english": "At noon, they will be having lunch.",
        "translation": "Al mediodía, ellos estarán almorzando.",
        "translationKhmer": "នៅពេលថ្ងៃត្រង់ពួកគេនឹងទទួលទានអាហារថ្ងៃត្រង់។"
      },
      {
        "english": "Good luck on the test! I will be thinking of you.",
        "translation": "¡Buena suerte en el examen! Estaré pensando en ti.",
        "translationKhmer": "សូមសំណាងល្អក្នុងការប្រលង! ខ្ញុំនឹងគិតពីអ្នក។"
      }
    ],
    "tips": [
      "Compare Future Simple vs Future Continuous: \"I will eat dinner at 8\" (I start at 8) vs \"I will be eating dinner at 8\" (dinner is already in progress at 8).",
      "The negative form is \"will not be / won't be\" + [Verb-ing]."
    ],
    "commonMistakes": [
      {
        "incorrect": "I will playing computer games this evening.",
        "correct": "I will be playing computer games this evening.",
        "explanation": "Do not forget the helping word \"be\" after \"will\" in Future Continuous constructions."
      },
      {
        "incorrect": "He will be knowing the answer tomorrow.",
        "correct": "He will know the answer tomorrow.",
        "explanation": "Do not use stative verbs like \"know\" in the continuous future. Use Future Simple instead."
      }
    ],
    "summary": "Form Future Continuous with: [Will Be] + [Verb-ing]. Use it to describe events that will be in progress at a specific point in the future.",
    "practiceQuestions": [
      {
        "id": "fc-q1",
        "question": "Choose the correct form: \"At 10 PM tonight, she ______ sleeping.\"",
        "options": [
          "will",
          "will be",
          "is"
        ],
        "correctAnswer": "will be"
      },
      {
        "id": "fc-q2",
        "question": "Fill in the blank: \"They ______ be traveling next week.\"",
        "options": [
          "won't",
          "not",
          "don't"
        ],
        "correctAnswer": "won't"
      },
      {
        "id": "fc-q3",
        "question": "Choose the correct future continuous sentence:",
        "options": [
          "I will be studying when you arrive.",
          "I will be study when you arrive.",
          "I am studying when you arrive."
        ],
        "correctAnswer": "I will be studying when you arrive."
      }
    ],
    "shortDescKhmer": "ពិពណ៌នាអំពីសកម្មភាពដែលនឹងដំណើរការនៅពេលជាក់លាក់ណាមួយនាពេលអនាគត។",
    "explanationKhmer": "The Future Continuous ពិពណ៌នាអំពីសកម្មភាពដែលនឹងកំពុងដំណើរការ ឬកើតឡើងនៅពេលជាក់លាក់ណាមួយនាពេលអនាគត។ វាត្រូវបានបង្កើតឡើងដោយប្រើ \"នឹង\" + [កិរិយាសព្ទ-ing] ។ ប្រើវាដើម្បីនិយាយអំពីព្រឹត្តិការណ៍ដែលកំពុងបន្តនាពេលអនាគត ឬរៀបចំផែនការប្រកបដោយសុជីវធម៌។",
    "summaryKhmer": "Form Future Continuous with: [Will Be] + [Verb-ing]។ ប្រើវាដើម្បីពិពណ៌នាអំពីព្រឹត្តិការណ៍ដែលនឹងដំណើរការនៅចំណុចជាក់លាក់មួយនាពេលអនាគត។"
  },
  {
    "id": "future-perfect",
    "title": "Future Perfect",
    "level": "C1",
    "shortDesc": "Talk about actions that will be completed before a certain point in the future using will have + past participle.",
    "explanation": "The Future Perfect tense describes an action that will be completed or finished before a specific point in the future. It is formed using \"will have\" + the past participle of the verb (e.g. will have finished, will have arrived). It is useful for deadlines and forward projections.",
    "examples": [
      {
        "english": "By next year, I will have graduated from university.",
        "translation": "Para el próximo año, me habré graduado de la universidad.",
        "translationKhmer": "នៅ​ឆ្នាំ​ក្រោយ​នេះ ខ្ញុំ​នឹង​បាន​បញ្ចប់​ការ​សិក្សា​ពី​សកលវិទ្យាល័យ។"
      },
      {
        "english": "She will have written the report by Friday afternoon.",
        "translation": "Ella habrá escrito el informe para el viernes por la tarde.",
        "translationKhmer": "នាងនឹងសរសេររបាយការណ៍នេះនៅរសៀលថ្ងៃសុក្រ។"
      },
      {
        "english": "Will you have eaten dinner by 8 PM?",
        "translation": "¿Habrás cenado para las 8 PM?",
        "translationKhmer": "តើអ្នកនឹងញ៉ាំអាហារពេលល្ងាចនៅម៉ោង 8 យប់ទេ?"
      }
    ],
    "tips": [
      "This tense is almost always used with time expressions starting with \"by\" (by then, by next week, by 2030) or \"by the time\".",
      "The negative form is \"will not have / won't have\" + past participle."
    ],
    "commonMistakes": [
      {
        "incorrect": "By tomorrow, they will finished the project.",
        "correct": "By tomorrow, they will have finished the project.",
        "explanation": "Always include the auxiliary \"have\" in the Future Perfect structure."
      },
      {
        "incorrect": "She will has completed the course by next week.",
        "correct": "She will have completed the course by next week.",
        "explanation": "Even for he/she/it, use \"have\" after the modal \"will\" (never use \"has\" after will)."
      }
    ],
    "summary": "Form Future Perfect with: [Will Have] + [Past Participle]. Use it to look back from a point in the future and show completion.",
    "practiceQuestions": [
      {
        "id": "fp-q1",
        "question": "Choose the correct verb: \"By 2030, scientists ______ found a cure.\"",
        "options": [
          "will have",
          "will has",
          "have"
        ],
        "correctAnswer": "will have"
      },
      {
        "id": "fp-q2",
        "question": "Complete the sentence: \"By the time you arrive, we ______ cooked dinner.\"",
        "options": [
          "will have",
          "will be",
          "has"
        ],
        "correctAnswer": "will have"
      },
      {
        "id": "fp-q3",
        "question": "Identify the correct question:",
        "options": [
          "Will you have arrived by noon?",
          "Will you arrived by noon?",
          "Have you arrived by noon?"
        ],
        "correctAnswer": "Will you have arrived by noon?"
      }
    ],
    "shortDescKhmer": "និយាយអំពីសកម្មភាពដែលនឹងត្រូវបានបញ្ចប់មុនពេលចំណុចជាក់លាក់មួយនាពេលអនាគតដោយប្រើនឹងមាន + ការចូលរួមពីអតីតកាល។",
    "explanationKhmer": "Future Perfect tense ពិពណ៌នាអំពីសកម្មភាពដែលនឹងត្រូវបញ្ចប់ ឬបញ្ចប់មុនចំនុចជាក់លាក់មួយនាពេលអនាគត។ វា​ត្រូវ​បាន​បង្កើត​ឡើង​ដោយ​ប្រើ \"នឹង​មាន\" + ការ​ចូលរួម​អតីតកាល​នៃ​កិរិយាសព្ទ (ឧ. នឹង​បាន​បញ្ចប់, នឹង​បាន​មក​ដល់). វាមានប្រយោជន៍សម្រាប់ពេលវេលាកំណត់ និងការព្យាករណ៍ទៅមុខ។",
    "summaryKhmer": "Form Future Perfect ជាមួយ៖ [Will Have] + [Past Participle]។ ប្រើវាដើម្បីមើលទៅក្រោយពីចំណុចមួយនាពេលអនាគត និងបង្ហាញការបញ្ចប់។"
  },
  {
    "id": "future-perfect-continuous",
    "title": "Future Perfect Continuous",
    "level": "C1",
    "shortDesc": "Express the duration of an ongoing action up to a specific time in the future.",
    "explanation": "The Future Perfect Continuous tense describes an ongoing action that will continue up to a specific point in the future, highlighting the duration of that activity. It is formed using \"will have been\" + [Verb-ing].",
    "examples": [
      {
        "english": "By next year, I will have been living in New York for five years.",
        "translation": "Para el próximo año, habré estado viviendo en Nueva York durante cinco años.",
        "translationKhmer": "នៅ​ឆ្នាំ​ក្រោយ ខ្ញុំ​នឹង​ទៅ​រស់​នៅ​ទីក្រុង​ញូវយ៉ក​រយៈពេល​ប្រាំ​ឆ្នាំ។"
      },
      {
        "english": "In November, they will have been working together for a decade.",
        "translation": "En noviembre, habrán estado trabajando juntos durante una década.",
        "translationKhmer": "នៅក្នុងខែវិច្ឆិកា ពួកគេនឹងធ្វើការជាមួយគ្នាអស់មួយទសវត្សរ៍។"
      },
      {
        "english": "By midnight, she will have been studying for eight hours.",
        "translation": "Para la medianoche, ella habrá estado estudiando durante ocho horas.",
        "translationKhmer": "ដល់ពាក���កណ្តាលអធ្រាត្រ នាងនឹងបានសិក្សារយៈពេលប្រាំបីម៉ោង។"
      }
    ],
    "tips": [
      "Focus is strictly on the ongoing duration up to a specific future milestone.",
      "Always remember: \"will have been\" is constant for all subject pronouns (no changes)."
    ],
    "commonMistakes": [
      {
        "incorrect": "By next week, she will has been working here for a month.",
        "correct": "By next week, she will have been working here for a month.",
        "explanation": "Do not use \"has\" after \"will\". The correct form is \"will have been\"."
      },
      {
        "incorrect": "By next year, they will have been knowing each other for ten years.",
        "correct": "By next year, they will have known each other for ten years.",
        "explanation": "Since \"know\" is a stative verb, you must use the Future Perfect Simple instead of the continuous form."
      }
    ],
    "summary": "Form Future Perfect Continuous with: [Will Have Been] + [Verb-ing]. Use it to look forward and show how long an action will have lasted.",
    "practiceQuestions": [
      {
        "id": "fpc-q1",
        "question": "Choose the correct form: \"By midnight, we will ______ studying for six hours.\"",
        "options": [
          "have been",
          "has been",
          "be"
        ],
        "correctAnswer": "have been"
      },
      {
        "id": "fpc-q2",
        "question": "Complete the sentence: \"Next month, she will have been ______ at this school for two years.\"",
        "options": [
          "teaching",
          "taught",
          "teach"
        ],
        "correctAnswer": "teaching"
      },
      {
        "id": "fpc-q3",
        "question": "Identify the correct sentence:",
        "options": [
          "In June, I will have been working here for 5 years.",
          "In June, I will been working here for 5 years.",
          "In June, I will have working here for 5 years."
        ],
        "correctAnswer": "In June, I will have been working here for 5 years."
      }
    ],
    "shortDescKhmer": "បង្ហាញពីរយៈពេលនៃសកម្មភាពដែលកំពុងបន្តរហូតដល់ពេលជាក់លាក់ណាមួយនាពេលអនាគត។",
    "explanationKhmer": "Future Perfect Continuous tense ពិពណ៌នាអំពីសកម្មភាពបន្តដែលនឹងបន្តរហូតដល់ចំណុចជាក់លាក់មួយនាពេលអនាគត ដោយបញ្ជាក់ពីរយៈពេលនៃសកម្មភាពនោះ។ វាត្រូវបានបង្កើតឡើងដោយប្រើ \"នឹងបាន\" + [កិរិយាសព្ទ-ing] ។",
    "summaryKhmer": "Form Future Perfect Continuous with: [Will Have Been] + [Verb-ing] ។ ប្រើវាដើម្បីទន្ទឹងរង់ចាំ និងបង្ហាញពីរយៈពេលដែលសកម្មភាពនឹងមានរយៈពេល។"
  }
];
