import { GrammarLesson } from '@/types';

export const grammarLessons: GrammarLesson[] = [
  // ==========================================
  // A1 LEVEL LESSONS (7 Lessons)
  // ==========================================
  {
    id: 'alphabet',
    title: 'English Alphabet & Sounds',
    level: 'A1',
    shortDesc: 'Master the 26 letters, basic phonics, and pronunciation rules.',
    shortDescKhmer: 'រៀនអក្សរទាំង ២៦ ការបញ្ចេញសំឡេង និងច្បាប់ប្រកបពាក្យមូលដ្ឋាន។',
    explanation: 'The English alphabet consists of 26 letters: 5 vowels (A, E, I, O, U) and 21 consonants. Understanding alphabet pronunciation and phonetic sounds is crucial for spelling and pronunciation.',
    explanationKhmer: 'អក្សរក្រមភាសាអង់គ្លេសមាន ២៦ តួ៖ ស្រៈ ៥ តួ (A, E, I, O, U) និងព្យញ្ជនៈ ២១ តួ។ ការយល់ដឹងអំពីការបញ្ចេញសំឡេងអក្សរក្រម និងសំឡេងសូរស័ព្ទ គឺមានសារៈសំខាន់ខ្លាំងណាស់សម្រាប់ការប្រកប និងការបញ្ចេញសំឡេង។',
    formula: 'A, B, C... (26 Letters) | Vowels: A, E, I, O, U | Consonants: B, C, D...',
    formulaKhmer: 'តួអក្សរ ២៦ | ស្រៈ: A, E, I, O, U | ព្យញ្ជនៈ: B, C, D, F, G...',
    whenToUse: [
      'Use letter names when spelling out names or codes.',
      'Use phonetic sounds (phonics) to blend letters and read new words.'
    ],
    whenToUseKhmer: [
      'ប្រើប្រាស់ឈ្មោះអក្សរនៅពេលប្រកបឈ្មោះ ឬកូដផ្សេងៗ។',
      'ប្រើប្រាស់សំឡេងសូរស័ព្ទ (Phonics) ដើម្បីផ្សំអក្សរ និងអានពាក្យថ្មីៗ។'
    ],
    positiveExamples: [
      'A is for Apple (/ˈæp.əl/)',
      'B is for Book (/bʊk/)',
      'C is for Cat (/kæt/)'
    ],
    positiveExamplesKhmer: [
      'A សម្រាប់ពាក្យ Apple (ផ្លែប៉ោម)',
      'B សម្រាប់ពាក្យ Book (សៀវភៅ)',
      'C សម្រាប់ពាក្យ Cat (ឆ្មា)'
    ],
    negativeExamples: [
      'Vowels do not always have a single sound (e.g., "cat" /æ/ vs. "car" /ɑː/).',
      'Consonants like "C" do not only sound hard (e.g., "cat" /k/ vs. "city" /s/).'
    ],
    negativeExamplesKhmer: [
      'ស្រៈមិនមែនតែងតែមានសំឡេងតែមួយនោះទេ (ឧទាហរណ៍៖ "cat" សំឡេង /æ/ និង "car" សំឡេង /ɑː/)។',
      'ព្យញ្ជនៈដូចជា "C" មិនមែនមានតែសំឡេងរឹងនោះទេ (ឧទាហរណ៍៖ "cat" សំឡេង /k/ និង "city" សំឡេង /s/)។'
    ],
    questionForm: 'How do you spell your name? | Can you repeat that letter?',
    questionFormKhmer: 'តើអ្នកប្រកបឈ្មោះរបស់អ្នកយ៉ាងដូចម្តេច? | តើអ្នកអាចអានតួអក្សរនោះឡើងវិញបានទេ?',
    visualTimeline: '[Letter Sound] --> [Word Blend] --> [Sentence Pronunciation]',
    visualTimelineKhmer: '[សំឡេងអក្សរ] --> [ការផ្សំពាក្យ] --> [ការបញ្ចេញសំឡេងប្រយោគ]',
    examples: [
      { english: 'A - B - C - D - E - F - G', translation: 'Alphabet names practice.', translationKhmer: 'ការអនុវត្តឈ្មោះអក្សរក្រម។' }
    ],
    tips: [
      'Practice the distinction between "B" (/biː/) and "V" (/viː/).',
      'Vowels are the heart of syllables; every English word must contain a vowel sound.'
    ],
    commonMistakes: [
      { incorrect: 'Pronouncing "recipe" as /res-aip/.', correct: 'Pronouncing "recipe" as /ˈres.ə.pi/.', explanation: 'Many English words are not pronounced exactly as they are written due to irregular phonetics.' }
    ],
    summary: 'The English alphabet has 26 letters. Vowels (a, e, i, o, u) can make short or long sounds. Consonants have fixed or conditional sounds.',
    summaryKhmer: 'អក្សរក្រមអង់គ្លេសមាន ២៦ តួ។ ស្រៈ (a, e, i, o, u) អាចបង្កើតសំឡេងខ្លី ឬវែង។ ព្យញ្ជនៈមានសំឡេងថេរ ឬសំឡេងតាមលក្ខខណ្ឌ។',
    practiceQuestions: [
      { id: 'alp-q1', question: 'How many vowels are in the English alphabet?', options: ['3', '5', '7'], correctAnswer: '5' },
      { id: 'alp-q2', question: 'Which of the following is a consonant?', options: ['A', 'E', 'F'], correctAnswer: 'F' }
    ]
  },
  {
    id: 'pronouns',
    title: 'Subject and Object Pronouns',
    level: 'A1',
    shortDesc: 'Learn how to substitute nouns with pronouns (I, you, he, she, it, me, him...).',
    shortDescKhmer: 'រៀនពីរបៀបជំនួសនាមដោយសព្វនាម (I, you, he, she, it, me, him...)។',
    explanation: 'Pronouns are words used to replace nouns to avoid repetition. Subject pronouns perform the action in a sentence (I, you, he, she, it, we, they), while object pronouns receive the action (me, you, him, her, it, us, them).',
    explanationKhmer: 'សព្វនាមគឺជាពាក្យដែលប្រើដើម្បីជំនួសនាម ដើម្បីចៀសវាងការនិយាយដដែលៗ។ សព្វនាមប្រធាន (Subject Pronouns) ធ្វើសកម្មភាពក្នុងប្រយោគ (I, you, he, she, it, we, they) រីឯសព្វនាមកម្មបទ (Object Pronouns) ទទួលរងសកម្មភាព (me, you, him, her, it, us, them)។',
    formula: 'Subject Pronoun + Verb | Subject + Verb + Object Pronoun',
    formulaKhmer: 'សព្វនាមប្រធាន + កិរិយាសព្ទ | ប្រធាន + កិរិយាសព្ទ + សព្វនាមកម្មបទ',
    whenToUse: [
      'Use subject pronouns at the beginning of a sentence before the main verb.',
      'Use object pronouns after a verb or after a preposition (to, with, for).'
    ],
    whenToUseKhmer: [
      'ប្រើសព្វនាមប្រធាននៅដើមប្រយោគ មុនកិរិយាសព្ទចម្បង។',
      'ប្រើសព្វនាមកម្មបទបន្ទាប់ពីកិរិយាសព្ទ ឬបន្ទាប់ពីធ្នាក់ (to, with, for)។'
    ],
    positiveExamples: [
      'She loves her job.',
      'They invited us to the party.'
    ],
    positiveExamplesKhmer: [
      'នាងស្រឡាញ់ការងាររបស់នាង។',
      'ពួកគេបានអញ្ជើញពួកយើងទៅកម្មវិធីជប់លៀង។'
    ],
    negativeExamples: [
      'Me do not want to go. (Incorrect)',
      'She gave he the book. (Incorrect)'
    ],
    negativeExamplesKhmer: [
      'Me do not want to go. (ខុស - ត្រូវប្រើ I)',
      'She gave he the book. (ខុស - ត្រូវប្រើ him)'
    ],
    questionForm: 'Did she call you? | Who wants to meet them?',
    questionFormKhmer: 'តើនាងបានទូរស័ព្ទមកអ្នកទេ? | តើនរណាខ្លះចង់ជួបពួកគេ?',
    visualTimeline: '[Subject Pronoun] --> (Verb Action) --> [Object Pronoun]',
    visualTimelineKhmer: '[សព្វនាមប្រធាន] --> (សកម្មភាពកិរិយាសព្ទ) --> [សព្វនាមកម្មបទ]',
    examples: [
      { english: 'He saw her at the market.', translation: 'He (subject pronoun) saw her (object pronoun).', translationKhmer: 'គាត់បានឃើញនាងនៅផ្សារ។' }
    ],
    tips: [
      'Always use a subject pronoun before the verb: say "She is happy," not "Her is happy."',
      '"It" is used for animals, inanimate objects, and abstract concepts.'
    ],
    commonMistakes: [
      { incorrect: 'John and me went to the store.', correct: 'John and I went to the store.', explanation: 'When sharing a subject, use "I" instead of "me" because it represents the subject of the sentence.' }
    ],
    summary: 'Subject pronouns (I, you, he, she, it, we, they) do the action. Object pronouns (me, you, him, her, it, us, them) receive the action.',
    summaryKhmer: 'សព្វនាមប្រធាន (I, you, he, she, it, we, they) ធ្វើសកម្មភាព។ សព្វនាមកម្មបទ (me, you, him, her, it, us, them) ទទួលរងសកម្មភាព។',
    practiceQuestions: [
      { id: 'pro-q1', question: 'Fill in the blank: "______ am studying cybersecurity."', options: ['Me', 'I', 'Him'], correctAnswer: 'I' },
      { id: 'pro-q2', question: 'Choose the correct object pronoun: "John bought a gift for ______ (Mary)."', options: ['she', 'her', 'hers'], correctAnswer: 'her' }
    ]
  },
  {
    id: 'be-verb',
    title: 'The "Be" Verb (Am, Is, Are)',
    level: 'A1',
    shortDesc: 'Learn the forms and uses of the most fundamental verb in English.',
    shortDescKhmer: 'រៀនទម្រង់ និងការប្រើប្រាស់កិរិយាសព្ទមូលដ្ឋានបំផុតជាភាសាអង់គ្លេស៖ am, is, are ។',
    explanation: 'The verb "to be" describes identity, qualities, locations, and temporary states. Its present tense forms are "am", "is", and "are" depending on the subject.',
    explanationKhmer: 'កិរិយាស័ព្ទ "to be" ពិពណ៌នាអំពីអត្តសញ្ញាណ គុណភាព ទីតាំង និងស្ថានភាពបណ្តោះអាសន្ន។ ទម្រង់បច្ចុប្បន្នរបស់វាគឺ "am", "is", និង "are" អាស្រ័យលើប្រធានបទ។',
    formula: 'I am | He/She/It is | We/You/They are',
    formulaKhmer: 'I + am | He/She/It + is | We/You/They + are',
    whenToUse: [
      'To state your name, job, or nationality.',
      'To describe locations or physical states (hungry, cold).'
    ],
    whenToUseKhmer: [
      'ដើម្បីបញ្ជាក់ឈ្មោះ ការងារ ឬសញ្ជាតិរបស់អ្នក។',
      'ដើម្បីពិពណ៌នាអំពីទីតាំង ឬស្ថានភាពរាងកាយ (ឃ្លាន, ត្រជាក់)។'
    ],
    positiveExamples: [
      'I am at home.',
      'She is a smart developer.'
    ],
    positiveExamplesKhmer: [
      'ខ្ញុំនៅផ្ទះ។',
      'នាងគឺជាអ្នកអភិវឌ្ឍន៍ដ៏ឆ្លាតវៃម្នាក់។'
    ],
    negativeExamples: [
      'I am not tired.',
      'They are not ready.'
    ],
    negativeExamplesKhmer: [
      'ខ្ញុំមិនហត់នឿយទេ។',
      'ពួកគេមិនទាន់រួចរាល់ទេ។'
    ],
    questionForm: 'Am I late? | Is he your friend? | Are they here?',
    questionFormKhmer: 'តើខ្ញុំមកយឺតទេ? | តើគាត់ជាមិត្តរបស់អ្នកមែនទេ? | តើពួកគេនៅទីនេះទេ?',
    visualTimeline: '[Past State] <--> [Present State: am / is / are] <--> [Future State]',
    visualTimelineKhmer: '[ស្ថានភាពអតីតកាល] <--> [ស្ថានភាពបច្ចុប្បន្ន៖ am / is / are] <--> [ស្ថានភាពអនាគតកាល]',
    examples: [
      { english: 'We are students.', translation: 'We (plural subject) are (plural form of to be).', translationKhmer: 'ពួកយើងគឺជាសិស្ស។' }
    ],
    tips: [
      'Use contractions in informal speaking: I\'m, he\'s, she\'s, you\'re, they\'re.',
      'To make questions, simply swap the subject and the verb: "She is a doctor" -> "Is she a doctor?"'
    ],
    commonMistakes: [
      { incorrect: 'They is very friendly.', correct: 'They are very friendly.', explanation: '"They" is plural, so it must pair with "are".' }
    ],
    summary: 'The verb "to be" has three present forms: am (for I), is (for singular subjects), and are (for plural subjects).',
    summaryKhmer: 'កិរិយាស័ព្ទ "to be" មានទម្រង់បច្ចុប្បន្នចំនួនបី៖ am (សម្រាប់ I), is (សម្រាប់ឯកវចនៈ), និង are (សម្រាប់ពហុវចនៈ)។',
    practiceQuestions: [
      { id: 'bev-q1', question: 'Which form of the verb "to be" pairs with "We"?', options: ['am', 'is', 'are'], correctAnswer: 'are' },
      { id: 'bev-q2', question: 'Fill in the blank: "She ______ a cybersecurity student."', options: ['am', 'is', 'are'], correctAnswer: 'is' }
    ]
  },
  {
    id: 'articles',
    title: 'Articles (A, An, The)',
    level: 'A1',
    shortDesc: 'Understand definite versus indefinite articles.',
    shortDescKhmer: 'ស្វែងយល់ពីរបៀបប្រើប្រាស់គុណនាមចង្អុល definite (the) និង indefinite (a/an)។',
    explanation: 'Articles define whether a noun is specific (the definite article "the") or general (indefinite articles "a" and "an"). Use "a" before consonant sounds and "an" before vowel sounds.',
    explanationKhmer: 'អត្ថបទ (Articles) កំណត់ថាតើនាមជាក់លាក់ (គុណនាមចង្អុលជាក់លាក់ "the") ឬទូទៅ (គុណនាមចង្អុលមិនជាក់លាក់ "a" និង "an")។ ប្រើ "a" មុនសំឡេងព្យញ្ជនៈ និង "an" មុនសំឡេងស្រៈ។',
    formula: 'a + Consonant Sound | an + Vowel Sound | the + Specific Noun',
    formulaKhmer: 'a + សំឡេងព្យញ្ជនៈ | an + សំឡេងស្រៈ | the + នាមជាក់លាក់',
    whenToUse: [
      'Use "a/an" when introducing a singular countable noun for the first time.',
      'Use "the" when the listener already knows which specific noun you mean.'
    ],
    whenToUseKhmer: [
      'ប្រើ "a/an" នៅពេលណែនាំនាមរាប់បានឯកវចនៈជាលើកដំបូង។',
      'ប្រើ "the" នៅពេលអ្នកស្តាប់ដឹងរួចហើយថានាមជាក់លាក់មួយណាដែលអ្នកកំពុងចង់និយាយ។'
    ],
    positiveExamples: [
      'I saw a movie. The movie was fantastic.',
      'She ordered an orange juice.'
    ],
    positiveExamplesKhmer: [
      'ខ្ញុំបានមើលកុនមួយ។ កុននោះល្អមើលណាស់។',
      'នាងបានកុម្ម៉ង់ទឹកក្រូចមួយកែវ។'
    ],
    negativeExamples: [
      'I want an banana. (Incorrect)',
      'The water is important. (Incorrect for general statements)'
    ],
    negativeExamplesKhmer: [
      'I want an banana. (ខុស - ត្រូវប្រើ a banana)',
      'The water is important. (ខុស បើនិយាយជាទូទៅ ត្រូវប្រើ Water without the)'
    ],
    questionForm: 'Do you have a laptop? | Where is the key?',
    questionFormKhmer: 'តើអ្នកមានកុំព្យូទ័រយួរដៃទេ? | តើកូនសោនៅឯណា?',
    visualTimeline: '[General Noun: a/an] ------------> [Specific Noun: the]',
    visualTimelineKhmer: '[នាមទូទៅ៖ a/an] ------------> [នាមជាក់លាក់៖ the]',
    examples: [
      { english: 'She lives in an apartment.', translation: 'Apartment starts with vowel sound, so it uses "an".', translationKhmer: 'នាងរស់នៅក្នុងអាផាតមិនមួយ។' }
    ],
    tips: [
      'Check the SOUND, not the spelling: "an hour" (silent H, starts with vowel sound /aʊə/), but "a university" (starts with consonant sound /j/).'
    ],
    commonMistakes: [
      { incorrect: 'He is an university student.', correct: 'He is a university student.', explanation: 'The word "university" starts with a consonant /j/ sound (yoo-ni-ver-sity), not a vowel sound, so it requires "a".' }
    ],
    summary: 'Use "a/an" for non-specific singular countable nouns. Use "the" for specific nouns. Pay attention to the pronunciation sound when selecting a vs. an.',
    summaryKhmer: 'ប្រើ "a/an" សម្រាប់នាមរាប់បានឯកវចនៈមិនជាក់លាក់។ ប្រើ "the" សម្រាប់នាមជាក់លាក់។ យកចិត្តទុកដាក់លើសំឡេងបញ្ចេញពេលជ្រើសរើស a ឬ an។',
    practiceQuestions: [
      { id: 'art-q1', question: 'Choose the correct article: "I have ______ uncle who lives in Siem Reap."', options: ['a', 'an', 'the'], correctAnswer: 'an' },
      { id: 'art-q2', question: 'Fill in the blank: "Could you pass me ______ salt?" (referring to the salt on the table)', options: ['a', 'an', 'the'], correctAnswer: 'the' }
    ]
  },
  {
    id: 'present-simple',
    title: 'Present Simple Tense',
    level: 'A1',
    shortDesc: 'Talk about habits, facts, and daily routines.',
    shortDescKhmer: 'និយាយអំពីទម្លាប់ ការពិតទូទៅ និងកិច្ចការប្រចាំថ្ងៃ។',
    explanation: 'The Present Simple tense is used to describe regular habits, routines, immutable truths, and general facts. Add "s" or "es" to the base verb when the subject is third-person singular (he, she, it).',
    explanationKhmer: 'កាលបច្ចុប្បន្នធម្មតា (Present Simple) ត្រូវប្រើដើម្បីពិពណ៌នាអំពីទម្លាប់ទៀងទាត់ កិច្ចការប្រចាំថ្ងៃ ការពិតមិនផ្លាស់ប្តូរ និងការពិតទូទៅ។ បន្ថែម "s" ឬ "es" ទៅកិរិយាសព្ទដើមនៅពេលប្រធានជាបុរសទី៣ ឯកវចនៈ (he, she, it)។',
    formula: 'Subject + Verb (s/es) + Object | Don\'t / Doesn\'t + Verb',
    formulaKhmer: 'ប្រធាន + កិរិយាសព្ទ (s/es) + កម្មបទ | Don\'t / Doesn\'t + កិរិយាសព្ទដើម',
    whenToUse: [
      'To state facts that are always true (The sun rises in the east).',
      'To describe daily schedules or actions that repeat regularly (I study every day).'
    ],
    whenToUseKhmer: [
      'ដើម្បីបញ្ជាក់ពីការពិតដែលតែងតែត្រឹមត្រូវ (ព្រះអាទិត្យរះនៅទិសខាងកើត)។',
      'ដើម្បីពិពណ៌នាអំពីកាលវិភាគប្រចាំថ្ងៃ ឬសកម្មភាពដែលកើតឡើងដដែលៗ (ខ្ញុំរៀនរាល់ថ្ងៃ)។'
    ],
    positiveExamples: [
      'She speaks fluent English.',
      'They work in Phnom Penh.'
    ],
    positiveExamplesKhmer: [
      'នាងនិយាយភាសាអង់គ្លេសបានយ៉ាងស្ទាត់ជំនាញ។',
      'ពួកគេធ្វើការនៅភ្នំពេញ។'
    ],
    negativeExamples: [
      'He does not play football on weekdays.',
      'We do not need help.'
    ],
    negativeExamplesKhmer: [
      'គាត់មិនលេងបាល់ទាត់នៅថ្ងៃធម្មតាទេ។',
      'ពួកយើងមិនត្រូវការជំនួយទេ។'
    ],
    questionForm: 'Do you study cybersecurity? | Does she like coffee?',
    questionFormKhmer: 'តើអ្នកសិក្សាផ្នែកសន្តិសុខបច្ចេកវិទ្យាទេ? | តើនាងចូលចិត្តកាហ្វេទេ?',
    visualTimeline: '<--- [Repeated Actions / General Truths] --->',
    visualTimelineKhmer: '<--- [សកម្មភាពកើតឡើងដដែលៗ / ការពិតទូទៅ] --->',
    examples: [
      { english: 'Water boils at 100 degrees Celsius.', translation: 'A general scientific fact.', translationKhmer: 'ទឹកពុះនៅសីតុណ្ហភាព ១០០ អង្សាសេ។' }
    ],
    tips: [
      'Add "es" instead of "s" if verbs end in ch, sh, ss, x, or o: e.g., watch -> watches, go -> goes.',
      'Adverbs of frequency like "always", "usually", "often" are commonly used with this tense.'
    ],
    commonMistakes: [
      { incorrect: 'She study English every day.', correct: 'She studies English every day.', explanation: 'Third-person singular "she" requires the verb form "studies" (y to ies).' }
    ],
    summary: 'The Present Simple tense describes facts and routines. Plural subjects use the base verb, while singular subjects (he, she, it) require adding s/es to the verb.',
    summaryKhmer: 'Present Simple ពិពណ៌នាអំពីការពិត និងទម្លាប់។ ប្រធានពហុវចនៈប្រើកិរិយាសព្ទដើម ចំណែកឯប្រធានឯកវចនៈ (he, she, it) ត្រូវការបន្ថែម s/es ទៅកិរិយាសព្ទ។',
    practiceQuestions: [
      { id: 'prs-q1', question: 'Which sentence is grammatically correct?', options: ['He live in Siem Reap.', 'He lives in Siem Reap.', 'He living in Siem Reap.'], correctAnswer: 'He lives in Siem Reap.' },
      { id: 'prs-q2', question: 'Choose the correct negative form: "We ______ want that."', options: ['do not', 'does not', 'is not'], correctAnswer: 'do not' }
    ]
  },
  {
    id: 'there-is-are',
    title: 'There is / There are',
    level: 'A1',
    shortDesc: 'State the existence of things and nouns.',
    shortDescKhmer: 'បង្ហាញអំពីវត្តមាន ឬអត្ថិភាពនៃវត្ថុ និងនាមផ្សេងៗ។',
    explanation: 'Use "There is" for singular nouns or uncountable nouns. Use "There are" for plural nouns. This structure states that something exists in a particular location.',
    explanationKhmer: 'ប្រើ "There is" សម្រាប់នាមឯកវចនៈ ឬនាមរាប់មិនបាន។ ប្រើ "There are" សម្រាប់នាមពហុវចនៈ។ ទម្រង់រចនាសម្ព័ន្ធនេះបញ្ជាក់ថាមានអ្វីមួយកំពុងមានវត្តមាននៅកន្លែងណាមួយ។',
    formula: 'There is + Singular / Uncountable Noun | There are + Plural Noun',
    formulaKhmer: 'There is + នាមឯកវចនៈ / នាមរាប់មិនបាន | There are + នាមពហុវចនៈ',
    whenToUse: [
      'To list contents of a room, city, or list.',
      'To mention facts about availability (There is coffee in the kitchen).'
    ],
    whenToUseKhmer: [
      'ដើម្បីរាយឈ្មោះវត្ថុនៅក្នុងបន្ទប់ ទីក្រុង ឬបញ្ជី។',
      'ដើម្បីបញ្ជាក់ពីការមាននៅដែលអាចរកបាន (មានកាហ្វេនៅក្នុងផ្ទះបាយ)។'
    ],
    positiveExamples: [
      'There is a book on the desk.',
      'There are many people at the seminar.'
    ],
    positiveExamplesKhmer: [
      'មានសៀវភៅមួយក្បាលនៅលើតុ។',
      'មានមនុស្សជាច្រើននៅក្នុងសិក្ខាសាលា។'
    ],
    negativeExamples: [
      'There is not any milk left.',
      'There are no cars in the garage.'
    ],
    negativeExamplesKhmer: [
      'មិនមានសល់ទឹកដោះគោទាល់តែសោះ។',
      'មិនមានឡាននៅក្នុងយានដ្ឋានឡើយ។'
    ],
    questionForm: 'Is there a toilet here? | Are there any questions?',
    questionFormKhmer: 'តើមានបង្គន់នៅទីនេះទេ? | តើមានសំណួរអ្វីខ្លះទេ?',
    visualTimeline: '[Existence Indicator] ---> (Location context)',
    visualTimelineKhmer: '[សញ្ញាបង្ហាញវត្តមាន] ---> (បរិបទទីតាំង)',
    examples: [
      { english: 'There are twelve months in a year.', translation: 'Twelve months is plural, so it uses "There are".', translationKhmer: 'មានដប់ពីរខែក្នុងមួយឆ្នាំ។' }
    ],
    tips: [
      'Use "any" in negative sentences and questions: "Are there any apples?", "There isn\'t any water."',
      'Use "some" in positive plural sentences: "There are some books."'
    ],
    commonMistakes: [
      { incorrect: 'There is many students in the library.', correct: 'There are many students in the library.', explanation: '"Many students" is a plural subject, so it requires "There are".' }
    ],
    summary: 'Use "There is" for singular and uncountable items. Use "There are" for plural items.',
    summaryKhmer: 'ប្រើ "There is" សម្រាប់វត្ថុឯកវចនៈ និងរាប់មិនបាន។ ប្រើ "There are" សម្រាប់វត្ថុពហុវចនៈ។',
    practiceQuestions: [
      { id: 'tia-q1', question: 'Fill in the blank: "______ a computer on the table."', options: ['There is', 'There are', 'They are'], correctAnswer: 'There is' },
      { id: 'tia-q2', question: 'Choose the correct form: "______ any cars in the street?"', options: ['Is there', 'Are there', 'There are'], correctAnswer: 'Are there' }
    ]
  },
  {
    id: 'can-cant',
    title: 'Modal: Can / Can\'t',
    level: 'A1',
    shortDesc: 'Express ability, permission, and requests.',
    shortDescKhmer: 'បង្ហាញអំពីសមត្ថភាព ការអនុញ្ញាត និងការស្នើសុំ។',
    explanation: 'The modal verb "can" expresses ability to do something, permission, or possibilities. Its negative form is "cannot" (or the contraction "can\'t"). It is followed by the bare infinitive.',
    explanationKhmer: 'កិរិយាសព្ទជំនួយ (Modal Verb) "can" បង្ហាញអំពីសមត្ថភាពអាចធ្វើអ្វីមួយ ការអនុញ្ញាត ឬលទ្ធភាព។ ទម្រង់បដិសេធរបស់វាគឺ "cannot" (ឬទម្រង់កាត់ "can\'t")។ វាត្រូវបានតាមពីក្រោយដោយកិរិយាសព្ទដើមគ្មាន "to" (Bare Infinitive)។',
    formula: 'Subject + can/can\'t + Verb (Base form) | Can + Subject + Verb?',
    formulaKhmer: 'ប្រធាន + can/can\'t + កិរិយាសព្ទដើម | Can + ប្រធាន + កិរិយាសព្ទដើម?',
    whenToUse: [
      'To speak about learned skills (I can speak English).',
      'To ask for or give permission (You can go now).'
    ],
    whenToUseKhmer: [
      'ដើម្បីនិយាយអំពីជំនាញដែលបានរៀន (ខ្ញុំអាចនិយាយភាសាអង់គ្លេសបាន)។',
      'ដើម្បីសុំ ឬផ្តល់ការអនុញ្ញាត (អ្នកអាចទៅបានហើយ)។'
    ],
    positiveExamples: [
      'I can swim.',
      'She can write code.'
    ],
    positiveExamplesKhmer: [
      'ខ្ញុំអាចហែលទឹកបាន។',
      'នាងអាចសរសេរកូដបាន។'
    ],
    negativeExamples: [
      'He can\'t swim.',
      'We cannot open the gate.'
    ],
    negativeExamplesKhmer: [
      'គាត់មិនអាចហែលទឹកបានទេ។',
      'ពួកយើងមិនអាចបើកទ្វារបានទេ។'
    ],
    questionForm: 'Can you help me? | Where can we buy tickets?',
    questionFormKhmer: 'តើអ្នកអាចជួយខ្ញុំបានទេ? | តើយើងអាចទិញសំបុត្រនៅឯណា?',
    visualTimeline: '[Ability State] ====> (Action Execution)',
    visualTimelineKhmer: '[ស្ថានភាពសមត្ថភាព] ====> (ការអនុវត្តសកម្មភាព)',
    examples: [
      { english: 'You can sit here.', translation: 'Giving permission.', translationKhmer: 'អ្នកអាចអង្គុយទីនេះបាន។' }
    ],
    tips: [
      'Do not add "s" to "can" for singular subjects (he/she/it): say "She can dance," not "She cans dance."',
      'Never put "to" after can: say "I can speak," not "I can to speak."'
    ],
    commonMistakes: [
      { incorrect: 'He can to speak English.', correct: 'He can speak English.', explanation: 'The modal verb "can" must be followed by a bare infinitive verb without "to".' }
    ],
    summary: 'Use "can" for abilities and permission. Never follow it with "to" and do not modify "can" for third-person singular subjects.',
    summaryKhmer: 'ប្រើ "can" សម្រាប់សមត្ថភាព និងការអនុញ្ញាត។ មិនត្រូវតាមពីក្រោយដោយ "to" ឡើយ ហើយមិនត្រូវប្តូររូបរាង "can" ចំពោះប្រធានឯកវចនៈឡើយ។',
    practiceQuestions: [
      { id: 'cnc-q1', question: 'Which sentence is correct?', options: ['She can sings.', 'She can to sing.', 'She can sing.'], correctAnswer: 'She can sing.' },
      { id: 'cnc-q2', question: 'Choose the correct negative option: "They ______ drive a car."', options: ['cant', 'can\'t', 'doesn\'t can'], correctAnswer: 'can\'t' }
    ]
  },

  // ==========================================
  // A2 LEVEL LESSONS (5 Lessons)
  // ==========================================
  {
    id: 'present-continuous',
    title: 'Present Continuous Tense',
    level: 'A2',
    shortDesc: 'Describe actions happening right now at the moment of speaking.',
    shortDescKhmer: 'ពិពណ៌នាអំពីសកម្មភាពដែលកំពុងកើតឡើងនៅពេលកំពុងនិយាយ។',
    explanation: 'The Present Continuous tense describes temporary actions in progress right now or around the present time. Form it using the Be Verb + present participle (verb-ing).',
    explanationKhmer: 'កាលបច្ចុប្បន្នកំពុងបន្ត (Present Continuous) ពិពណ៌នាអំពីសកម្មភាពបណ្តោះអាសន្នដែលកំពុងកើតឡើងនៅពេលនេះ ឬជុំវិញពេលបច្ចុប្បន្ន។ បង្កើតវាដោយប្រើ Be Verb + កិរិយាសព្ទថែម -ing។',
    formula: 'Subject + am/is/are + Verb-ing | Subject + am/is/are + not + Verb-ing',
    formulaKhmer: 'ប្រធាន + am/is/are + កិរិយាសព្ទ-ing | ប្រធាន + am/is/are + not + កិរិយាសព្ទ-ing',
    whenToUse: [
      'For actions happening exactly now (I am typing a message).',
      'For temporary situations that are true currently (She is living in Siem Reap this month).'
    ],
    whenToUseKhmer: [
      'សម្រាប់សកម្មភាពដែលកំពុងកើតឡើងចំពេលនេះ (ខ្ញុំកំពុងវាយសារ)។',
      'សម្រាប់ស្ថានភាពបណ្តោះអាសន្នដែលត្រឹមត្រូវនៅពេលបច្ចុប្បន្ន (នាងកំពុងស្នាក់នៅសៀមរាបខែនេះ)។'
    ],
    positiveExamples: [
      'We are studying English grammar.',
      'He is writing an email.'
    ],
    positiveExamplesKhmer: [
      'ពួកយើងកំពុងសិក្សាវេយ្យាករណ៍ភាសាអង់គ្លេស។',
      'គាត់កំពុងសរសេរអ៊ីមែល។'
    ],
    negativeExamples: [
      'I am not playing games.',
      'They are not working today.'
    ],
    negativeExamplesKhmer: [
      'ខ្ញុំមិនកំពុងលេងហ្គេមទេ។',
      'ពួកគេមិនកំពុងធ្វើការទេថ្ងៃនេះ។'
    ],
    questionForm: 'Are you listening? | What is she doing?',
    questionFormKhmer: 'តើអ្នកកំពុងស្តាប់មែនទេ? | តើនាងកំពុងធ្វើអ្វី?',
    visualTimeline: 'Past -------- [Action In Progress Right Now] --------> Future',
    visualTimelineKhmer: 'អតីតកាល -------- [សកម្មភាពកំពុងបន្តកើតឡើងឥឡូវនេះ] --------> អនាគតកាល',
    examples: [
      { english: 'The baby is sleeping.', translation: 'Action in progress at this second.', translationKhmer: 'ទារកកំពុងគេងលក់។' }
    ],
    tips: [
      'Look for keywords like "now", "at the moment", "look!", "listen!".',
      'State verbs (like "know", "like", "love", "remember") are generally not used in the continuous form.'
    ],
    commonMistakes: [
      { incorrect: 'I studying English now.', correct: 'I am studying English now.', explanation: 'Do not forget the helping auxiliary "am/is/are" verb in continuous structures.' }
    ],
    summary: 'The Present Continuous tense describes active events happening now. Form it with Subject + am/is/are + Verb-ing.',
    summaryKhmer: 'Present Continuous ពិពណ៌នាអំពីព្រឹត្តិការណ៍សកម្មកំពុងកើតឡើងឥឡូវនេះ។ បង្កើតវាដោយប្រើ ប្រធាន + am/is/are + កិរិយាសព្ទ-ing។',
    practiceQuestions: [
      { id: 'prc-q1', question: 'Fill in the blank: "Listen! The birds ______ in the trees."', options: ['is singing', 'are singing', 'sing'], correctAnswer: 'are singing' },
      { id: 'prc-q2', question: 'Identify the correct negative sentence:', options: ['He not working today.', 'He is not working today.', 'He is not work today.'], correctAnswer: 'He is not working today.' }
    ]
  },
  {
    id: 'past-simple',
    title: 'Past Simple Tense',
    level: 'A2',
    shortDesc: 'Talk about completed actions in the past.',
    shortDescKhmer: 'និយាយអំពីសកម្មភាពដែលបានបញ្ចប់ទាំងស្រុងកាលពីអតីតកាល។',
    explanation: 'The Past Simple tense is used to describe completed actions that occurred at a specific time in the past. Regular verbs add -ed, while irregular verbs have unique past forms.',
    explanationKhmer: 'កាលអតីតកាលធម្មតា (Past Simple) ត្រូវប្រើដើម្បីពិពណ៌នាអំពីសកម្មភាពដែលបានបញ្ចប់ទាំងស្រុង ដែលបានកើតឡើងនៅពេលវេលាជាក់លាក់ណាមួយកាលពីអតីតកាល។ កិរិយាសព្ទមានទម្រង់ទៀងទាត់ត្រូវថែម -ed ចំណែកឯកិរិយាសព្ទមិនទៀងទាត់មានទម្រង់អតីតកាលផ្ទាល់ខ្លួនខុសៗគ្នា។',
    formula: 'Subject + Verb-ed (or Irregular V2) | Did + Subject + Verb (Base)?',
    formulaKhmer: 'ប្រធាន + កិរិយាសព្ទ-ed (ឬកិរិយាសព្ទខ្ទង់ទី២) | Did + ប្រធាន + កិរិយាសព្ទដើម?',
    whenToUse: [
      'To discuss finished actions (I visited Angkor Wat last month).',
      'To tell stories or sequence past situations.'
    ],
    whenToUseKhmer: [
      'ដើម្បីពិភាក្សាអំពីសកម្មភាពដែលបានបញ្ចប់រួចរាល់ (ខ្ញុំបានទៅលេងអង្គរវត្តកាលពីខែមុន)។',
      'ដើម្បីនិទានរឿង ឬរៀបរាប់ព្រឹត្តិការណ៍អតីតកាលតាមលំដាប់លំដោយ។'
    ],
    positiveExamples: [
      'We studied cybersecurity yesterday.',
      'He went to the library last week.'
    ],
    positiveExamplesKhmer: [
      'ពួកយើងបានរៀនសន្តិសុខបច្ចេកវិទ្យាកាលពីម្សិលមិញ។',
      'គាត់បានទៅបណ្ណាល័យកាលពីសប្តាហ៍មុន។'
    ],
    negativeExamples: [
      'She did not pass the test.',
      'They did not call us.'
    ],
    negativeExamplesKhmer: [
      'នាងមិនបានប្រឡងជាប់ទេ។',
      'ពួកគេមិនបានទូរស័ព្ទមកពួកយើងទេ។'
    ],
    questionForm: 'Did you sleep well? | Where did they go?',
    questionFormKhmer: 'តើអ្នកគេងលក់ស្រួលទេ? | តើពួកគេបានទៅណា?',
    visualTimeline: '--- [Completed Past Action] --x-- [Present Moment] --------> Future',
    visualTimelineKhmer: '--- [សកម្មភាពអតីតកាលបានបញ្ចប់] --x-- [ពេលបច្ចុប្បន្ន] --------> អនាគតកាល',
    examples: [
      { english: 'I bought a new keyboard yesterday.', translation: 'Bought is the irregular past form of buy.', translationKhmer: 'ខ្ញុំបានទិញក្តារចុចថ្មីមួយកាលពីម្សិលមិញ។' }
    ],
    tips: [
      'Look for time expressions: "yesterday", "ago", "last night", "in 2024".',
      'In negative sentences and questions, use the auxiliary "did/did not" followed by the BASE form of the verb (not the past form).'
    ],
    commonMistakes: [
      { incorrect: 'She did not went to school yesterday.', correct: 'She did not go to school yesterday.', explanation: 'After "did not" (or didn\'t), always use the bare base verb "go", not the past form "went".' }
    ],
    summary: 'The Past Simple describes completed actions. Regular verbs add -ed, while irregular verbs change forms. Negative and question forms require using "did".',
    summaryKhmer: 'Past Simple ពិពណ៌នាអំពីសកម្មភាពដែលបានបញ្ចប់។ កិរិយាសព្ទទៀងទាត់បន្ថែម -ed ចំណែកឯកិរិយាសព្ទមិនទៀងទាត់ត្រូវផ្លាស់ប្តូររូបរាង។ ទម្រង់បដិសេធ និងសំណួរតម្រូវឱ្យប្រើ "did"។',
    practiceQuestions: [
      { id: 'pst-q1', question: 'What is the past form of the irregular verb "go"?', options: ['goed', 'went', 'gone'], correctAnswer: 'went' },
      { id: 'pst-q2', question: 'Choose the correct negative past sentence:', options: ['I didn\'t saw him.', 'I didn\'t see him.', 'I don\'t saw him.'], correctAnswer: 'I didn\'t see him' }
    ]
  },
  {
    id: 'future-will-going-to',
    title: 'Future: Will vs. Be Going To',
    level: 'A2',
    shortDesc: 'Distinguish predictions, promises, and pre-planned future actions.',
    shortDescKhmer: 'បែងចែកលទ្ធភាពនាពេលអនាគត ការសន្យា និងគម្រោងដែលបានគ្រោងទុកជាមុន។',
    explanation: 'Use "will" for instant decisions, predictions without strong evidence, promises, and offers. Use "be going to" for intentions, prior plans made before speaking, or predictions based on physical evidence.',
    explanationKhmer: 'ប្រើ "will" សម្រាប់ការសម្រេចចិត្តភ្លាមៗ ការទស្សន៍ទាយដែលគ្មានភស្តុតាងច្បាស់លាស់ ការសន្យា និងការផ្តល់ជូនជំនួយ។ ប្រើ "be going to" សម្រាប់បំណងប្រាថ្នា ផែនការដែលបានគ្រោងទុកជាមុន ឬការទស្សន៍ទាយដែលមានភស្តុតាងជាក់ស្តែង។',
    formula: 'Subject + will + Verb | Subject + am/is/are + going to + Verb',
    formulaKhmer: 'ប្រធាន + will + កិរិយាសព្ទដើម | ប្រធាន + am/is/are + going to + កិរិយាសព្ទដើម',
    whenToUse: [
      'Use "will" to make a promise (I will help you tomorrow) or offer help (I will carry that).',
      'Use "going to" when you already decided your plan (I am going to study abroad next semester).'
    ],
    whenToUseKhmer: [
      'ប្រើ "will" ដើម្បីធ្វើការសន្យា (ខ្ញុំនឹងជួយអ្នកនៅថ្ងៃស្អែក) ឬផ្តល់ជំនួយ (ខ្ញុំនឹងជួយកាន់របស់នោះ)។',
      'ប្រើ "going to" នៅពេលអ្នកបានសម្រេចចិត្តលើផែនការរបស់អ្នករួចហើយ (ខ្ញុំនឹងទៅសិក្សានៅបរទេសនៅឆមាសក្រោយ)។'
    ],
    positiveExamples: [
      'I think it will rain tomorrow.',
      'We are going to buy a new laptop this weekend.'
    ],
    positiveExamplesKhmer: [
      'ខ្ញុំគិតថាវានឹងភ្លៀងនៅថ្ងៃស្អែក។',
      'ពួកយើងនឹងទិញកុំព្យូទ័រយួរដៃថ្មីមួយនៅចុងសប្តាហ៍នេះ។'
    ],
    negativeExamples: [
      'I won\'t tell anyone your secret.',
      'They are not going to attend the meeting.'
    ],
    negativeExamplesKhmer: [
      'ខ្ញុំនឹងមិនប្រាប់អាថ៌កំបាំងរបស់អ្នកទៅនរណាម្នាក់ឡើយ។',
      'ពួកគេមិនទៅចូលរួមការប្រជុំនោះទេ។'
    ],
    questionForm: 'Will you marry me? | Are you going to visit Siem Reap?',
    questionFormKhmer: 'តើអ្នកនឹងរៀបការជាមួយខ្ញុំទេ? | តើអ្នកនឹងទៅលេងសៀមរាបមែនទេ?',
    visualTimeline: 'Past -------- Present --------> [Planned: going to] / [Promise: will] (Future)',
    visualTimelineKhmer: 'អតីតកាល -------- បច្ចុប្បន្នកាល --------> [គម្រោង៖ going to] / [ការសន្យា៖ will] (អនាគតកាល)',
    examples: [
      { english: 'Look at those dark clouds! It is going to rain.', translation: 'Prediction based on evidence.', translationKhmer: 'មើលពពកខ្មៅទាំងនោះចុះ! មេឃហៀបនឹងភ្លៀងហើយ។' }
    ],
    tips: [
      '"Won\'t" is the contraction of "will not".',
      'Always include the verb "to be" before "going to": say "I am going to write," not "I going to write."'
    ],
    commonMistakes: [
      { incorrect: 'I going to study tonight.', correct: 'I am going to study tonight.', explanation: 'Never omit the "be" verb (am/is/are) when using "be going to" structures.' }
    ],
    summary: '"Will" is for predictions, instant decisions, and promises. "Be going to" is for prior plans and predictions backed by evidence.',
    summaryKhmer: '"Will" ប្រើសម្រាប់ការទស្សន៍ទាយ ការសម្រេចចិត្តភ្លាមៗ និងការសន្យា។ "Be going to" ប្រើសម្រាប់ផែនការដែលបានគ្រោងទុក និងការទស្សន៍ទាយដែលមានភស្តុតាង។',
    practiceQuestions: [
      { id: 'fww-q1', question: 'Fill in the blank: "I ______ help you with those heavy bags!" (Instant decision/offer)', options: ['will', 'going to', 'am going to'], correctAnswer: 'will' },
      { id: 'fww-q2', question: 'Choose the correct sentence: "We are having a plan. We ______ visit Angkor Wat next Saturday."', options: ['will', 'are going to', 'shall'], correctAnswer: 'are going to' }
    ]
  },
  {
    id: 'comparatives',
    title: 'Comparatives & Superlatives',
    level: 'A2',
    shortDesc: 'Compare qualities and properties between nouns.',
    shortDescKhmer: 'ប្រៀបធៀបគុណភាព និងលក្ខណៈសម្បត្តិរវាងនាមពីរ ឬច្រើន។',
    explanation: 'Comparative adjectives compare two nouns (e.g., faster, more expensive). Superlative adjectives compare three or more nouns to show the extreme limit (e.g., the fastest, the most expensive).',
    explanationKhmer: 'គុណនាមប្រៀបធៀប (Comparative Adjectives) ប្រើដើម្បីប្រៀបធៀបនាមពីរ (ឧទាហរណ៍៖ faster, more expensive)។ គុណនាមប្រៀបធៀបកម្រិតខ្ពស់បំផុត (Superlative Adjectives) ប្រើដើម្បីប្រៀបធៀបនាមចាប់ពីបីឡើងទៅ ដើម្បីបង្ហាញពីភាពបំផុត (ឧទាហរណ៍៖ the fastest, the most expensive)។',
    formula: 'Adj-er + than | more + Adj + than | the + Adj-est | the most + Adj',
    formulaKhmer: 'គុណនាមខ្លី-er + than | more + គុណនាមវែង + than | the + គុណនាមខ្លី-est | the most + គុណនាមវែង',
    whenToUse: [
      'Use comparatives when highlighting differences between two people or things.',
      'Use superlatives when pointing out the top or bottom of a larger group.'
    ],
    whenToUseKhmer: [
      'ប្រើគុណនាមប្រៀបធៀបនៅពេលបញ្ជាក់ពីភាពខុសគ្នារវាងមនុស្ស ឬវត្ថុពីរ។',
      'ប្រើគុណនាមប្រៀបធៀបកម្រិតខ្ពស់បំផុតនៅពេលចង្អុលបង្ហាញពីចំណុចខ្ពស់បំផុត ឬទាបបំផុតនៃក្រុមធំមួយ។'
    ],
    positiveExamples: [
      'My laptop is faster than yours.',
      'Angkor Wat is the most famous temple in Cambodia.'
    ],
    positiveExamplesKhmer: [
      'កុំព្យូទ័រយួរដៃរបស់ខ្ញុំលឿនជាងកុំព្យូទ័ររបស់អ្នក។',
      'ប្រាសាទអង្គរវត្តគឺជាប្រាសាទដែលល្បីល្បាញបំផុតនៅក្នុងប្រទេសកម្ពុជា។'
    ],
    negativeExamples: [
      'Gold is more cheap than silver. (Incorrect)',
      'She is the most smartest student. (Incorrect double comparison)'
    ],
    negativeExamplesKhmer: [
      'Gold is more cheap than silver. (ខុស - ត្រូវប្រើ cheaper)',
      'She is the most smartest student. (ខុស - មិនត្រូវប្រើ most រួមជាមួយ -est ឡើយ)'
    ],
    questionForm: 'Is English easier than French? | Who is the oldest in your family?',
    questionFormKhmer: 'តើភាសាអង់គ្លេសងាយស្រួលជាងភាសាបារាំងទេ? | តើនរណាជាមនុស្សចាស់ជាងគេនៅក្នុងគ្រួសាររបស់អ្នក?',
    visualTimeline: '[Noun A] === (cheaper / more efficient) ===> [Noun B]',
    visualTimelineKhmer: '[នាម A] === (ថោកជាង / មានប្រសិទ្ធភាពជាង) ===> [នាម B]',
    examples: [
      { english: 'Today is warmer than yesterday.', translation: 'One-syllable adjectives add -er.', translationKhmer: 'ថ្ងៃនេះក្តៅជាងកាលពីម្សិលមិញ។' }
    ],
    tips: [
      'One-syllable adjectives add "-er/-est" (cheaper, the cheapest).',
      'Three-syllable adjectives use "more/most" (more beautiful, the most beautiful).',
      'Irregular adjectives: good -> better -> best, bad -> worse -> worst.'
    ],
    commonMistakes: [
      { incorrect: 'This is the most biggest screen.', correct: 'This is the biggest screen.', explanation: 'Do not mix "most" with the "-est" modifier. Use only one superlative form.' }
    ],
    summary: 'Use "-er" and "more" to compare two items. Use "-est" and "most" for superlatives showing the extreme of a group. Don\'t forget the irregular forms.',
    summaryKhmer: 'ប្រើ "-er" និង "more" ដើម្បីប្រៀបធៀបវត្ថុពីរ។ ប្រើ "-est" និង "most" សម្រាប់កម្រិតខ្ពស់បំផុត។ កុំភ្លេចទម្រង់មិនទៀងទាត់។',
    practiceQuestions: [
      { id: 'cmp-q1', question: 'What is the comparative form of the adjective "good"?', options: ['gooder', 'better', 'best'], correctAnswer: 'better' },
      { id: 'cmp-q2', question: 'Choose the correct superlative sentence:', options: ['This is the most beautiful flower.', 'This is the beautifulest flower.', 'This is the more beautiful flower.'], correctAnswer: 'This is the most beautiful flower.' }
    ]
  },
  {
    id: 'present-perfect',
    title: 'Present Perfect Tense',
    level: 'A2',
    shortDesc: 'Connect past actions with their relevance to the present.',
    shortDescKhmer: 'ភ្ជាប់សកម្មភាពកាលពីអតីតកាល ដែលមានទំនាក់ទំនងមកដល់ពេលបច្ចុប្បន្ន។',
    explanation: 'The Present Perfect tense links the past to the present. Use it for life experiences, actions occurring at an unspecified past time, or actions that started in the past and continue today.',
    explanationKhmer: 'កាលបច្ចុប្បន្នបរិបូរណ៍ (Present Perfect) ភ្ជាប់អតីតកាលទៅបច្ចុប្បន្នកាល។ ប្រើវាសម្រាប់បទពិសោធន៍ជីវិត សកម្មភាពដែលបានកើតឡើងនៅពេលវេលាមិនជាក់លាក់កាលពីអតីតកាល ឬសកម្មភាពដែលបានចាប់ផ្តើមកាលពីអតីតកាលហើយបន្តមកដល់សព្វថ្ងៃ។',
    formula: 'Subject + have/has + Verb (Past Participle V3) | Haven\'t / Hasn\'t + V3',
    formulaKhmer: 'ប្រធាន + have/has + កិរិយាសព្ទខ្ទង់ទី៣ (V3) | Haven\'t / Hasn\'t + V3',
    whenToUse: [
      'To discuss life experience (I have visited Siem Reap twice).',
      'To show a recently completed action with present consequences (I have lost my key, so I cannot enter).'
    ],
    whenToUseKhmer: [
      'ដើម្បីពិភាក្សាអំពីបទពិសោធន៍ជីវិត (ខ្ញុំបានទៅលេងសៀមរាបពីរដងហើយ)។',
      'ដើម្បីបង្ហាញពីសកម្មភាពទើបតែបញ្ចប់ថ្មីៗដែលមានឥទ្ធិពលដល់បច្ចុប្បន្ន (ខ្ញុំបានបាត់សោ ដូច្នេះខ្ញុំចូលផ្ទះមិនបានទេ)។'
    ],
    positiveExamples: [
      'She has learned 100 new words.',
      'We have studied grammar today.'
    ],
    positiveExamplesKhmer: [
      'នាងបានរៀនពាក្យថ្មីចំនួន ១០០ ពាក្យហើយ។',
      'ពួកយើងបានសិក្សាវេយ្យាករណ៍ហើយថ្ងៃនេះ។'
    ],
    negativeExamples: [
      'They have not finished the test yet.',
      'He hasn\'t traveled abroad.'
    ],
    negativeExamplesKhmer: [
      'ពួកគេមិនទាន់បានបញ្ចប់ការប្រឡងនៅឡើយទេ។',
      'គាត់មិនទាន់បានធ្វើដំណើរទៅបរទេសទេ។'
    ],
    questionForm: 'Have you ever eaten Khmer food? | Has she completed the task?',
    questionFormKhmer: 'តើអ្នកធ្លាប់ញ៉ាំម្ហូបខ្មែរទេ? | តើនាងបានបញ្ចប់ភារកិច្ចហើយឬនៅ?',
    visualTimeline: 'Past ======= [Action connects here] =======> [Present: have/has V3] --------> Future',
    visualTimelineKhmer: 'អតីតកាល ======= [សកម្មភាពភ្ជាប់មកដល់] =======> [បច្ចុប្បន្នកាល៖ have/has V3] --------> អនាគតកាល',
    examples: [
      { english: 'I have lived here since 2022.', translation: 'Action started in past and continues now.', translationKhmer: 'ខ្ញុំបានរស់នៅទីនេះតាំងពីឆ្នាំ ២០២២ មកម៉្លេះ។' }
    ],
    tips: [
      'Use "since" for a specific point in time (since Monday, since 2018).',
      'Use "for" for a duration or period of time (for 3 years, for 5 hours).',
      'Common keywords: "ever", "never", "already", "yet", "just".'
    ],
    commonMistakes: [
      { incorrect: 'I have went to Siem Reap last year.', correct: 'I went to Siem Reap last year.', explanation: 'Never use the Present Perfect tense with specific past time indicators (like "last year"). Use the Simple Past instead.' }
    ],
    summary: 'The Present Perfect links past actions to the present. Form it with have/has + V3. Use "since" for starting points and "for" for durations.',
    summaryKhmer: 'Present Perfect ភ្ជាប់សកម្មភាពអតីតកាលមកបច្ចុប្បន្ន។ បង្កើតវាដោយប្រើ have/has + V3។ ប្រើ "since" សម្រាប់ចំណុចចាប់ផ្តើម និង "for" សម្រាប់រយៈពេល។',
    practiceQuestions: [
      { id: 'ppf-q1', question: 'Fill in the blank: "She ______ studied English for five years."', options: ['has', 'have', 'is'], correctAnswer: 'has' },
      { id: 'ppf-q2', question: 'Choose the correct phrase: "I have lived in Phnom Penh ______ 2020."', options: ['for', 'since', 'ago'], correctAnswer: 'since' }
    ]
  },

  // ==========================================
  // B1 LEVEL LESSONS (4 Lessons)
  // ==========================================
  {
    id: 'passive-voice',
    title: 'Passive Voice',
    level: 'B1',
    shortDesc: 'Focus on the receiver of the action rather than the actor.',
    shortDescKhmer: 'ផ្តោតលើកម្មបទដែលទទួលរងសកម្មភាព ជាជាងប្រធានដែលធ្វើសកម្មភាព។',
    explanation: 'In the Active Voice, the subject does the action (e.g., "The cat chased the mouse"). In the Passive Voice, the object becomes the subject, focusing on the receiver of the action (e.g., "The mouse was chased by the cat").',
    explanationKhmer: 'នៅក្នុងប្រយោគសកម្ម (Active Voice) ប្រធានជាអ្នកធ្វើសកម្មភាព (ឧទាហរណ៍៖ "ឆ្មាដេញចាប់កណ្តុរ")។ នៅក្នុងប្រយោគកម្មរង (Passive Voice) កម្មបទក្លាយជាប្រធានវិញ ដោយផ្តោតលើអ្នកទទួលរងសកម្មភាព (ឧទាហរណ៍៖ "កណ្តុរត្រូវបានដេញចាប់ដោយឆ្មា")។',
    formula: 'Active Object -> Passive Subject + be + Verb (Past Participle V3) [+ by agent]',
    formulaKhmer: 'កម្មបទសកម្ម -> ប្រធានកម្មរង + be + កិរិយាសព្ទខ្ទង់ទី៣ (V3) [+ by ភ្នាក់ងារធ្វើ]',
    whenToUse: [
      'When the actor of the action is unknown, obvious, or not important.',
      'In formal, scientific, or news writing styles.'
    ],
    whenToUseKhmer: [
      'នៅពេលដែលអ្នកធ្វើសកម្មភាពមិនត្រូវបានគេស្គាល់ ជាក់ស្តែងពេក ឬមិនសំខាន់។',
      'នៅក្នុងរចនាប័ទ្មសរសេរផ្លូវការ វិទ្យាសាស្ត្រ ឬព័ត៌មាន។'
    ],
    positiveExamples: [
      'The book was written in 1998.',
      'All code is checked by senior engineers.'
    ],
    positiveExamplesKhmer: [
      'សៀវភៅនេះត្រូវបានសរសេរឡើងនៅក្នុងឆ្នាំ ១៩៩៨។',
      'កូដទាំងអស់ត្រូវបានត្រួតពិនិត្យដោយវិស្វករចម្បង។'
    ],
    negativeExamples: [
      'The house was not built last year.',
      'The reports are not generated automatically.'
    ],
    negativeExamplesKhmer: [
      'ផ្ទះនេះមិនត្រូវបានសាងសង់ឡើងកាលពីឆ្នាំមុនទេ។',
      'របាយការណ៍មិនត្រូវបានបង្កើតឡើងដោយស្វ័យប្រវត្តិនោះទេ។'
    ],
    questionForm: 'Was the thief caught? | How are databases secured?',
    questionFormKhmer: 'តើចោរត្រូវបានចាប់ខ្លួនហើយឬនៅ? | តើមូលដ្ឋានទិន្នន័យ (Databases) ត្រូវបានការពារដោយរបៀបណា?',
    visualTimeline: '(Actor does action) [Active] ===> (Action is done to subject) [Passive]',
    visualTimelineKhmer: '(ប្រធានធ្វើសកម្មភាព) [Active] ===> (សកម្មភាពត្រូវធ្វើលើប្រធានរង) [Passive]',
    examples: [
      { english: 'Active: John cleans the room. | Passive: The room is cleaned by John.', translation: 'Present Simple passive.', translationKhmer: 'សកម្ម៖ John សម្អាតបន្ទប់។ | កម្មរង៖ បន្ទប់ត្រូវបានសម្អាតដោយ John។' }
    ],
    tips: [
      'The tense of the auxiliary verb "be" changes to match the original tense: is/are (present), was/were (past), has/have been (present perfect).'
    ],
    commonMistakes: [
      { incorrect: 'The email was send yesterday.', correct: 'The email was sent yesterday.', explanation: 'Passive voice structures always require the past participle (V3) form of the main verb ("sent"), not the base form.' }
    ],
    summary: 'The Passive Voice shifts emphasis from the actor to the receiver. Form it with a conjugation of the verb "be" followed by the past participle (V3).',
    summaryKhmer: 'Passive Voice បង្វែរការសង្កត់ធ្ងន់ពីអ្នកធ្វើសកម្មភាពទៅអ្នកទទួល។ បង្កើតវាដោយប្រើការបំបែកកិរិយាសព្ទ "be" តាមដោយកិរិយាសព្ទខ្ទង់ទី៣ (V3)។',
    practiceQuestions: [
      { id: 'psv-q1', question: 'Convert to passive: "They build houses."', options: ['Houses is built.', 'Houses are built.', 'Houses are build.'], correctAnswer: 'Houses are built.' },
      { id: 'psv-q2', question: 'Fill in the blank: "The database ______ updated yesterday."', options: ['is', 'was', 'has been'], correctAnswer: 'was' }
    ]
  },
  {
    id: 'conditionals',
    title: 'Conditionals (0, 1st & 2nd)',
    level: 'B1',
    shortDesc: 'Understand logical outcomes, real possibilities, and imaginary situations.',
    shortDescKhmer: 'ស្វែងយល់ពីលទ្ធផលឡូជីខល លទ្ធភាពជាក់ស្តែង និងស្ថានភាពសន្មត/ស្រមៃ។',
    explanation: 'Zero conditional represents general facts (If water freezes, it turns to ice). 1st conditional represents real future possibilities (If it rains, I will stay). 2nd conditional represents imaginary present/future situations (If I won the lottery, I would buy a house).',
    explanationKhmer: 'លក្ខខណ្ឌទី០ (Zero Conditional) តំណាងឱ្យការពិតទូទៅ (បើទឹកកក វាប្រែជាទឹកកក)។ លក្ខខណ្ឌទី១ (1st Conditional) តំណាងឱ្យលទ្ធភាពអនាគតជាក់ស្តែង (បើមេឃភ្លៀង ខ្ញុំនឹងស្នាក់នៅផ្ទះ)។ លក្ខខណ្ឌទី២ (2nd Conditional) តំណាងឱ្យស្ថានភាពសន្មត/ស្រមៃនៅពេលបច្ចុប្បន្ន ឬអនាគត (បើខ្ញុំឈ្នះឆ្នោត ខ្ញុំនឹងទិញផ្ទះមួយ)។',
    formula: 'Zero: If + Present, Present | 1st: If + Present, will + Verb | 2nd: If + Past, would + Verb',
    formulaKhmer: 'Zero: If + Present, Present | 1st: If + Present, will + V | 2nd: If + Past, would + V',
    whenToUse: [
      'Use 1st Conditional for promises, warnings, and future plans dependent on events.',
      'Use 2nd Conditional for talking about dreams, fantasies, or things that are highly unlikely to happen.'
    ],
    whenToUseKhmer: [
      'ប្រើលក្ខខណ្ឌទី១ សម្រាប់ការសន្យា ការព្រមាន និងផែនការអនាគតដែលអាស្រ័យលើព្រឹត្តិការណ៍ផ្សេង។',
      'ប្រើលក្ខខណ្ឌទី២ សម្រាប់និយាយអំពីក្តីស្រមៃ ការស្រមើស្រមៃ ឬរឿងដែលមិនអាចកើតឡើងបាន។'
    ],
    positiveExamples: [
      'If you heat ice, it melts.',
      'If I study hard, I will pass the exam.',
      'If I were you, I would take the job.'
    ],
    positiveExamplesKhmer: [
      'ប្រសិនបើអ្នកកម្តៅទឹកកក វានឹងរលាយ។',
      'ប្រសិនបើខ្ញុំខំរៀន ខ្ញុំនឹងប្រឡងជាប់។',
      'ប្រសិនបើខ្ញុំជាអ្នក ខ្ញុំនឹងទទួលយកការងារនោះ។'
    ],
    negativeExamples: [
      'If she doesn\'t call, I won\'t go.',
      'If they had money, they would not rent a flat.'
    ],
    negativeExamplesKhmer: [
      'ប្រសិនបើនាងមិនទូរស័ព្ទមកទេ ខ្ញុំនឹងមិនទៅទេ។',
      'ប្រសិនបើពួកគេមានលុយ ពួកគេនឹងមិនជួលផ្ទះល្វែងនោះទេ។'
    ],
    questionForm: 'What will you do if it rains? | Where would you live if you could choose?',
    questionFormKhmer: 'តើអ្នកនឹងធ្វើអ្វីប្រសិនបើមេឃភ្លៀង? | តើអ្នកនឹងរស់នៅឯណាប្រសិនបើអ្នកអាចជ្រើសរើសបាន?',
    visualTimeline: '[Condition Event] ---- (depends on probability) ----> [Outcome State]',
    visualTimelineKhmer: '[ព្រឹត្តិការណ៍លក្ខខណ្ឌ] ---- (អាស្រ័យលើលទ្ធភាពជាក់ស្តែង) ----> [ស្ថានភាពលទ្ធផល]',
    examples: [
      { english: 'If I had a car, I would drive to Siem Reap.', translation: 'I don\'t have a car (imaginary scenario).', translationKhmer: 'ប្រសិនបើខ្ញុំមានឡាន ខ្ញុំនឹងបើកឡានទៅសៀមរាប។' }
    ],
    tips: [
      'In the 2nd Conditional, use "were" instead of "was" for all subjects: e.g., "If I were you," "If he were here."',
      'You can reverse the clause order without a comma: "I will go if she invites me."'
    ],
    commonMistakes: [
      { incorrect: 'If I will see him, I will tell him.', correct: 'If I see him, I will tell him.', explanation: 'Do not use "will" in the "if" clause of the first conditional. Use the simple present instead.' }
    ],
    summary: 'Zero conditional is for facts. First conditional is for real future possibilities. Second conditional is for imaginary present/future situations.',
    summaryKhmer: 'Zero Conditional សម្រាប់ការពិត។ First Conditional សម្រាប់លទ្ធភាពពិតប្រាកដនាពេលអនាគត។ Second Conditional សម្រាប់ស្ថានភាពស្រមៃក្នុងពេលបច្ចុប្បន្ន ឬអនាគត។',
    practiceQuestions: [
      { id: 'cnd-q1', question: 'Choose the correct form: "If she ______ time, she will help us tomorrow."', options: ['has', 'will have', 'had'], correctAnswer: 'has' },
      { id: 'cnd-q2', question: 'Fill in the blank: "If I ______ a bird, I would fly."', options: ['was', 'were', 'am'], correctAnswer: 'were' }
    ]
  },
  {
    id: 'reported-speech',
    title: 'Reported Speech',
    level: 'B1',
    shortDesc: 'Report or describe what someone else said by shifting verb tenses.',
    shortDescKhmer: 'រាយការណ៍ ឬរៀបរាប់ឡើងវិញនូវអ្វីដែលអ្នកដទៃបាននិយាយដោយផ្លាស់ប្តូរកាល។',
    explanation: 'Direct Speech is the exact words spoken (e.g., "I am hungry"). Reported (Indirect) Speech relays what was said by shifting tenses backward in time (e.g., He said that he was hungry).',
    explanationKhmer: 'សម្តីផ្ទាល់ (Direct Speech) គឺជាពាក្យពិតប្រាកដដែលបាននិយាយ (ឧទាហរណ៍៖ "I am hungry")។ សម្តីប្រយោល (Reported/Indirect Speech) បញ្ជូនបន្តនូវអ្វីដែលបាននិយាយដោយប្តូរកាលថយក្រោយមួយកម្រិត (ឧទាហរណ៍៖ He said that he was hungry)។',
    formula: 'Direct Present -> Reported Past | Direct Past -> Reported Past Perfect | will -> would',
    formulaKhmer: 'សម្តីផ្ទាល់បច្ចុប្បន្ន -> ប្រយោលអតីតកាល | សម្តីផ្ទាល់អតីតកាល -> ប្រយោល Past Perfect | will -> would',
    whenToUse: [
      'To pass on messages or report conversations to another person.',
      'In journalistic reports, stories, and formal reviews.'
    ],
    whenToUseKhmer: [
      'ដើម្បីបញ្ជូនសារបន្ត ឬរាយការណ៍ការសន្ទនាទៅកាន់អ្នកដទៃ។',
      'នៅក្នុងរបាយការណ៍សារព័ត៌មាន រឿងនិទាន និងការពិនិត្យឡើងវិញផ្លូវការ។'
    ],
    positiveExamples: [
      'Direct: "I like code." -> Reported: He said he liked code.',
      'Direct: "I will study." -> Reported: She said she would study.'
    ],
    positiveExamplesKhmer: [
      'ផ្ទាល់៖ "ខ្ញុំចូលចិត្តកូដ។" -> ប្រយោល៖ គាត់និយាយថាគាត់ចូលចិត្តកូដ។',
      'ផ្ទាល់៖ "ខ្ញុំនឹងរៀន។" -> ប្រយោល៖ នាងនិយាយថានាងនឹងរៀន។'
    ],
    negativeExamples: [
      'He told me that he don\'t want to go. (Incorrect tense shift)',
      'She said she will call me. (Incorrect will instead of would)'
    ],
    negativeExamplesKhmer: [
      'He told me that he don\'t want to go. (ខុស - ត្រូវប្តូរទៅ didn\'t want)',
      'She said she will call me. (ខុស - ត្រូវប្តូរទៅ would call)'
    ],
    questionForm: 'Direct: "Where do you live?" -> Reported: She asked me where I lived.',
    questionFormKhmer: 'ផ្ទាល់៖ "តើអ្នករស់នៅឯណា?" -> ប្រយោល៖ នាងបានសួរខ្ញុំថាតើខ្ញុំរស់នៅឯណា។',
    visualTimeline: 'Direct Quote: "I am ready" ======= (Tense shift back) =======> He said he was ready',
    visualTimelineKhmer: 'សម្តីផ្ទាល់៖ "I am ready" ======= (ការថយក្រោយនៃកាល) =======> គាត់និយាយថាគាត់រួចរាល់ហើយ',
    examples: [
      { english: 'Direct: "I have seen that film." -> Reported: She said she had seen that film.', translation: 'Present perfect shifts to past perfect.', translationKhmer: 'ផ្ទាល់៖ "ខ្ញុំបានមើលរឿងនោះហើយ។" -> ប្រយោល៖ នាងនិយាយថានាងបានមើលរឿងនោះហើយ។' }
    ],
    tips: [
      'Say vs. Tell: Use "tell" when naming the listener directly ("He told ME..."). Use "say" when not naming the listener ("He said that...").',
      'Pronouns and time markers also shift: e.g., "today" -> "that day", "tomorrow" -> "the next day".'
    ],
    commonMistakes: [
      { incorrect: 'She said me that she was tired.', correct: 'She told me that she was tired.', explanation: 'You cannot use "say" followed directly by a personal object pronoun without "to". Use "told" instead.' }
    ],
    summary: 'Reported speech shifts tenses back in time to relay messages. Direct present simple becomes reported past simple, direct will becomes would, and direct present perfect becomes past perfect.',
    summaryKhmer: 'Reported Speech ផ្លាស់ប្តូរកាលថយក្រោយដើម្បីរាយការណ៍សារ។ ផ្ទាល់បច្ចុប្បន្នធម្មតាក្លាយជាប្រយោលអតីតកាលធម្មតា, direct will ក្លាយជា would, និង direct Present Perfect ក្លាយជា Past Perfect។',
    practiceQuestions: [
      { id: 'rep-q1', question: 'Convert to reported speech: "I am working," he said.', options: ['He said he is working.', 'He said he was working.', 'He told he was working.'], correctAnswer: 'He said he was working.' },
      { id: 'rep-q2', question: 'Choose the correct reporting verb: "She ______ me that she would arrive late."', options: ['said', 'told', 'explained'], correctAnswer: 'told' }
    ]
  },
  {
    id: 'gerunds-infinitives',
    title: 'Gerunds & Infinitives',
    level: 'B1',
    shortDesc: 'Understand when to follow verbs with -ing (gerund) versus "to + verb" (infinitive).',
    shortDescKhmer: 'យល់ដឹងពីរបៀបប្រើកិរិយាសព្ទថែម -ing (Gerund) ឬប្រើ "to + កិរិយាសព្ទដើម" (Infinitive)។',
    explanation: 'Some verbs in English are followed by a gerund (verb-ing) like "enjoy", "avoid", or "suggest". Other verbs must be followed by an infinitive (to + base verb) like "decide", "hope", or "want".',
    explanationKhmer: 'កិរិយាសព្ទមួយចំនួននៅក្នុងភាសាអង់គ្លេសត្រូវតាមពីក្រោយដោយ Gerund (កិរិយាសព្ទថែម -ing) ដូចជា "enjoy", "avoid", ឬ "suggest"។ កិរិយាសព្ទផ្សេងទៀតត្រូវតាមពីក្រោយដោយ Infinitive (to + កិរិយាសព្ទដើម) ដូចជា "decide", "hope", ឬ "want"។',
    formula: 'Verb + Verb-ing [Gerund] | Verb + to + Verb [Infinitive]',
    formulaKhmer: 'កិរិយាសព្ទ + កិរិយាសព្ទ-ing [Gerund] | កិរិយាសព្ទ + to + កិរិយាសព្ទដើម [Infinitive]',
    whenToUse: [
      'Use a gerund after prepositions (good at coding, interested in learning).',
      'Use an infinitive to express purpose or intent (I study to pass the exam).'
    ],
    whenToUseKhmer: [
      'ប្រើ Gerund បន្ទាប់ពីធ្នាក់ (good at coding, interested in learning)។',
      'ប្រើ Infinitive ដើម្បីបញ្ជាក់ពីគោលបំណង ឬបំណងប្រាថ្នា (ខ្ញុំរៀនដើម្បីប្រឡងជាប់)។'
    ],
    positiveExamples: [
      'I enjoy learning English vocabulary.',
      'We decided to study cybersecurity.'
    ],
    positiveExamplesKhmer: [
      'ខ្ញុំចូលចិត្តរៀនពាក្យភាសាអង់គ្លេស។',
      'ពួកយើងបានសម្រេចចិត្តសិក្សាផ្នែកសន្តិសុខបច្ចេកវិទ្យា។'
    ],
    negativeExamples: [
      'He promised not to tell anyone.',
      'I avoid driving in heavy traffic.'
    ],
    negativeExamplesKhmer: [
      'គាត់បានសន្យាថានឹងមិនប្រាប់នរណាម្នាក់ឡើយ។',
      'ខ្ញុំចៀសវាងការបើកបរក្នុងពេលមានចរាចរណ៍កកស្ទះខ្លាំង។'
    ],
    questionForm: 'Do you want to come? | Do you mind opening the window?',
    questionFormKhmer: 'តើអ្នកចង់មកជាមួយទេ? | តើអ្នកទាស់ចិត្តទេប្រសិនបើបើកបង្អួច?',
    visualTimeline: '[Main Verb Action] ===> [Secondary Form: to-Verb / Verb-ing]',
    visualTimelineKhmer: '[សកម្មភាពកិរិយាសព្ទចម្បង] ===> [ទម្រង់ទីពីរ៖ to-Verb / Verb-ing]',
    examples: [
      { english: 'I am interested in learning new technologies.', translation: 'Use gerund after preposition in.', translationKhmer: 'ខ្ញុំចាប់អារម្មណ៍ក្នុងការស្វែងយល់ពីបច្ចេកវិទ្យាថ្មីៗ។' }
    ],
    tips: [
      'Verbs of liking (like, love, hate) can take either form without a change in meaning (I like swimming / I like to swim).',
      'Some verbs change meaning entirely: "stop to smoke" (stops walking to have a cigarette) vs. "stop smoking" (gives up the habit of smoking).'
    ],
    commonMistakes: [
      { incorrect: 'I want studying cybersecurity.', correct: 'I want to study cybersecurity.', explanation: 'The verb "want" must always be followed by an infinitive with "to", not a gerund.' }
    ],
    summary: 'Gerunds (verb-ing) follow prepositions and specific verbs like enjoy and avoid. Infinitives (to + verb) follow verbs of choice and express intention.',
    summaryKhmer: 'Gerunds (verb-ing) តាមពីក្រោយធ្នាក់ និងកិរិយាសព្ទជាក់លាក់ដូចជា enjoy និង avoid។ Infinitives (to + verb) តាមពីក្រោយកិរិយាសព្ទនៃការជ្រើសរើស និងបញ្ជាក់ពីគោលបំណង។',
    practiceQuestions: [
      { id: 'gai-q1', question: 'Fill in the blank: "They suggested ______ (go) to the library."', options: ['to go', 'going', 'go'], correctAnswer: 'going' },
      { id: 'gai-q2', question: 'Choose the correct form: "We hope ______ (pass) the test next week."', options: ['passing', 'to pass', 'pass'], correctAnswer: 'to pass' }
    ]
  }
];
