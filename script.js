"use strict";

// game variables
let guessesLeft = 6;

let displayGuesses = [];

const wordList = [
  {
    topic: "Dragon Ball Z Characters",
    secretWords: ["Krillin", "Raditz", "Kami", "Majin Buu", "Goten"],
    hints: [
      [
        "I'm thinking of someone bald",
        "I'm thinking of someone who's died 3 times in DBZ",
        "This character's signature move is one of the strongest in the series by a human.",
        "I'm thinking of a character with a daughter.",
        "This character has faced every major DBZ villain.",
      ],
      [
        "One of the last surviving Saiyans",
        "The first ever villain in the series",
        "The character I'm thinking of has appeared in over 40 video games",
        "I'm thinking of someone who's biologically related to a main character",
        "This character has kidnapped another character",
      ],
      [
        "This character is an Alien",
        "I'm thinking of someone very old",
        "This character created the Dragon Balls found on Earth",
        "I'm thinking of someone who's been called the Guardian of Earth",
        "This character has died twice",
      ],
      [
        "I'm thinking of a character with multiple forms",
        "This character has been killed by Goku before",
        "I'm thinking of a character who in their first appearance, had a silly and playful personality",
        "I'm thinking of someone pink.",
        "This character can mimic other characters' moves.",
      ],
      [
        "This character is biologically related to a main character.",
        "I'm thinking of one of the youngest characters in the series.",
        "I'm thinking of 1/2 of the famous fusion with another character.",
        "This character is a Saiyan-Human hybrid.",
        "The youngest super Saiyan ever.",
      ],
    ],
  },
  {
    topic: "NCAA Men's Basketball Cinderellas",
    secretWords: [
      "2006 George Mason",
      "1986 LSU",
      "2021 Oral Roberts",
      "1985 Villanova",
      "2013  Florida Gulf Coast",
    ],
    hints: [
      [
        "This team was the first team from the CAA conference to reach the Final Four",
        "I'm thinking of a team that advanced to the Final Four by eliminating the tournament's overall No. 1 seed in overtime",
        "This team is the 2nd 11 seed in history to reach the Final Four",
        "In 2006, this team's school won its first ever NCAA tournament game",
        "Their season ended when they lost 73-58 to the eventual National Champion",
      ],
      [
        "I'm thinking of the 11 seed to knock off the 1, 2, and 3 seeds in their region",
        "NBA player Tito Horford was kicked off this team before the start of the season",
        "I'm thinking of a team that survived by winning its first four games by an average of only 4 points",
        "Their dance ended when they lost 88-77 to the eventual National Champions, led by Pervis Ellison",
        "I'm thinking of a team that went on another Cinderella run the very next season as a 10 seed, however ended up exiting in the Elite 8",
      ],
      [
        "After defeating Florida, this team became the second 15 seed to advance to the Sweet 16",
        "Their run ended after a loss to Arkansas. If they had won, they would've been the first 15 seed to ever advance to the Elite 8.",
        "I'm thinking of a team whose starting guard was the first player since Steph Curry to score at least 25 points in each of the first 3 rounds.",
        "I'm thinking of a team whose university saw an estimated $300 million in media exposure as a result of their run.",
        "At the start of their game against Ohio State, this team had only a 5.1% chance to win. They won 75-72.",
      ],
      [
        "I'm thinking of the lowest ranked team to ever win the National title.",
        "I'm thinking of a team responsible for one of the biggest upsets in sports history.",
        "6 players from this team were drafted into the NBA, with 2 of them going in the first round.",
        "I'm thinking of a team who has the highest field goal percentage in Final Four history.",
        "The year after this team's tournament run, the 45 second shot clock was introduced.",
      ],
      [
        "I'm thinking of a team who in their 2nd year of full Division 1 eligibility, they took down No. 2 seed Georgetown.",
        "This team had no nationally ranked players on their roster.",
        "I'm thinking of a team given the nickname, 'Dunk City'.",
        "Their run ended when they were defeated by the Florida Gators, 60-62.",
        "I'm thinking of the first 15 seed to ever advance to the Sweet Sixteen.",
      ],
    ],
  },
  {
    topic: "The 12 Olympians",
    secretWords: ["Artemis", "Dionysus", "Hephaestus", "Athena", "Hermes"],
    hints: [
      [
        "I'm thinking of a deity associated with nature",
        "Someone who is a dancer",
        "I'm thinking of someone described to have 'a wrath like no other'",
        "A divine being who is a twin",
        "A representative of the Moon",
      ],
      [
        "I'm thinking of the last Olympian to join Mount Olympus.",
        "A being associated with Ecstasy.",
        "I'm thinking of a twice-born Olympian.",
        "Someone described as the Protector of Misfits.",
        "I'm thinking of the one who gave Midas his golden touch.",
      ],
      [
        "I'm thinking of someone referred to as the Blacksmith of the Gods.",
        "A being who was tossed off Mount Olympus.",
        "I'm thinking of someone who was married to Aphrodite.",
        "Someone who made Achilles' famous decorative shield.",
        "I'm thinking of someone whose Roman counterpart is called Vulcan.",
      ],
      [
        "According to Greek mythology, the capital of Greece is named after them.",
        "I'm thinking of one of the many war deities.",
        "I'm thinking of the one who created Medusa's snake hair.",
        "Zeus' favorite child.",
        "I'm thinking of a skilled weaver.",
      ],
      [
        "Someone who has a name similar to a famous brand.",
        "I'm thinking of one of the youngest Olympians.",
        "Someone who Hephaestus designed a helmet for.",
        "I'm thinking of a deity who was assigned the role of official messenger",
        "I'm thinking of someone who invented the lyre.",
      ],
    ],
  },
  {
    topic: "Lost Cities",
    secretWords: [
      "Memphis",
      "Xanadu",
      "Babylon",
      "Port Royal",
      "L'Anse aux Meadows",
    ],
    hints: [
      [
        "This city was the capital of the Empire where Pharaohs were crowned.",
        "I'm thinking of a city that existed for more than 3,000 years.",
        "A city that is home to the first step pyramid.",
        "I'm thinking of a city that shares a name with an American city also located on a famous river.",
        "I'm thinking of a city that began to economically decline after its country was annexed by the Romans.",
      ],
      [
        "I'm thinking of a city that Marco Polo visited in 1275 and later wrote about in his book, 'The Travels of Marco Polo'.",
        "This city shares a name with a 1980 musical starring Michael Beck, from the film 'The Warriors'.",
        "A city that was known to be the summer capital of the Mongol Yuan dynasty.",
        "I'm thinking of a city that was destroyed by the Ming Dynasty in 1369.",
        "In 2012, this city was named a World Heritage Site noted for its unique blending of Mongolian and Chinese culture.",
      ],
      [
        "I'm thinking of a city that contained one of the Seven Wonders of the Ancient World",
        "I'm thinking of a city often referenced in the Bible.",
        "This city is home to one of the most famous archeological artifacts in the world. Hint: a black basalt statue",
        "Inhabitants of this city used a base 60 system for mathematics and astronomy. The reason we still have 60 minutes in an hour and 60 seconds in a minute.",
        "The first written legal document was composed here.",
      ],
      [
        "This city was once the largest city in the Caribbean.",
        "I'm thinking of a place that was destroyed by an earthquake that then caused a tsunami.",
        "I'm thinking of a city that only existed for 37 more years after it was captured by England.",
        "This city is sometimes called 'The Sunken Pirate City'.",
        "All later attempts to rebuild this city were disrupted by fires, sea flooding and hurricanes.",
      ],
      [
        "I'm thinking of a settlement that is the first known evidence of European presence in the Americas.",
        "This site was discovered in the 1960's by Norwegian researchers tracing Leif Erikson's voyages to 'Vinland'.",
        "I'm thinking of a place whose name in French translates to 'Meadows Cove'.",
        "I'm thinking of a location that may have been used by Vikings in the summer as a temporary base before returning to Iceland/Greenland.",
        "This site;s well preserved ruins included evidence of metalworking, boat repairs, as well as weaving tools which suggested the presence of Women as well.",
      ],
    ],
  },

  {
    topic: "70's Glam Rock",
    secretWords: ["David Bowie", "Roxy Music", "T. Rex", "Queen", "KISS"],
    hints: [
      [
        "I'm thinking of an artist with at least 5 alter egos",
        "An artist who described their 9th studio album as 'plastic soul'",
        "I'm thinking of someone who is the best selling vinyl artist of the 21st century",
        "I'm thinking of a singer who shares a birthday with Elvis Presley",
        "I'm thinking of someone whose representative song was released 9 days before the Moon landing.",
      ],
      [
        "This band's keyboardist went on to become one of the most prolific producers in the world, writing/co-writing over 500 songs including Coldplay's 'Paradise'.",
        "I'm thinking of a band that influenced Def Leppard, Depeche Mode and notably, Duran Duran.",
        "This band was inducted into the Rock and Roll Hall of Fame in 2019.",
        "I'm thinking of a band whose final album was their most successful commercially and their most critically acclaimed.",
        "I'm thinking of a band from the UK that disbanded in 1983, but still occasionally reunite for live performances.",
      ],
      [
        "I'm thinking of a band that disbanded after their lead singer's death.",
        "Ringo Starr is credited as the photographer for the cover of one of this band's albums.",
        "I'm thinking of... The first ever headliners at Glastonbury.",
        "A member of this band was close friends with David Bowie, Elton John, and Ringo Starr.",
        "In 1985, their song was covered by The Power Station.",
      ],
      [
        "I'm thinking of the group that holds the Guinness World Record for the longest running fan club of a musical group.",
        "This band's lead guitarist uses a sixpence or just their fingers to play instead of a guitar pick.",
        "I'm thinking of a band whose iconic logo was designed by their lead singer. It incorporates each of the astrological signs of the members.",
        "This band released a song officially as a single after Michael Jackson suggested it backstage at their show.",
        "I'm thinking of the only band where every member is credited as the sole writer of a #1 hit song.",
      ],
      [
        "Despite being huge fans of The Beatles, this band declined an opportunity to appear in the movie 'Sgt. Pepper's Lonely Hearts Club Band'.",
        "I'm thinking of a band whose biggest hit in the US was a sentimental power ballad that two of the members didn't want on the album.",
        "I'm thinking of a band known for the fire breathing stunts at their shows.",
        "One of this band's lead singers records laying down on their back.",
        "I'm thinking of a band with an instantly recognizable logo.",
      ],
    ],
  },

  {
    topic: "Famous French Painters",
    secretWords: [
      "Pablo Picasso",
      "El Greco",
      "Salvador Dali",
      "Diego Velazquez",
      "Francisco de Goya",
    ],
    hints: [
      [
        "This artist share their surname with their mother, not their father.",
        "I'm thinking of the first artist to receive a special honor exhibition at the Louvre.",
        "I'm thinking of someone who in 1911, was accused of stealing the Mona Lisa by a friend.",
        "I'm thinking of... One of the founders of the Cubism art movement.",
        "One of this artist's most famous works depicts Nazi bombing during the Spanish Civil War.",
      ],
      [
        "I'm thinking of an artist bold enough to offer to repaint the Sistine Chapel.",
        "Their very last painted was painted (by them) to decorate their future grave.",
        "I'm thinking of a painter who famously painted Roman Catholic scenes, but according to historians, probably wasn't even catholic.",
        "I'm thinking of an artist who shared their thoughts about Michelangelo: 'could draw, but he didnt know anything about color'",
        "This artist notably influenced Picasso, Cezanne, and Manet among others.",
      ],
      [
        "I'm thinking of an artist who was kicked out of art school... twice.",
        "This artist was a big fan of Sigmund Freud.",
        "I'm thinking of someone who owned a pet anteater.",
        "I'm thinking of an artist who was forced into retirement due to Parkinson-like symptoms.",
        "I'm thinking of the person who designed the logo for Chupa Chups lollipops.",
      ],
      [
        "I'm thinking of an artist painted nude models during the Spanish Inquisition, which historically forbade nudity. As a result, it is their only surviving nude.",
        "This artist was King Philip IV's favorite painter.",
        "I'm thinking of an artist who over many years, would paint over and cover up mistakes in their paintings.",
        "This artist completed their magnum opus 4 years before their death.",
        "I'm thinking of an artist whose drawings were used as the base for a monument that can still be seen in the center of Plaza de Oriente in Madrid.",
      ],
      [
        "I'm thinking of... an artist who became deaf due to illness.",
        "This painter is considered the most important Spanish artist of the late 18th and early 19th century by many art historians.",
        "I'm thinking of an artist who painted one of their most famous paintings, a mural depicting Cronus, on the wall of their house.",
        "I'm thinking of someone who many agree painted the greatest anti-war painting of all time.",
        "This painter is someone who influenced Francisco de Zurbara, Salvador Dali, José Clemente Orozco, among others.",
      ],
    ],
  },

  {
    topic: "Female GOATs (Sports)",
    secretWords: [
      "Allyson Felix",
      "Simone Biles",
      "Mia Hamm",
      "Marta",
      "Kerri Walsh Jennings",
    ],
    hints: [
      [
        "The woman I'm thinking of is the most decorated Olympian in her sport",
        "This woman won the IAAF Female World Athlete of the Year award in 2012",
        "I'm thinking of an athlete who started her own sneaker brand",
        "I'm thinking of a woman who earned a silver medal in her Olympic debut at just 18 years old.",
        "USC named the field at one of their sports facilities after her in 2023.",
      ],
      [
        "I'm thinking of the most decorated American in her sport.",
        "In 2022, she received the Presidential Medal of Freedom.",
        "I'm thinking of a woman who broke a record held for 90 years (by a man) in 2023 when she won her 8th US title.",
        "I'm thinking of the shortest US athlete at the Rio Olympics.",
        "This woman was the first Olympian to receive a personalized Twitter emoji.",
      ],
      [
        "I'm thinking of the woman who was named FIFA World Player of the Uear in 2001 and 2002.",
        "I'm thinking of the first woman inducted into the World Football Hall of Fame",
        "The youngest female player to score 100 international goals.",
        "I'm thinking of one of only 2 women selected by Pele as one of the greatest living players.",
        "I'm thinking of... The most marketable female athlete of the 90's.",
      ],
      [
        "I'm thinking of a woman who has been named FIFA World Player of the Year in 2006, 2007, 2008, 2009, 2010, and 2018",
        "I'm thinking of an athlete who holds the record for most World Cup goals by a man or woman.",
        "She is considered the greatest female soccer player of all time.",
        "'Cry in the beginning, so you can smile in the end.'",
        "The only woman on the Maracanã sidewalk of fame.",
      ],
      [
        "I'm thinking of the most decorated player in her sport, male or female, in Olympic history.",
        "I'm thinking of a woman who pushed the popularity of her sport and  helped it become a staple of prime time programming.",
        "The woman I'm thinking of won $2.5M in prize money over her career, the most successful woman in her sport.",
        "I'm thinking of... a woman who won gold in 3 consecutive Olympics.",
        "For over a year, she went undefeated winning 19 tournaments and 112 matches, one of the longest in her sport.",
      ],
    ],
  },

  {
    topic: "Tropical Fruit",
    secretWords: ["Mango", "Breadfruit", "Eggplant", "Lychee", "Dragon Fruit"],
    hints: [
      [
        "I'm thinking of a fruit thought to have originated in Myanmar 5,000 years ago.",
        "I'm thinking of a fruit that's only grown, in the continental US, in Florida and California.",
        "The tree that bears this fruit is the National tree of Bangladesh.",
        "I'm thinking of the fruit used by the Communist Party of China in propaganda to promote their leader Mao Zedong.",
        "The oldest living tree of this fruit is located in East Khandesh and is currently 300 years old.",
      ],
      [
        "I'm thinking of a fruit said to taste like a potato.",
        "I'm thinking of a fruit that can be ground into flour.",
        "In the US, this fruit can only survive outdoors in South Florida and the Florida Keys.",
        "I'm thinking of a fruit sometimes used as a meat substitute.",
        "Pollination for this fruit occurs mainly by fruit bats.",
      ],
      [
        "I'm thinking of... a fruit in the nightshade family.",
        "The fruit I'm thinking of is a berry.",
        "There's no consensus about where this fruit originated.",
        "I'm thinking of a fruit whose flowers and leaves can be poisonous if consumed in large quantities.",
        "New Jersey is the top producer of this fruit in the United States.",
      ],
      [
        "I'm thinking of a fruit widely grown in China and India.",
        "The seeds of this fruit are poisonous.",
        "In the US, this fruit is grown in Southern Florida, California, Hawaii and Texas.",
        "This fruit's taste is described as a cross between a strawberry and a watermelon.",
        "I'm thinking of a fruit that people with latex allergies should avoid eating.",
      ],
      [
        "I'm thinking of a fruit with many names, including one that is a combination of two other fruits.",
        "The fruit I'm thinking of is native to Southern Mexico.",
        "I'm thinking of a fruit with edible seeds.",
        "The flower of this fruit only blooms at night.",
        "Because this fruit is high in lycopene, it can lower the risk of heart disease.",
      ],
    ],
  },

  {
    topic: "Carnivorous Plants",
    secretWords: [
      "Waterwheel Plant",
      "Albany Pitcher Plant",
      "Venus Flytrap",
      "Cobra Lily",
      "Sundews",
    ],
    hints: [
      [
        "The plant I'm thinking of is an endangered species.",
        "This species can be found floating amongst reeds and even rice.",
        "I'm thinking of the only plant species to have evolved carnivorous snap traps under water.",
        "I'm thinking of a plant with 1cm long traps that can efficiently catch tiny insects, small fish, and tadpoles.",
        "Invasive populations of this plant have been found in New York and Virginia.",
      ],
      [
        "This plant only grows in Western Australia with less than 5,000 left in existence.",
        "The larvae of an ant-like fly develop inside this plant and they haven't been found anywhere else.",
        "This plant is a recipient of the Royal Horticultural Society's Award of Garden Merit.",
        "Because of its rarity, this plant is highly sought after by hobbyists and at risk of poaching. ",
        "The plant I'm thinking of feeds on ants and flies, drowning then slowly dissolving the prey in its enzymes.",
      ],
      [
        "I'm thinking of a plant native to the Carolinas that can live up to 20 years.",
        "If this plant detects a forest fire, it snaps shut to survive.",
        "Although popular, they are rapidly declining in their native range and as of 2017, have a conservation status of Vulnerable.",
        "The plant I'm thinking of grows its flower taller than their traps so they don't accidentally kill their pollinators.",
        "This plant's prey includes spiders, grasshoppers, and occasionally small frogs.",
      ],
      [
        "This rare plant is native to Northern California and Oregon.",
        "I'm thinking of a plant named for its resemblance to a snake species.",
        "This plant's method of pollination is still a mystery to scientists.",
        "The translucent windows in the leaves confuse the insects, they think they're headed to an exit but they're actually going deeper into the trap.",
        "I'm thinking of a plant from the pitcher plant family. However, this plant does not have a closed top.",
      ],
      [
        "The glands from this plant produce nectar to attract prey, adhesive to trap it, and enzymes to digest them.",
        "The plant I'm thinking of makes up one of the largest groups of carnivorous plants.",
        "This plant is found in most of the United States except some portions of the Southwest.",
        "Many species of this plant self-pollinate.",
        "All species of this plant are able to move their tentacles in response to contact with prey.",
      ],
    ],
  },

  {
    topic: "National Parks in California",
    secretWords: [
      "Channel Islands",
      "Yosemite",
      "Sequoia",
      "Kings Canyon",
      "Lassen Volcanic",
    ],
    hints: [
      [
        "The park I'm thinking of is one of America's least explored national parks.",
        "Nicknamed the Galapagos of North America, 145 species exist here and nowhere else in the world.",
        "Every summer 10% of the global blue whale population gather here during feeding season.",
        "The oldest known human remains in North America were discovered here.",
        "In 1994, the most complete adult Pygmy skeleton in the world was found here.",
      ],
      [
        "In 1984 this park was designated a World Heritage Site.",
        "The park I'm thinking of was critical to the development of the National Park System.",
        "This park is home to giant Sequoia estimated to be approx 3,000 years old.",
        "The unique landforms in the park were created by glaciers.",
        "I'm thinking of a park with one of the tallest waterfalls in North America.",
      ],
      [
        "This park contains the tallest mountain in the continental United States.",
        "I'm thinking of a park where the largest tree on Earth by volume is located.",
        "This park has 3 distinct climate zones.",
        "The first National park established specifically to preserve a living organism.",
        "The first Black US National park superintendent Charles Young, was appointed to this park.",
      ],
      [
        "The Nation's Christmas Tree, the second largest giant sequoia tree, is located here.",
        "The majority of this park's area is almost entirely wilderness.",
        "The deepest canyon in the United States can be found here.",
        "Home to the big stump of the Mark Twain tree.",
        "Naturalist John Muir once called the park 'a rival to Yosemite'.",
      ],
      [
        "Home to the largest plug dome volcano in the world.",
        "This National park is one of the few places in the world where all 4 types of volcanoes can be found.",
        "In 2021, the Dixie Fire became the largest wildfire in this park's history after burning 69% of the park's total area.",
        "The largest known population of Sierra Nevada red fox, one of the rarest mammals in California, live in this park.",
        "The man this park was named after was murdered along with his friend. Their murders remain unsolved.",
      ],
    ],
  },

  {
    topic: "American Poets (Female)",
    secretWords: [
      "Phillis Wheatley",
      "Gwendolyn Brooks",
      "Sylvia Path",
      "Gertrude Stein",
      "Emily Dickinson",
    ],
    hints: [
      [
        "The woman I'm thinking of was the first African American female author of a published book of poetry.",
        "I'm thinking of a poet who had to appear before a panel that included John Hancock, to proof she was the author of her poems.",
        "In 1775, she wrote a poem in support of George Washington that drew his praises.",
        "French writer Voltaire said her work proved that 'blacks could write poetry'.",
        "After mastering English, she learned history, British Literature, Greek and Latin. At the time, an unprecedented education for a woman.",
      ],
      [
        "I'm thinking of a poet who sent her early work to Langston Hughes, Richard Wright and James Weldon Johnson, all of whom responded with letters of encouragement.",
        "I'm thinking of... The first African American woman to serve as poetry consultant to the Library of Congress.",
        "This woman was the first African American to receive a Pulitzer Prize.",
        "In 1995, she was presented the National Medal of Arts, the highest honor given to artists by the US government.",
        "Rapper Kanye West met her as a child and when prompted, quickly wrote a poem to read to her. He's since called her one of his favorite writers.",
      ],
      [
        "In 1982, this woman was awarded a Pulitzer Prize in Poetry.",
        "I'm thinking of a woman who at age 12, her IQ was recorded at around 160.",
        "Her most famous novel was originally published under a pseudonym because she didn't want her mother to read it.",
        "Her daughter objected to the making of a film about her mother and denied BBC Films the rights to her mother's property.",
        "Before writing poetry, she was a visual artist. Some of her work is now on display at the Smithsonian National Gallery.",
      ],
      [
        "She was raised in Oakland, California but moved to Paris in 1903 where she stayed for the rest of her life. She's sometimes mistaken for French.",
        "I'm thinking of a poet who hosted famous parties in Paris where Pablo Picasso, Ernest Hemingway, F. Scott Fitzgerald, Sinclair Lewis and other creatives would gather.",
        "She was a student at Harvard under William James, who later became known as the Father of American psychology.",
        "She and her partner volunteered for the American Fund for the French Wounded, and personally drove for miles delivering supplies to French hospitals.",
        "I'm thinking of the first American woman to have a public statue in New York City.",
      ],
      [
        "She has been called one of the most important figures in American poetry.",
        "She was known to live much of her life in isolation, rarely leaving her room.",
        "Her work didn't become public until after her death, when her younger sister discovered them.",
        "Her poetry was initially critiqued for disregarding common literary rules at the time, such as her use of run on sentences and odd capitalization.",
        "When she was alive she was well known in town for her gardening skills.",
      ],
    ],
  },

  {
    topic: "African American Jazz Musicians",
    secretWords: [
      "Miles Davis",
      "Duke Ellington",
      "John Coltrane",
      "Thelonious Monk",
      "Mary Lou Williams",
    ],
    hints: [
      [
        "I'm thinking of someone who dropped out of Julliard after becoming bored with school and the racism they experienced there.",
        "In 2006, they were inducted into the Rock and Roll Hall of Fame.",
        "I'm thinking of a musician who turned down an opportunity to join Duke Ellington's band.",
        "The person I'm thinking of permanently damaged their voice after not following their doctor's instructions. As a result, their voice became raspy.",
        "I'm thinking of... Someone whose mother wanted them to learn violin instead of the trumpet.",
      ],
      [
        "I'm thinking of someone who was awarded a Pulitzer Prize Special Award for music in 1999.",
        "This musician got their famous nickname from their fine manners and neat clothes.",
        "I'm thinking of... A Jazz musician who was invited to perform at the White House on their birthday.",
        "Teddy Roosevelt used to visit the neighborhood on horseback watching the kids, including this musician, play baseball.",
        "This musician's signature composition was fished out of the trash by their son.",
      ],
      [
        "In 1972, this musician sold 500,000 certified gold albums in Japan.",
        "After their death, they were canonized by the African Orthodox Church",
        "I'm thinking of someone who developed a style of improvisation later known as 'sheets of sound'.",
        "Though nameless, they created their first album as a member of the Navy band.",
        "The musician I'm thinking of was fired twice from famous bands because of their drug abuse and alcoholism.",
      ],
      [
        "I'm thinking of the second most recorded jazz composer.",
        "The musician I'm thinking of had a habit of dancing during performances in the middle of playing their instrument.",
        "One of only 5 Jazz musicians to be featured on the cover of Time magazine.",
        "5 of their recordings have been inducted into the Grammy Hall of Fame.",
        "A tape of their performance at Carnegie Hall, stored for decades at the Library of Congress, in 2005 was finally digitized, restored and released.",
      ],
      [
        "One of only a few jazz musicians to have played in all eras of jazz (from the 1920's to 1970's)",
        "The person I'm thinking of hosted musicians at their apartment where they discussed, listened to and wrote new music. Thelonious Monk, Todd Dameron, Bud Powell, Aaron Bridgers, and Billy Strayhorn were some of the attendees.",
        "I'm thinking of... one of the greatest swing pianists in the world.",
        "To support their family, they started playing piano at parties at the age of 6.",
        "The musician I'm thinking of composed for Benny Goodman, Louis Armstrong, and Tommy Dorsey among others.",
      ],
    ],
  },

  {
    topic: "#1 Hit Songs (Rap)",
    secretWords: [
      "Set Adrift on Memory Bliss",
      "Hypnotize",
      "Stand Up",
      "The Way You Move",
      "Humble",
    ],
    hints: [
      [
        "This song was released August 1991",
        "The song I'm thinking of samples Spandau Ballet's 'True'",
        "Lyric hint 🎙️: 'Baby you send me'",
        "I'm thinking of... a song that was this New Jersey group's first and only number one.",
        "The Backstreet Boys recorded their own version of this song for their 1997 album Backstreet's Back.",
      ],
      [
        "The song I'm thinking of samples Herb Alpert's song 'Rise'",
        "Though this rapper often rapped about cars, they did not actually know how to drive.",
        "This song was released March 1997",
        "The song I'm thinking of was the second single ever to debut #2 on the Billboard Hot 100.",
        "Lyric hint 🎙️: 'Hit 'em with the force like Obi'",
      ],
      [
        "The song I'm thinking of was co-produced by then-unknown Kanye West in just 5 minutes",
        "This song was this artist's first number one single and charted for 28 weeks",
        "This song was released August 2003",
        "Lyric hint 🎙️: 'Take note to the brand new dance'",
        "The music video for this song is memorable for its iconic imagery; huge beer bottles, oversized vinyls, chicken legs and chains",
      ],
      [
        "The song I'm thinking of eventually replaced this group's other hit at number one, the sixth time in history a recording artist replaced itself on the chart.",
        "This song was released August 2003",
        "In 2019, this song was performed at the Super Bowl Halftime Show",
        "Lyric hint 🎙️: 'Big girls need love too, no discrimination here",
        "The album featuring this song won Album of the Year at the Grammys, only the second hip hop album to win the award.",
      ],
      [
        "This song was released March 2017",
        "The song I'm thinking of was this artist's first number one as lead artist",
        "I'm thinking of a song that was originally intended for Gucci Mane",
        "This song is the only Rap song in 2017 to sell over 1M digital copies. In the US alone, it is 14x Platinum.",
        "Lyric hint 🎙️: 'I'm the sandman'",
      ],
    ],
  },

  {
    topic: "2x Oscar Winners (Under 30)",
    secretWords: [
      "Luise Rainer",
      "Jodie Foster",
      "Hilary Swank",
      "FINNEAS",
      "Billie Eilish",
    ],
    hints: [
      [
        "I'm thinking of... the first person to win an acting Oscar in consecutive years.",
        "In 1938, this person hosted a benefit at a Hollywood cafe for Chinese and Japanese war orphans.",
        "They were one of the organizers of a rally aimed at raising awareness to the threat posed by the Nazi movement.",
        "In 2003, they appeared in their final film.",
        "Famously said this to MGM Studio head Louis Mayer: 'Mr. Mayer, you did not make me. You are an old man. By the time I'm 40, you will be dead.'",
      ],
      [
        "The person I'm thinking of received an Emmy nomination for directing an episode of Orange Is The New Black",
        "This actor is fluent in French and often dubs themselves in French language versions of their films.",
        "I'm thinking of an actor who attended Yale, majored in African American literature and graduated magna cum laude.",
        "The youngest person to host Saturday Night Live until Drew Barrymore in 1982.",
        "I'm thinking of.. someone who was attacked by a lion on a film set.",
      ],
      [
        "The person I'm thinking of was fired from Beverly Hills 90210.",
        "I'm thinking of someone who lived in a car with their mother when they first moved to LA to pursue acting.",
        "An actor who competed in the Junior Olympics and ranked fifth in the state.",
        "Both of their Oscar winning roles required drastic physical changes.",
        "I'm thinking of.. an actor who appeared in a film that has been selected for the National Film Registry by the Library of Congress.",
      ],
      [
        "I'm thinking of a 10 time Grammy winner.",
        "The youngest person to win Producer of the Year at the Grammys, in the non-classical category.",
        "The person I'm thinking of appeared in the Disney film Turning Red.",
        "This actor has co-written and produced songs for Selena Gomez, Halsey, Camila Cabello, Tove Lo, Justin Bieber and Kid Cudi.",
        "I'm thinking of someone who once refused to help an artist co-write a song because it was inspired by their suicidal thoughts.",
      ],
      [
        "Im thinking of the youngest person in Grammy history to sweep the Big 4 categories (Record of the Year, Album of the Year, Song of the Year, Best New Artist",
        "I'm thinking of the youngest artist to reach 1 billion Spotify streams with a single project.",
        "The first artist born in the 21st century to have a number one album on the Billboard 200",
        "The person I'm thinking of has a family consisting of musicians and actors.",
        "In 2023, this actor made their acting debut in the Amazon show 'Swarm'.",
      ],
    ],
  },

  {
    topic: "NFL Wide Receivers (Top 25)",
    secretWords: [
      "Art Monk",
      "Calvin Johnson",
      "Larry Fitzgerald",
      "Randy Moss",
      "Marvin Harrison",
    ],
    hints: [
      [
        "I'm thinking of a 3x Super Bowl Champion with 12,721 career receiving yards",
        "In 2008, he was inducted into the Pro Football Hall of Fame. According to NFL Films, he received the longest standing ovation in HOF history, timed at 4 mins and 4 secs.",
        "His father is Jazz legend Thelonious Monk's first cousin.",
        "The player I'm thinking of was a unaminous All-Rookie selection.",
        "This player retired with the most consecutive games with a catch (183)",
      ],
      [
        "I'm thinking of... A 6x Pro Bowler who spent his entire career with the same team.",
        "This player holds the NFL record for most receiving yards in an NFL season.",
        "Together with Adam Thielen, this player holds the NFL record for most consecutive 100 yad receiving games.",
        "I'm thinking of a wide receiver who won the Biletnikoff Award and the Paul Warfield Trophy in the same year.",
        "In 2019, this player announced a partnership with Harvard to study the effects of cannabis on CTE.",
      ],
      [
        "I'm thinking of an 11x Pro Bowler who spent his entire career with the same team.",
        "The player I'm thinking of is the 2016 Walter Payton Man of the Year.",
        "This player was named to the NFL 100th Anniversary All-Time team",
        "This wide receiver holds the record for most receiving yards in a single postseason.",
        "The player I'm thinking of was once a ball boy for the Vikings.",
      ],
      [
        "I'm thinking of the player who holds the NFL single season touchdown reception record.",
        "This player holds the NFL single season touchdown reception record for a rookie.",
        "I'm thinking of.. a 6x Pro Bowler and one time Comeback Player of the Year.",
        "The player I'm thinking of vowed revenge against the team that passed him over in the draft. In his career, he was 7-0 against them.",
        "His donation to a Children's Hospital in West Virginia enabled them to purchase portable entertainment systems for patients.",
      ],
      [
        "I'm thinking of.. a one time Super Bowl Champion and 8x Pro Bowler.",
        "I'm thinking of one of the only 10 wide receivers in NFL history to reach 100 touchdowns.",
        "They are the first player to record 2 1,600 receiving yard seasons in NFL history.",
        "I'm thinking of a player who is the all time receiving leader for his team.",
        "At his Hall of Fame speech, he was the only inductee to acknowledge and thank the Hall of Fame's chief sculptor.",
      ],
    ],
  },

  {
    topic: "Music Duos",
    secretWords: [
      "Otis Redding and Carla Thomas",
      "Sam & Dave",
      "The White Stripes",
      "Steely Dan",
      "Wham!",
    ],
    hints: [
      [
        "I'm thinking of... The King and Queen of Soul.",
        "Their first album only contains one original song, co-written by 1/2 of the duo.",
        "I'm thinking of a duo that only completed one album together.",
        "I'm thinking of... a duo made up of two already successful solo artists from the 60's.",
        "Jim Stewart produced their duet album in the hopes of replicating Marvin Gaye's success with duets.",
      ],
      [
        "I'm thinking of a duo that influenced Tom Petty, Elvis Costello, Al Green, Billy Joel, Bruce Springsteen and The Jackson 5.",
        "According to the Rock & Roll Hall of Fame. this duo is the most successful soul duo ever.",
        "One of this group's most successful songs was written after Isaac Hayes tried to hurry David Porter out of the bathroom.",
        "This duo's biggest hit was inducted into the Grammy Hall of Fame in 1999",
        "Despite their success, this duo didn't like each other at all. According to one of the members, they didn't speak to each other offstage for 13 years.",
      ],
      [
        "I'm thinking of a duo that was once married to each other.",
        "This duo is famously associated with 3 colors.",
        "Their most commercially successful song is known for its ubiquitous opening guitar riff.",
        "This duo has won 6 Grammys, including for Best Alternative Album.",
        "One of this duo's members has produced and written songs with Alicia Keys, Loretta Lynn, Insane Clown Posse, Beck and Beyonce.",
      ],
      [
        "One member of this duo suffered from severe stage fright.",
        "This duo heavily relied on skilled session musicians, some of whom would go on to become members of Toto and The Doobie Brothers.",
        "I'm thinking of a duo with 7 platinum albums.",
        "I'm thinking of... a duo named after a sex toy.",
        "According to fans, this duo has no conventional love songs.",
      ],
      [
        "The duo I'm thinking of were only together for 5 years, yet they sold over 30 million records.",
        "I'm thinking of a duo that scored 3 consecutive Billboard number 1's",
        "The members of this duo met as kids and were friends for years before starting their group.",
        "One of their biggest hits was actually already on the demo tape that earned them their first record deal.",
        "I'm thinking of a duo that had 6 UK number one singles and 5 Top Ten hits with only 2 recorded albums.",
      ],
    ],
  },

  {
    topic: "Aquatic Mammals",
    secretWords: [
      "Beaver",
      "Capybara",
      "Hippopotamus",
      "Walrus",
      "Humpback Whale",
    ],
    hints: [
      [
        "I'm thinking of.. the largest rodent in North America",
        "This animal tends to be most active at night.",
        "The mammal I'm thinking of can stay underwater for 6-8 minutes.",
        "This mammal is monogamous and mates for life.",
        "I'm thinking of an animal whose diet consists of bark, leaves, and twigs.",
      ],
      [
        "I'm thinking of the largest rodent in the world.",
        "This animal's teeth never stop growing.",
        "I'm thinking of a mammal that lives in groups and has unique vocalizations.",
        "This mammal regularly eats it's own poop.",
        "On land, this mammal can run as fast as a horse.",
      ],
      [
        "I'm thinking of a mammal with a Greek name.",
        "This animal shares a common ancestor with whales.",
        "I'm thinking of an animal that mates and gives birth in the water.",
        "This mammal is unable to swim.",
        "The mammal I'm thinking of produces their own natural sunscreen.",
      ],
      [
        "I'm thinking of a mammal that can move as fast as a running human.",
        "This animal's skin can turn pink, even sometimes white.",
        "I'm thinking of an animal that sings sometimes for up to 65 hours.",
        "A group can generate so much heat huddling together that sometimes a cloud of fog forms above them.",
        "I'm thinking of an animal that was hunted and killed for their blubber in the 19th century.",
      ],
      [
        "This animal typically migrates 9,900 miles each year.",
        "I'm thinking of a mammal that uses bubbles to catch prey.",
        "The song the males of this species produce are the most complex of any animal",
        "I'm thinking of.. an animal that can live for 80-90 years.",
        "This mammal lives in all the world's oceans.",
      ],
    ],
  },

  {
    topic: "Australian Chart Toppers (ARIA)",
    secretWords: ["Sia", "Tame Impala", "Kylie Minogue", "Jet", "Flume"],
    hints: [
      [
        "I'm thinking of a prolific songwriter who has written hits for Rihanna, Beyonce, David Guetta, Jessie J, Kelly Clarkson and more",
        "The artist I'm thinking of is the most streamed Australian artist in the world with 15 songs over 1 billion streams.",
        "This musician won a Razzie for Worst Director for their debut film",
        "I'm thinking of someone who famously despises fame and being famous.",
        "They have been nominated for 3 Golden Globes and 9 Grammys, though they've never won any of the nominations.",
      ],
      [
        "When this artist signed their record deal, they said they were too shy to tell the label they were actually a solo artist.",
        "This artist's album was the first Australian album to win NME's Album of the Year",
        "All of this artist's studio material is written, recorded and produced by them. However, when performing live they perform as a band with up to 6 members.",
        "In 2021, this artist's song was covered by The Wiggles and went #1 on triple j's Hottest 100",
        "I'm thinking of an artist who has produced music for Dua Lipa, Lady Gaga, Travis Scott, The Weeknd and Kali Uchis",
      ],
      [
        "I'm thinking of.. the highest selling Australian solo artist of all time.",
        "This artist's songs have been covered by U2, Tame Impala, The Flaming Lips, and Pet Shop Boys among others",
        "This person's mother was a Ten Pound Pom and was on the same boat as the Bee Gees",
        "This artist collaborated with Prince in the 90's but the cassette tape containing the demo went missing.",
        "The INXS song Suicide Blonde's title derives from a conversation Michael Hutchence had with this artist.",
      ],
      [
        "This artist's biggest hit in the US appeared on Madden NFL 2004, Rock Band, Guitar Hero and in an iconic iPod commercial.",
        "I'm thinking of the artist that notoriously received a 0.0 rating from Pitchfork and their shortest review ever.",
        "In 2023, they were inducted into the ARIA Hall of Fame",
        "I'm thinking of a band that disbanded but reunited 5 years later to open for Bruce Springsteen",
        "This artist is named after their favorite Wings song",
      ],
      [
        "I'm thinking of an artist credited with popularizing the future bass genre",
        "As a producer, this artist has worked on Vince Staples' 'Yeah Right' and Lorde's 'The Louvre'",
        "I'm thinking of an Australian artist who won a Grammy for Best Dance Album",
        "Their stage name is from a Bon Iver song that they were obsessed with at the time",
        "Their father owned a production company and asked if they could make music for some of the ads. Their first job at 14.",
      ],
    ],
  },
];

// event listeners for buttons: roll a topic
document.querySelector(".dice").addEventListener("click", function () {
  let randomTopicIndex = Math.floor(Math.random() * 18);
  // 18 topics at the moment as of 4/15
  let randomIndex = Math.floor(Math.random() * 5); // should match the secret word to an array of hints (only 5 secret words now)
  const displayTopic = document.querySelector(".topicBox");

  displayTopic.textContent = wordList[randomTopicIndex].topic;
  // GOOD: it works~! console.log(wordList[randomTopicIndex].secretWords[randomIndex]);

  // event listeners for buttons: checking a guess
  document.querySelector(".checkGuess").addEventListener("click", function () {
    let playerGuess = document.querySelector("#guess").value;
    displayGuesses.push(playerGuess);

    const guessMessage = document.querySelector(".displayGuess");

    let currentSecretWord = wordList[randomTopicIndex].secretWords[randomIndex];

    // if guess contains part of secret word
    if (
      currentSecretWord.includes(playerGuess) &&
      playerGuess !== currentSecretWord
    ) {
      console.log("This guess is missing the full name or year."); // there's a lot of errors because of the event handlers load(?) the only way to fix it for now is to just reload the page, using the play again button causes some weird stuff to happen
      guessMessage.textContent =
        "Please include the full name/year/correct punctuation in your answer!";
      guessMessage.style.backgroundColor = "#b6d80a";

      // don't update displayGuesses array or guesses left
      const index = displayGuesses.indexOf(playerGuess);
      if (index > -1) {
        displayGuesses.splice(index, 1);
      }
      guessesLeft = guessesLeft + 0;

      // update guesses left
      document.querySelector(".guessesLeft").textContent = guessesLeft;
    } else {
      // if guess is valid but wrong
      if (playerGuess !== "" && playerGuess !== currentSecretWord) {
        guessMessage.textContent = "Incorrect ❌";
        guessMessage.style.backgroundColor = "#ef1f22";

        // update guesses
        guessesLeft -= 1;
        document.querySelector(".guessesLeft").textContent = guessesLeft;

        if (guessesLeft > 0) {
          for (let i = 0; i < displayGuesses.length; i++) {
            document.querySelector(
              `#guess${i}`
            ).textContent = `${displayGuesses[i]}`;
          }
        }
      }

      if (guessesLeft === 0) {
        guessMessage.textContent = currentSecretWord;
        guessMessage.style.backgroundColor = "#f29109";
      }
    }

    // if guess is right
    if (playerGuess == currentSecretWord) {
      guessMessage.textContent = "Correct ✅";
      guessMessage.style.backgroundColor = "#55ed55";
    }

    // if guess is null - worry about this later
  });

  // event listeners for buttons: show hint
  document.querySelector(".hint").addEventListener("click", function () {
    let randomHint = Math.floor(Math.random() * 5); // gonna only allow 5 hints

    const displayHint = document.querySelector(".displayHint");
    const arrowUp = document.querySelector(".arrow-up");
    const closeBtn = document.querySelector(".close");

    displayHint.style.opacity = 1;

    // add animation
    arrowUp.classList.add("hidden");
    displayHint.classList.add("hidden");

    displayHint.innerHTML = `<button class="close">×</button> ${wordList[randomTopicIndex].hints[randomIndex][randomHint]}`;

    arrowUp.style.opacity = 1;

    // close the hint window if button is pressed
    document.querySelector(".close").addEventListener("click", function () {
      // remove animation

      displayHint.style.opacity = 0;
      displayHint.style.zIndex = 0;
      arrowUp.style.opacity = 0;
      closeBtn.style.opacity = 0;
    });
  });
});

// restart game function
document.querySelector(".playAgain").addEventListener("click", function () {
  window.location.reload(); // a solution for now for the weird event handler thing
});
