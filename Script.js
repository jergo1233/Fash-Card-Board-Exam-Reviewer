document.addEventListener("DOMContentLoaded", function () {
  // =========================
  // QUESTIONS BY CATEGORY
  // =========================
  const questionsByCategory = {
    "Filipino": [
      { question: "Huwag makisama sa kanya dahil buwaya siya. Ang salitang buwaya ay tumutukoy sa kahulugang ___________.", options: ["denotasyon", "pampanitikan", "etimolohiya", "konotasyon"], answer: "konotasyon" },
      { question: "Sayaw, agaw, taynga ay mga halimbawa ng _______.", options: ["tugma", "bugtong", "diptonggo", "idioma"], answer: "diptonggo" },
      { question: "Ang mga salitang teka, tena dali ay nagtataglay ng___.", options: ["tono", "metatesis", "pagkaltas", "asimilasyon"], answer: "pagkaltas" },
      { question: "Ang kahulugan ng 'salubong ang kilay' ay ______.", options: ["ganado", "galit", "gala", "ganti"], answer: "galit" },
      { question: "Kapapasok pa lang niya sa bulwagan nang ako ay dumating. Ang pandiwang 'kapapasok' ay nasa aspetong _____.", options: ["perpektibo", "panghinaharap", "pangnagdaan", "pangkasalukuyan"], answer: "pangnagdaan" },
      { question: "Tinapos ng ina ang gawaing-bahay. Ang pandiwa sa pangungusap ay nasa aspetong ________.", options: ["Panghinaharap", "Pang-nagdaan", "Pangkasalukuyan", "Perpektibo"], answer: "Perpektibo" },
      { question: "'Ipapasa ng mag-aaral ang mga sagot sa takdang-aralin sa darating na Linggo', ay nasa panahunang _____.", options: ["pangnagdaan", "perpektibo", "panghinaharap", "pangkasalukuyan"], answer: "panghinaharap" },
      { question: "Samakatuwid ay pangatnig na ginagamit sa dagdag na paliwanag at __________.", options: ["Paglilinaw", "paghihiwalay", "pagtatanong", "pagbubuklod"], answer: "Paglilinaw" },
      { question: "'Subalit', ay pangatnig na ginagamit sa ____________.", options: ["pagtatanong", "lubos na pagsang-ayon", "paglilinaw", "hindi pagsang-ayon"], answer: "hindi pagsang-ayon" },
      { question: "Pag-aaral ng mga tuntunin kung paano inaayos ang mga salita sa loob ng pangungusap ay _______.", options: ["Syntax", "pragmatika", "ortograpiya", "semantika"], answer: "Syntax" },
      { question: "Pag-aaral ng mga tuntunin sa pagbaybay ng mga salita ay _______.", options: ["semantika", "Gramatika", "ortograpiya", "sistema"], answer: "ortograpiya" },
      { question: "Paraan ng pagbuo ng salita na ginagamitan ng tatlong uri ng panlapi ay____.", options: ["laguhan", "inunlapian", "hinulapian", "kabilaan"], answer: "laguhan" },
      { question: "Ang mga salitang 'kagandahan', 'magkaibigan', at 'nagunahan' ay mga halimbawa ng salitang may panlaping _______.", options: ["gitlapi", "Kabilaan", "laguhan", "unlapi"], answer: "Kabilaan" },
      { question: "Anong uri ng panlapi na ginagamit sa mga sumusunod na salita: limutin, tukuran, suwagin?", options: ["kabilaan", "Unlapi", "hulapi", "gitlapi"], answer: "hulapi" },
      { question: "Ang sinaunang alpabetong Pilipino ay tinatawag na _______.", options: ["panitikan", "Abakada", "alibata", "balarila"], answer: "alibata" },
      { question: "'Isang bandila, isang wika, isang bayan' ay sawikain na nanghihikayat ng _______.", options: ["pagkakabukod-bukod", "Pagkakaisa", "pakikipaglaban", "palaisipan"], answer: "Pagkakaisa" },
      { question: "'Ang atletang Pilipino ay lubhang masigasig', ang 'lubhang' ay isang _______.", options: ["Pandiwa", "pang-abay", "pang-uri", "pangngalan"], answer: "pang-abay" },
      { question: "Ang pinakamahalagang gamit ng wika ay ang pagkaka-isa ng mga mamamayan sa pamamagitan ng _______.", options: ["Ugnayan", "salisihan", "tagisan", "pantayan"], answer: "Ugnayan" },
      { question: "Wika ang ginagamit sa lahat ng ito, MALIBAN sa _______.", options: ["pakikipagdigmaan", "pakikipag-unawaan", "pakikipagtalastasan", "ugnayan"], answer: "pakikipagdigmaan" },
      { question: "Bahagi ng pananaliksik kung saan matatagpuan ang panimula, kaligiran ng pag-aaral at 'conceptual framework' ay _______.", options: ["kabanata IV", "kabanata II", "kabanata I", "kabanata III"], answer: "kabanata I" },
      { question: "Ang kahulugan ng 'a stitch in time, saves nine,' ay ______.", options: ["Maagap", "masayahin", "malingap", "mahinay"], answer: "Maagap" },
      { question: "Ang pang-uri sa sumusunod na pangungusap: 'Nakita at nasadya ko na ang kalakhang Maynila', ay ______.", options: ["Kalakhang", "Maynila", "Nakita", "nasadya"], answer: "Kalakhang" },
      { question: "Anong uri ng pamamahayag ang nag-uulat ng tunay na pangyayari batay sa pag-aaral, pananaliksik, o pakikipanayam at isinulat sa paraang kawili-wili?", options: ["Lathalain", "editoryal", "pangulong tudling", "kumento"], answer: "Lathalain" },
      { question: "Katangian ng mahusay na pananaliksik na sumusuri sa mga nakalap na datos, partikular na sagot sa mga talatanungan upang mabigyan ng wastong interpretasyon ay _______.", options: ["obhektibong pananaw", "Lohikal", "empirical", "kritikal na pagsusuri"], answer: "empirical" },
      { question: "Sa Batangas ay 'mabanas' sa Bulacan ay 'maalinsangan', sa Rizal ay 'bang-init' ay mga halimbawa ng _______.", options: ["lalawiganin", "kolokyal", "talinghaga", "Pambansa"], answer: "lalawiganin" },
      { question: "'Matuling pinatakbo ni Roger ang kanyang bagong Toyota Innova', ang pang-abay sa pangungusap ay ________.", options: ["ni", "matuling", "bagong", "kanyang"], answer: "matuling" },
      { question: "Bahagi ng pananalita na nagpapahayag ng kilos, galaw, at pangyayari ay _______.", options: ["Pangngalan", "Pandiwa", "panghalip", "pang-uri"], answer: "Pandiwa" },
      { question: "'Siya ay nakilalang masipag at magalang na mamamayan'; ang pang-angkop sa pangungusap na ito ay _______.", options: ["at", "ay", "Siya", "na"], answer: "na" },
      { question: "Anong bahagi ng pananalita ang ginamit sa salitang may malalaking titik: 'siya ay HUWARANG mag-aaral'", options: ["pandiwa", "pang-uri", "pangngalan", "panghalip"], answer: "pang-uri" },
      { question: "Uri ng panghalip na ginagamit na panturo sa mga bagay ay ________.", options: ["pamatlig", "panaklaw", "Paari", "panao"], answer: "pamatlig" },
      { question: "Wikang malikhain ay mataas na antas ng wika na ginagamit sa _______.", options: ["pamantayan", "Panghuhula", "panitikan", "palaisipan"], answer: "panitikan" },
      { question: "Salita o parirala na kinakaltas sa pangungusap ay nangangailangan ng bantas na ________.", options: ["kudlit", "Panaklong", "panipi", "gitling"], answer: "panipi" },
      { question: "'Maghapon at magdamag na nagbasa ng aklat at lathalain si Gng. Llana', ang panaguri sa pangungusap ay ________.", options: ["nagbasa", "Gng. Llana", "Maghapon", "magdamag"], answer: "nagbasa" },
      { question: "Ang lahat ng ito ay mahalagang katangian ng isang manunulumpati MALIBAN sa _______.", options: ["matikas na tindig at pananalita", "malinaw na pagbigkas", "panggulat na pagbigkas", "maayos na pagtalakay ng paksa"], answer: "panggulat na pagbigkas" },
      { question: "Isang uri ng talumpati kung saan isa lamang ang paksa na maagang ipinaalam sa mga kasapi ay _______.", options: ["may kahandaan", "di-handa", "biglaang talumpati", "impromptu"], answer: "may kahandaan" },
      { question: "Ano ang kahulugan ng sumusunod na idyomatikong pangungusap? 'You can relax, she is just making a mountain out of a mole.'", options: ["nakakagulat", "madamdamin", "eksaherado", "mataas"], answer: "eksaherado" },
      { question: "Ang wastong kahulugan ng 'Kung may isinuksok, may titingalain' ay _______.", options: ["umasa", "maging masipag", "mag-impok", "maglinis"], answer: "mag-impok" },
      { question: "Ang wastong kahulugan ng 'mahinhing talipandas' ay _______.", options: ["mayabang", "Mapagkunwari", "maselan", "kahanga-hanga"], answer: "Mapagkunwari" },
      { question: "'Sa aming nayon kilala si Cirilo na bukas-palad', na ang kahulugan ay: si Cirilo ay _______.", options: ["mapag-upasala", "mapagkawang-gawa", "mapaghiganti", "mapaghinala"], answer: "mapagkawang-gawa" },
      { question: "Ano ang kahulugan ng sumusunod na idyomatikong pangungusap? 'Ang kanyang mungkahi ay suntok sa buwan at di matutupad'", options: ["lakas-loob", "Imposible", "Kahanga-hanga", "Pangarap"], answer: "Imposible" },
      { question: "Ang salitang ugat sa 'sinaliksik' ay _______.", options: ["Saksihan", "Sinaksi", "Saliksik", "Salik"], answer: "Saliksik" },
      { question: "Uri ng bantas na ginagamit sa paghihiwalay ng mga sugnay na sunod-sunod ay _______.", options: ["tuldok", "kuwit", "tuldok kuwit", "tutuldok"], answer: "tuldok kuwit" },
      { question: "Uri ng bantas na ginagamit sa paghihiwalay ng magkakasunod na salita ay _______.", options: ["Tuldok", "Kuwit", "Tuldokuwit", "tutuldok"], answer: "kuwit" },
      { question: "Malikhain ay uri ng sanaysay na di-pangkaraniwan ang paksa at tumatalakay nang ayon sa estilo ng _______.", options: ["editor", "manunulat", "peryodiko", "mambabasa"], answer: "manunulat" },
      { question: "Ang pagpapalitan ng ideya o opinyon at pagpapahayag ng salaysay ay naisasagawa sa pamamagitan ng mga sagisag na ginagawa sa pamamagitan ng ________.", options: ["tunog", "wika", "bokabularyo", "sining"], answer: "wika" },
      { question: "Isang istratehiya na ginagamit sa pananaliksik upang mailarawan ang isang pangyayari sa kanyang natural na kapaligiran kung saan ito nagaganap ay _______.", options: ["trend study", "case study", "follow-up study", "field study"], answer: "field study" },
      { question: "Ang pinakamahalagang gamit ng wika ay _______.", options: ["pagsusulat, pagbabasa, paliwanagan", "pag-iisip, pag-gawa, paglalakad", "tunog, tinig, pandinig", "abakada, alibata, bokabolaryo"], answer: "pagsusulat, pagbabasa, paliwanagan" },
      { question: "ORIHINAL: Pia walked the ramp with her dignity and grace amidst a loud applause. SALIN: Pia brought the house down with her dignity and grace. Ito ay pagsaling____.", options: ["Literal", "Kumbesyonal", "Idyomatiko", "Sinadya"], answer: "Idyomatiko" },
      { question: "Ang pinakamababang lebel ng wika na impormal na nilikha at nabuo sa pagsama-sama ng mga salitang pinaikli o pinahaba ay ______.", options: ["Kolokyal", "Lalawigan", "Pampanitikan", "balbal"], answer: "balbal" },
      { question: "Pagsasalin-wikang teknikal ay gamit sa____.", options: ["Panitikan", "Agham", "Kasaysayan", "Kultura"], answer: "Agham" },
      { question: "Uri ng pagsasaling-wika na tumutukoy sa agham, kalikasan, lipunan at mga disiplinang akademiko ay ____.", options: ["Pampanitikan", "Pang kultura", "Teknikal", "Pang kasaysayan"], answer: "Teknikal" },
      { question: "Tukuyin ang pang-uri sa pangungusap: 'Mabango ang bagong bukang sampagita.'", options: ["Sampagita", "Bagong", "Bukang", "Mabango"], answer: "Mabango" },
      { question: "Ano ang salitang-ugat ng PINAGLABANAN?", options: ["Laban", "Labanan", "Ilaban", "Paglaban"], answer: "Laban" },
      { question: "Isang komunikasyong pampubliko na nagpapaliwanag at naghihikayat; binibigkas sa harap ng madla ay ____.", options: ["Talumpati", "Balita", "Talambuhay", "Anekdota"], answer: "Talumpati" },
      { question: "Anong uri ng sanaysay na pangkaraniwan ang paksa, waring nakikipag-usap lamang?", options: ["Masining", "Maanyo", "Malikhain", "Malaya"], answer: "Malaya" },
      { question: "Gitling ay bantas na ginagamit sa pagitan ng panlaping 'ika' at ____.", options: ["Panghalip", "Tambilang", "Pananalita", "Pangngalan"], answer: "Tambilang" },
      { question: "Anong paraan ng paglalahad ng datos ang tatlong sunod-sunod na tuldok upang ipakitang may bahagi na hindi isinama sa sinipi?", options: ["abstract", "synopsis", "ellipsis", "synthesis"], answer: "ellipsis" },
      { question: "Ang 'buhay na wika' ay wikang tumatanggap ng pagbabago nang naaayon sa panahon. Ang mga sumusunod ay mga 'buhay na wika' MALIBAN sa ____.", options: ["Intsik", "Filipino", "Ingles", "Latin"], answer: "Latin" },
      { question: "Wikang nabuo mula sa pangunahing wika ng isang lugar o lalawigan na kadalasang sinasalita sa ibang bayan ng naturang lugar ay ____.", options: ["ekolek", "dayalek", "etnolek", "sosyalek"], answer: "dayalek" },
      { question: "Ang kahulugan ng: 'in my family budget I have difficulty making both ends meet' ay _________.", options: ["bale-wela", "labis-labis", "di mapagkasya", "malapit nang maubos"], answer: "di mapagkasya" },
      { question: "Malinaw na paliwanag, matikas na tindig, at napapanahong paksa ay mahalagang salik ng ______.", options: ["pag-arte", "pag-awit", "talumpati", "kwento"], answer: "talumpati" },
      { question: "Alin sa mga sumusunod na pangatnig ang nagbibigay ng karagdagan?", options: ["kundi man", "at", "kapag", "hindi lang"], answer: "at" }

      // ...add all remaining Filipino questions here safely (comma separated)
    ],
    "English": [
      { question: "The mayor's wife is known for her &quot;fondness&quot; for signature watches and handbags. A synonym  for fondness is	.", options: ["bias", "dislike", "penchant", "selection"], answer: "penchant" },
      { question: "Guided by divine inspirations, the seer predicted Armageddon or the end of the world in his _______.", options: ["proposal", "projection", "presentation", "prophecy"], answer: "prophecy" },
      { question: "A prophet of doom predicted the end of the world in his _______.", options: ["Prophecy", "Projection", "Scenario", "Proposal"], answer: "Prophecy" },
      { question: "The Senator who sponsored the bill impressed the listeners with his CANDIDNESS. The capitalized word means _______.", options: ["energy", "pretense", "frankness", "attention"], answer: "frankness" },
      { question: "The candidate was obviously \"agitated\" as she spoke before the big audience because she showed ________.", options: ["calmness", "anger", "composure", "nervousness"], answer: "nervousness" },
      { question: "Your argument which does not support your conclusion is ______.", options: ["indifferent", "illogical", "malicious", "changeable"], answer: "illogical" },
      { question: "In our organization's assembly, we had a LOQUACIOUS speaker. The capitalized word means _____.", options: ["soft-spoken", "low-key", "lousy", "verbose"], answer: "verbose" },
      { question: "To describe an easy task, the idiomatic expression to use is ____.", options: ["spill the beans", "bite the bullet", "break a leg", "piece of cake"], answer: "piece of cake" },
      { question: "The new company which employed a quality control officer produced FIRST RATE products. The capitalized word means ____.", options: ["Mediocre", "Excellent", "Ordinary", "Simple"], answer: "Excellent" },
      { question: "The part of a newspaper or magazine article which gives the name of the writer of the article is called ____.", options: ["byline", "deadline", "headline", "banner line"], answer: "byline" },
      { question: "The proposed project ______ within the budget of the school.", options: ["are", "is appearing", "are appearing", "is"], answer: "is" },
      { question: "If you have misplaced ______ manual, I will be glad to lend you ______.", options: ["my, mine", "my, yours", "yours, yours", "your, mine"], answer: "your, mine" },
      { question: "By the time you will arrive, the meeting ____.", options: ["will have ended", "will end", "had ended", "has ended"], answer: "will have ended" },
      { question: "Had I studied very well, I ____ rewarded with vacation in the US.", options: ["Will be", "Would be", "Would have been", "Was"], answer: "Would have been" },
      { question: "Nobody wanted to do the household chores and so the senior members of the family did the chores ____.", options: ["myself", "themselves", "himself", "yourselves"], answer: "themselves" },
      { question: "Environmentalists campaign for the total ban ____ harmful insecticides.", options: ["against the use", "with using", "on the use", "on using"], answer: "on the use" },
      { question: "The fisherman uses worms as ____ for fish.", options: ["bit", "bitten", "bite", "bait"], answer: "bait" },
      { question: "The re-union was successful because the alumni coming from the different parts of the country were gathered ____ in the venue.", options: ["together all", "all together", "altogether", "togetherness"], answer: "all together" },
      { question: "The static is heard over the radio because of ____ connection.", options: ["Lose", "Lost", "Loose", "Loosen"], answer: "Loose" },
      { question: "The cause of the power interruption was ____ connection.", options: ["Lose", "Lost", "Loose", "losing"], answer: "Loose" },
      { question: "Technician Dick informed us that the cause of the TV malfunction was ____ connection.", options: ["Loosened", "Lost", "Loose", "loss"], answer: "Loose" },
      { question: "The structure collapsed because of ____ joints.", options: ["Loose", "Losing", "Lose", "Lose"], answer: "Loose" },
      { question: "Neither the teacher nor the students ____ present in the affair.", options: ["Were", "Is", "Am", "Was"], answer: "Were" },
      { question: "Every co-curricular activity has ____ merits.", options: ["Their", "Its", "It", "Theirs"], answer: "Its" },
      { question: "The committee members were annoyed with the IMPERTINENT remarks. The capitalized word means ____.", options: ["Malicious", "Important", "Unsure", "Irrelevant"], answer: "Irrelevant" },
      { question: "Despite their family’s objection, the twins decided to live by ____ in the big city.", options: ["Ourselves", "Themselves", "Oneself", "Myself"], answer: "Themselves" },
      { question: "The family members were ____ in the beach party.", options: ["Altogether", "Togetherness", "Together all", "All together"], answer: "All together" },
      { question: "The figures must be TRANSMUTED in order to understand the grade. The capitalized word means ____.", options: ["Surpassed", "Estimated", "Summed", "Changed"], answer: "Changed" },
      { question: "The empty board ____ on the table.", options: ["Were left", "Was left", "Were leaving", "Was leaving"], answer: "Was left" },
      { question: "Technology ____ dramatically in the twenty-first century.", options: ["Did improved", "Was improved", "Is improved", "Has improved"], answer: "Has improved" },
      { question: "The twenty-first century witnessed that technology _______ tremendously.", options: ["was improved", "has improved", "did improve", "is improved"], answer: "has improved" },
      { question: "Nobody was willing to do the house chores and so I did them ________.", options: ["themselves", "myself", "herself", "ourselves"], answer: "myself" },
      { question: "May’s role in the affair is to escort the guests _______ to their special seats.", options: ["myself", "ourselves", "themselves", "herself"], answer: "herself" },
      { question: "The guest will have left the hall before the food ____.", options: ["will be served", "is being served", "was served", "is served"], answer: "will be served" },
      { question: "Father finally found the time to rest after ___ all day.", options: ["Having worked", "Have worked", "Had working", "Working"], answer: "Working" },
      { question: "The carpenter finally found the time to rest after _________ the whole day.", options: ["working", "will work", "had work", "have worked"], answer: "working" },
      { question: "We failed to finish _____ work, were you able to finish ______?", options: ["our, mine", "my, ours", "your, yours", "our, yours"], answer: "our, yours" },
      { question: "At the onset of the twenty-first century, global warming _____ exacerbated.", options: ["has", "were", "have", "was"], answer: "has" },
      { question: "We admire _____ when my sister plays the violin for _____", options: ["her, them", "him, us", "her, us", "it, us"], answer: "her, us" },
      { question: "My young niece thought that our assigned task was heavy for me and especially for ____.", options: ["she", "us", "her", "mine"], answer: "her" },
      { question: "In the process of submission, one of the documents ______ misplaced.", options: ["were", "are", "was", "will be"], answer: "was" },
      { question: "What figure of speech is the following? 'He is the black sheep of the family.'", options: ["irony", "hyperbole", "simile", "metaphor"], answer: "metaphor" },

      { question: "Oh moon, why must you?", options: ["alliteration", "apostrophe", "personification", "metaphor"], answer: "apostrophe" },
      { question: "He was helpless as a child.", options: ["simile", "metaphor", "hyperbole", "personification"], answer: "simile" },
      { question: "The crown wants the taxes.", options: ["metonymy", "synecdoche", "personification", "alliteration"], answer: "metonymy" },
      { question: "It was a black tie affair.", options: ["synecdoche", "metonymy", "simile", "personification"], answer: "synecdoche" },
      { question: "Tinkle, tinkle, tinkle", options: ["alliteration", "onomatopoeia", "apostrophe", "hyperbole"], answer: "alliteration" },
      { question: "The EDSA bloodless revolution was supported by a sea of humanity.", options: ["hyperbole", "simile", "metaphor", "personification"], answer: "hyperbole" },
      { question: "It droppeth as a gentle rain from heaven.", options: ["simile", "metaphor", "personification", "alliteration"], answer: "simile" },
      { question: "My mother has a green thumb.", options: ["synecdoche", "metonymy", "hyperbole", "personification"], answer: "synecdoche" },
      { question: "The sun was gone but he has left footprints in the sky.", options: ["personification", "metaphor", "simile", "alliteration"], answer: "personification" },
      { question: "The second time, it was a snake.", options: ["metaphor", "simile", "personification", "hyperbole"], answer: "metaphor" },
      { question: "O wild west wind!", options: ["apostrophe", "alliteration", "personification", "simile"], answer: "apostrophe" },
      { question: "O wild west wind!", options: ["alliteration", "apostrophe", "metonymy", "simile"], answer: "alliteration" },
      { question: "The sun was a ball of fire over the mountain.", options: ["metaphor", "simile", "hyperbole", "personification"], answer: "metaphor" },
      { question: "She is my sunshine.", options: ["metaphor", "simile", "personification", "synecdoche"], answer: "metaphor" },
      { question: "My head is bloody but unbowed.", options: ["hyperbole", "alliteration", "metaphor", "simile"], answer: "hyperbole" },
      { question: "My head is bloody but unbowed.", options: ["alliteration", "hyperbole", "metaphor", "simile"], answer: "alliteration" },
      { question: "Sturdy and strong, the Filipinos are like the molave.", options: ["simile", "metaphor", "personification", "alliteration"], answer: "simile" },
      { question: "A tree whose hungry mouth is pressed against the earth’s sweet flowing breast.", options: ["personification", "synecdoche", "simile", "metaphor"], answer: "personification" },
      { question: "He was like a snake in the night.", options: ["simile", "metaphor", "alliteration", "personification"], answer: "simile" },
      { question: "News travel as fast as the wind.", options: ["simile", "metaphor", "hyperbole", "personification"], answer: "simile" },
      { question: "I wandered lonely as a cloud.", options: ["simile", "metaphor", "personification", "alliteration"], answer: "simile" },
      { question: "The Lord is my shepherd.", options: ["metaphor", "simile", "hyperbole", "personification"], answer: "metaphor" },
      { question: "He is the black sheep of the family.", options: ["metaphor", "simile", "hyperbole", "personification"], answer: "metaphor" },
      { question: "O souls and spirits of the martyred brave, arise!", options: ["apostrophe", "alliteration", "personification", "metaphor"], answer: "apostrophe" },
      { question: "If you want the moon, I will get it for you.", options: ["hyperbole", "simile", "metaphor", "personification"], answer: "hyperbole" },
      { question: "She was a Phantom of Delight.", options: ["metaphor", "simile", "personification", "hyperbole"], answer: "metaphor" },
      { question: "Read the paragraph and answer the statement that follows. \n \"Our extended family temporarily accommodated aunts, uncles or cousins who had important matters to settle in the city.  There were always close relatives who needed shelter and food and willing to help in the household chores.” Close relatives in an extended family are provided food and  accommodation and in turn help in the household activities, making the relationship _____.", options: ["Dependency", "Reciprocal", "Friendly", "Civil"], answer: "Reciprocal" },

      { question: "The collection of stories of animals which teach moral lessons is ________.", options: ["Aesop's Fables", "The Lion King", "Grimm's Fairy Tales", "One Thousand and One Arabian Nights"], answer: "Aesop's Fables" },
      { question: "Fables are stories with animals as characters and which teach ______ lessons.", options: ["Morale", "Morality", "Moral", "Immoral"], answer: "Moral" },
      { question: "Literary pieces that teach moral lessons are described as _____.", options: ["didactic", "theoretical", "artistic", "political"], answer: "didactic" },
      { question: "\"Ali Baba and the Forty Thieves\", \"Aladdin and the Wonderful Lamp\" and \"The Story of Sinbad\" are some of the entertaining stories in the collection entitled ____.", options: ["The Arabian Nights", "Pirates of the Caribbean", "The Magic Carpet", "The Prince in Persia"], answer: "The Arabian Nights" },
      { question: "The collection of stories and folk tales in Arabian setting which has endured the ages and continues to entertain the young and old alike through various media is entitled ____.", options: ["One Thousand and One Nights", "Ali Baba and the Forty Thieves", "The Prince of Persia", "The Magic Carpet"], answer: "One Thousand and One Nights" },
      { question: "Romeo and Juliet is to Shakespeare as Iliad and Odyssey are to ____.", options: ["Homer", "Agamemnon", "Marlowe", "Achilles"], answer: "Homer" },
      { question: "The true name of Mark Twain is ____.", options: ["Edgar Allan Poe", "George Eliot", "Samuel Clemens", "Robert Browning"], answer: "Samuel Clemens" },
      { question: "Queen Elizabeth II is the English monarch with the longest ____.", options: ["rind", "rain", "rein", "reign"], answer: "reign" },
      { question: "Haiku is traditional Japanese poem consisting of ____.", options: ["four lines that rhyme with love as topic", "eight lines ending in rhyming couplet with death as topic", "three lines totaling 17 syllables with nature as topic", "lines of poetry in free verse with ordinary things as topic"], answer: "three lines totaling 17 syllables with nature as topic" },
      { question: "A story put together through an exchange of letters is called ____ literature.", options: ["episode", "classic", "political", "epistolary"], answer: "epistolary" },
      { question: "\"Scent of Apples\", a collection of stories that succeeded with the United States audience, was written by ____.", options: ["Bienvenido Santos", "Jose Garcia Villa", "F. Sionil Jose", "Carlos Bulosan"], answer: "Bienvenido Santos" },
      { question: "The monarch of England whose strict adherence to morality influenced the struggle of good over evil in literary pieces was Queen ____.", options: ["Mary", "Elizabeth", "Sophia", "Victoria"], answer: "Elizabeth" },
      { question: "England dominated most aspects of life in Europe during the reign of England's virgin queen ____.", options: ["Queen Elizabeth II", "Queen Mary", "Queen Elizabeth I", "Queen Victoria"], answer: "Queen Elizabeth I" },
      { question: "Using George Eliot as pen name, Mary Evans wrote the classic novel entitled ____.", options: ["Little Women", "Huckleberry Finn", "Silas Marner", "Uncle Sam's Cabin"], answer: "Silas Marner" },
      { question: "The vision of Purgatory was vividly described in an allegory written by ____.", options: ["Dante Alighieri", "Christopher Marlowe", "John Milton", "Henry Longfellow"], answer: "Dante Alighieri" },
      { question: "William Shakespeare was the greatest playwright during the Period of English literature known as ____ Period.", options: ["Anglo-Saxon", "Romantic", "Victorian", "Elizabethan"], answer: "Elizabethan" },
      { question: "The celebrated play of William Shakespeare about two ill-starred lovers who come from warring families was ____.", options: ["Hamlet and Ophelia", "Anna and the King", "Anthony and Cleopatra", "Romeo and Juliet"], answer: "Romeo and Juliet" },
      { question: "All these plays were written by William Shakespeare EXCEPT ____.", options: ["Merchant of Venice", "Romeo and Juliet", "Julius Caesar", "Phantom of the Opera"], answer: "Phantom of the Opera" },
      { question: "Which portion in Portia's speech advises litigants that while seeking justice one must be able to forgive?", options: [". . .mercy is strained", ". . .it is twice blest", ". . .when mercy seasons justice", ".'tis mightier than the mightiest"], answer: ". . .when mercy seasons justice" },
      { question: "Nick Joaquin, famous Filipino playwright, essayist and fiction writer, utilized in his works ____ themes.", options: ["Filipino - American", "Filipino - Japanese", "Filipino – Chinese", "Filipino – Hispanic"], answer: "Filipino - Hispanic" },
      { question: "Nelson Mandela, black leader of multi-racial South Africa, was able to achieve the peaceful way to freedom through his campaign for ____.", options: ["unity", "supremacy", "argument", "division"], answer: "unity" },
      { question: "Read the paragraph and answer the statement that follows. \n \"I am a retired public school teacher. As a teacher, I was branded as a  terror in school. The pupils dreaded the day they would enter my class. Little did they know that behind my unpopular faade was a heart full of compassion. But how did I earn this moniker? I did not tolerate dirty pupils  pupils in my class. I wanted them to know that cleanliness of body was  good for their health. I inspected their teeth, nails, footwear,  handkerchiefs, clothes, ears noses and hair.\" This public school teacher gives much importance to her pupils' ____.", options: ["study", "cleanliness", "posture", "absence"], answer: "cleanliness" },
      { question: "Read the paragraph and answer the statement that follows. \n \"As far back as I can remember, our family had always been an extended one. Our grandmother was the mainstay in the family, the silent  strength behind our mother who is her daughter.\" The informal guide and honorary household chief in this extended family is the ____.", options: ["Daughter", "Grandmother", "Father", "Mother"], answer: "Grandmother" }

       ],
    "General Science": [
      { question: "What is the chemical symbol for water?", options: ["H2O", "O2", "CO2", "NaCl"], answer: "H2O" },
      { question: "Which planet is known as the Red Planet?", options: ["Mars", "Venus", "Jupiter", "Saturn"], answer: "Mars" }
    ],
    "Social Science": [
      { question: "Who is considered the Father of the Philippine Revolution?", options: ["Jose Rizal", "Andres Bonifacio", "Emilio Aguinaldo", "Antonio Luna"], answer: "Andres Bonifacio" },
      { question: "What is the study of societies and human behavior called?", options: ["Sociology", "Psychology", "Anthropology", "Economics"], answer: "Sociology" }
    ],
    "Math": [
      { question: "What is 12 x 8?", options: ["96", "86", "108", "112"], answer: "96" },
      { question: "What is the square root of 81?", options: ["7", "8", "9", "10"], answer: "9" }
    ]
  };

  // =========================
  // VARIABLES
  // =========================
 let currentQuestion = 0;
  let score = 0;
  let selectedQuestions = [];
  let currentCategory = "";

  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const feedbackEl = document.getElementById("feedback");
  const progressEl = document.getElementById("progress");

  const categorySection = document.getElementById("categorySection");
  const homeSection = document.getElementById("homeSection");
  const historySection = document.getElementById("historySection");
  const aboutSection = document.getElementById("aboutSection");
  const parSection = document.getElementById("par");

  /* NAVIGATION */
  document.getElementById("homeLink").onclick = () => showHome();
  document.getElementById("chaLink").onclick = () => showSection(categorySection);
  document.getElementById("historyLink").onclick = () => {
    showSection(historySection);
    displayScoreHistory();
  };
  document.getElementById("aboutLink").onclick = () => showSection(aboutSection);

  document.getElementById("backToHome").onclick =
  document.getElementById("backToHome2").onclick = () => showHome();

  document.querySelectorAll(".categoryBtn").forEach(btn => {
    btn.onclick = () => startQuiz(btn.dataset.category);
  });

  function showHome() {
    parSection.style.display = "block";
    categorySection.style.display =
    homeSection.style.display =
    historySection.style.display =
    aboutSection.style.display = "none";
  }

  function showSection(section) {
    parSection.style.display = "none";
    categorySection.style.display =
    homeSection.style.display =
    historySection.style.display =
    aboutSection.style.display = "none";
    section.style.display = "block";
  }

  function startQuiz(category) {
  currentCategory = category;
  selectedQuestions = [...questionsByCategory[category]]; // copy the array
  shuffleArray(selectedQuestions); // <-- add this line
  currentQuestion = 0;
  score = 0;
  showSection(homeSection);
  loadQuestion();
}
// Utility function to shuffle an array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}


  function loadQuestion() {
    const q = selectedQuestions[currentQuestion];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = "";
    feedbackEl.textContent = "";
    progressEl.textContent = `Question ${currentQuestion + 1} of ${selectedQuestions.length}`;

    q.options.forEach(opt => {
      const btn = document.createElement("button");
      btn.textContent = opt;
      btn.onclick = () => checkAnswer(opt);
      optionsEl.appendChild(btn);
    });
  }

  function checkAnswer(selected) {
    const correct = selectedQuestions[currentQuestion].answer;
    if (selected === correct) score++;
    feedbackEl.textContent = selected === correct ? "✅ Correct!" : `❌ Correct answer: ${correct}`;
    currentQuestion++;
    setTimeout(() => {
      currentQuestion < selectedQuestions.length ? loadQuestion() : showResults();
    }, 2000);
  }

  function showResults() {
    questionEl.textContent = "Quiz Complete!";
    optionsEl.innerHTML = "";
    feedbackEl.textContent = `Score: ${score} / ${selectedQuestions.length}`;
    progressEl.textContent = "Well done!";
    saveScore();
  }

  function saveScore() {
    const scores = JSON.parse(localStorage.getItem("scores")) || [];
    scores.push({
      date: new Date().toLocaleString(),
      category: currentCategory,
      score,
      total: selectedQuestions.length
    });
    localStorage.setItem("scores", JSON.stringify(scores));
  }

  function displayScoreHistory() {
  const scores = JSON.parse(localStorage.getItem("scores")) || [];
  const history = document.getElementById("scoreHistory");

  if (scores.length === 0) {
    history.innerHTML = "<p>No history available.</p>";
    return;
  }

  history.innerHTML = `
    <ul>
      ${scores.map(s => {
        const percentage = ((s.score / s.total) * 100).toFixed(2);
        return `
          <li>
            ${s.date} - 
            <strong>${s.category}</strong> : 
            ${s.score}/${s.total} 
            (<span>${percentage}%</span>)
          </li>
        `;
      }).join("")}
    </ul>
  `;
}

  const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.onclick = () => {
  navLinks.classList.toggle("active");
};

  showHome();
});