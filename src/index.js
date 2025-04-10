// Hide country info on "Explore More" button click
document.getElementById('explore-more-btn').addEventListener('click', () => {
    document.getElementById('country-info').style.display = 'none';
});

document.addEventListener('DOMContentLoaded', () => {
    const map = L.map('map', {
        center: [20, -70],
        zoom: 2,
        zoomSnap: 0.1,
        zoomDelta: 0.5,
        scrollWheelZoom: false,
        dragging: true,
        zoomControl: false,
        touchZoom: false,
        doubleClickZoom: false,
        boxZoom: false,
        maxBounds: [
            [-80, -180],
            [90, 180]
        ],
        maxBoundsViscosity: 1.0
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    map.invalidateSize()

    const countryData = {
        "Afghanistan": {
            code: "af",
            description: "Afghanistan is a landlocked country with a rich history, known for its mountains, ancient Silk Road heritage, and diverse cultures."
        },
        "Antarctica": {
            "code": "aq",
            "description": "Antarctica is Earth’s southernmost continent, home to the South Pole, vast ice sheets, and a surprising amount of wildlife like penguins and seals. It’s uninhabited by permanent residents and protected for scientific research."
        },
        "Albania": {
            code: "al",
            description: "Albania offers beautiful beaches along the Ionian and Adriatic Seas, ancient ruins, and picturesque landscapes."
        },
        "Algeria": {
            code: "dz",
            description: "Algeria is home to vast deserts, including the Sahara, and has rich Berber and Arab cultures, along with Roman and French colonial history."
        },
        "Andorra": {
            code: "ad",
            description: "Andorra is a tiny country in the Pyrenees, famous for its ski resorts and tax-free shopping."
        },
        "Angola": {
            code: "ao",
            description: "Angola has diverse landscapes, from beaches to rainforests and savannas, and is rich in oil and diamond resources."
        },
        "Antigua": {
            code: "ag",
            description: "Antigua and Barbuda is a tropical paradise with pristine beaches, coral reefs, and a colonial heritage."
        },
        "Argentina": {
            code: "ar",
            description: "Argentina is famous for its tango, Patagonia, the Andes, and its culinary delights like steaks and wines."
        },
        "Armenia": {
            code: "am",
            description: "Armenia is an ancient country with a rich cultural heritage, known for its medieval monasteries and mountainous landscapes."
        },
        "Australia": {
            code: "au",
            description: "Australia is known for its unique wildlife, beaches, the Great Barrier Reef, and vibrant cities like Sydney and Melbourne."
        },
        "Austria": {
            code: "at",
            description: "Austria is renowned for its classical music heritage, the Alps, beautiful cities like Vienna, and its winter sports."
        },
        "Azerbaijan": {
            code: "az",
            description: "Azerbaijan offers a mix of modern cities, ancient traditions, and unique landscapes from the Caspian Sea to the Caucasus Mountains."
        },
        "The Bahamas": {
            code: "bs",
            description: "The Bahamas is a tropical paradise with over 700 islands, famous for its turquoise waters, coral reefs, and white sandy beaches."
        },
        "Bahrain": {
            code: "bh",
            description: "Bahrain is a small island nation known for its financial industry, rich Arabian history, and modern infrastructure."
        },
        "Bangladesh": {
            code: "bd",
            description: "Bangladesh is a densely populated country with a rich history, ancient temples, and a growing economy, especially in textiles."
        },
        "Barbados": {
            code: "bb",
            description: "Barbados is a Caribbean island known for its beaches, cricket, rum, and vibrant culture."
        },
        "Belarus": {
            code: "by",
            description: "Belarus offers vast forests and lakes, medieval castles, and a rich Soviet history, along with cultural sites like Minsk."
        },
        "Belgium": {
            code: "be",
            description: "Belgium is famous for its medieval towns, Renaissance architecture, chocolates, waffles, and beer."
        },
        "Belize": {
            code: "bz",
            description: "Belize offers Mayan ruins, tropical rainforests, and pristine beaches along the Caribbean coast."
        },
        "Benin": {
            code: "bj",
            description: "Benin has a rich cultural heritage, including ancient kingdoms and the birthplace of the Vodun (Voodoo) religion."
        },
        "Bhutan": {
            code: "bt",
            description: "Bhutan is known for its stunning Himalayan scenery, its commitment to Gross National Happiness, and unique Buddhist culture."
        },
        "Bolivia": {
            code: "bo",
            description: "Bolivia offers diverse landscapes, from the Andean mountains to the salt flats of Uyuni and the Amazon rainforest."
        },
        "Bosnia": {
            code: "ba",
            description: "Bosnia and Herzegovina is known for its medieval villages, stunning mountains, and the historic city of Sarajevo."
        },
        "Botswana": {
            code: "bw",
            description: "Botswana is famous for its wildlife, including the Okavango Delta and Kalahari Desert, and offers some of Africa’s best safari experiences."
        },
        "Brazil": {
            code: "br",
            description: "Brazil is known for its vibrant culture, Amazon rainforest, beautiful beaches, and lively Carnival celebrations."
        },
        "Brunei": {
            code: "bn",
            description: "Brunei is a small, wealthy country known for its rainforests, Islamic architecture, and oil reserves."
        },
        "Bulgaria": {
            code: "bg",
            description: "Bulgaria offers ancient monasteries, beautiful Black Sea beaches, and a rich history dating back to the Thracian civilization."
        },
        "Burkina": {
            code: "bf",
            description: "Burkina Faso is known for its vibrant arts scene, including music and dance, and its rich cultural traditions."
        },
        "Burundi": {
            code: "bi",
            description: "Burundi is a small landlocked country in East Africa, known for its mountainous terrain and its people’s strong community ties."
        },
        "Cabo Verde": {
            code: "cv",
            description: "Cabo Verde is an archipelago known for its volcanic landscapes, beautiful beaches, and rich Afro-Portuguese culture."
        },
        "Cambodia": {
            code: "kh",
            description: "Cambodia is home to the ancient temple complex of Angkor Wat, as well as a rich history, culture, and stunning rural landscapes."
        },
        "Cameroon": {
            code: "cm",
            description: "Cameroon is known for its diverse geography, from rainforests to deserts, and rich cultural traditions."
        },
        "Canada": {
            code: "ca",
            description: "Canada is famous for its natural beauty, from the Rocky Mountains to Niagara Falls, and vibrant cities like Toronto and Vancouver."
        },
        "Central African Republic": {
            code: "cf",
            description: "Central African Republic is a landlocked country known for its rainforests and wildlife, including gorillas and elephants."
        },
        "Chad": {
            code: "td",
            description: "Chad offers diverse landscapes, from the Sahara Desert to the Sahel, and is home to several unique ethnic groups."
        },
        "Chile": {
            code: "cl",
            description: "Chile is famous for its long, narrow geography, from the Atacama Desert to Patagonia, and its beautiful landscapes and wines."
        },
        "China": {
            code: "cn",
            description: "China is known for its ancient civilization, including the Great Wall, Forbidden City, and the Terracotta Warriors."
        },
        "Colombia": {
            code: "co",
            description: "Colombia is known for its vibrant culture, coffee, the Amazon rainforest, and its historic cities like Cartagena."
        },
        "Comoros": {
            code: "km",
            description: "Comoros is an island nation in the Indian Ocean, known for its volcanic islands, beaches, and unique blend of African and Arabic culture."
        },
        "The Republic of the Congo": {
            code: "cg",
            description: "The Republic of the Congo is home to vast rainforests, diverse wildlife, and the bustling city of Brazzaville."
        },
        "Costa Rica": {
            code: "cr",
            description: "Costa Rica is famous for its biodiversity, rainforests, beaches, and commitment to environmental conservation."
        },
        "Croatia": {
            code: "hr",
            description: "Croatia offers a stunning coastline along the Adriatic, historic towns like Dubrovnik, and beautiful national parks."
        },
        "Cuba": {
            code: "cu",
            description: "Cuba is known for its vibrant culture, colonial architecture, beautiful beaches, and classic American cars."
        },
        "Cyprus": {
            code: "cy",
            description: "Cyprus offers ancient ruins, beautiful beaches, and a unique blend of Greek and Turkish cultures."
        },
        "Czechia": {
            code: "cz",
            description: "Czechia (Czech Republic) is known for its medieval towns, castles, and beer culture, particularly in Prague."
        },
        "Democratic Republic of the Congo": {
            code: "cd",
            description: "The Democratic Republic of the Congo is known for its rainforests, wildlife, and the Congo River, but also struggles with political instability."
        },
        "Denmark": {
            code: "dk",
            description: "Denmark is a country with a rich history, including Viking heritage, and is known for its modern design and sustainability."
        },
        "Djibouti": {
            code: "dj",
            description: "Djibouti is a small country in the Horn of Africa, known for its strategic location, deserts, and beautiful coastal areas."
        },
        "Dominica": {
            code: "dm",
            description: "Dominica is a Caribbean island known for its rainforests, volcanoes, and hot springs."
        },
        "The Dominican Republic ": {
            code: "do",
            description: "The Dominican Republic is known for its beautiful beaches, colonial architecture, and vibrant music and culture."
        },
        "Ecuador": {
            code: "ec",
            description: "Ecuador is famous for the Galápagos Islands, the Andes mountains, and the Amazon rainforest, offering diverse ecosystems and rich cultural history."
        },
        "Egypt": {
            code: "eg",
            description: "Egypt is home to the ancient Pyramids of Giza, the Nile River, and the Valley of the Kings, with a rich history dating back thousands of years."
        },
        "El Salvador": {
            code: "sv",
            description: "El Salvador offers stunning beaches, volcanoes, and a rich history, including Mayan ruins and a vibrant local culture."
        },
        "Equatorial": {
            code: "gq",
            description: "Equatorial Guinea is known for its coastal areas, rainforests, and a mix of Spanish and African cultural influences."
        },
        "Eritrea": {
            code: "er",
            description: "Eritrea is an East African country with a Red Sea coastline, rich history, and diverse ethnic groups."
        },
        "Estonia": {
            code: "ee",
            description: "Estonia is known for its medieval cities like Tallinn, beautiful forests, and a strong digital society."
        },
        "Eswatini": {
            code: "sz",
            description: "Eswatini (formerly Swaziland) offers cultural festivals, nature reserves, and stunning landscapes, including mountains and savannas."
        },
        "Ethiopia": {
            code: "et",
            description: "Ethiopia is famous for its ancient civilization, including the rock-hewn churches of Lalibela and the historical city of Axum."
        },
        "Fiji": {
            code: "fj",
            description: "Fiji is a Pacific island nation known for its coral reefs, clear waters, and vibrant Polynesian culture."
        },
        "Finland": {
            code: "fi",
            description: "Finland is renowned for its stunning natural beauty, including the Northern Lights, Lapland, and a high standard of living."
        },
        "France": {
            code: "fr",
            description: "France is known for its rich history, art, and culture, including the Eiffel Tower, the Louvre Museum, and the French Riviera."
        },
        "Gabon": {
            code: "ga",
            description: "Gabon offers lush rainforests, wildlife, and a growing economy with rich natural resources."
        },
        "The Gambia": {
            code: "gm",
            description: "The Gambia is a small country in West Africa, known for its river, national parks, and vibrant culture."
        },
        "Georgia": {
            code: "ge",
            description: "Georgia is known for its ancient history, stunning landscapes, including the Caucasus Mountains, and unique culture and wine-making traditions."
        },
        "Germany": {
            code: "de",
            description: "Germany offers rich history, world-class cities like Berlin, Bavaria's castles, and diverse landscapes, including the Black Forest."
        },
        "Ghana": {
            code: "gh",
            description: "Ghana is known for its vibrant culture, historical slave trade forts, and stunning beaches along the Atlantic coast."
        },
        "Greece": {
            code: "gr",
            description: "Greece is famous for its ancient ruins, including the Acropolis and the Parthenon, along with beautiful islands and Mediterranean beaches."
        },
        "Grenada": {
            code: "gd",
            description: "Grenada is known for its spice production, particularly nutmeg, and its stunning beaches and crystal-clear waters."
        },
        "Guatemala": {
            code: "gt",
            description: "Guatemala is home to Mayan ruins like Tikal, volcanic landscapes, and colorful indigenous culture."
        },
        "Guinea": {
            code: "gn",
            description: "Guinea offers tropical forests, savannas, and a rich cultural heritage, including traditional music and dance."
        },
        "Guinea-Bissau": {
            code: "gw",
            description: "Guinea-Bissau is known for its diverse wildlife, mangrove swamps, and vibrant local culture."
        },
        "Guyana": {
            code: "gy",
            description: "Guyana is known for its lush rainforests, waterfalls, and its blend of indigenous, African, and South Asian cultures."
        },
        "Haiti": {
            code: "ht",
            description: "Haiti offers mountainous terrain, vibrant art and music, and a rich history that includes the first successful slave revolt."
        },
        "Honduras": {
            code: "hn",
            description: "Honduras is famous for its Caribbean coast, Mayan ruins at Copán, and tropical rainforests."
        },
        "Hungary": {
            code: "hu",
            description: "Hungary is known for its historic architecture, thermal baths, and the Danube River that flows through Budapest."
        },
        "Iceland": {
            code: "is",
            description: "Iceland is famous for its dramatic landscapes, including volcanoes, geysers, glaciers, and the Northern Lights."
        },
        "India": {
            code: "in",
            description: "India is a land of vibrant culture, ancient temples, the Taj Mahal, the Himalayas, and a rich diversity of languages and traditions."
        },
        "Indonesia": {
            code: "id",
            description: "Indonesia is known for its tropical islands, including Bali, its volcanic landscapes, and diverse cultures and traditions."
        },
        "Iran": {
            code: "ir",
            description: "Iran offers a rich history, ancient ruins, beautiful landscapes, and a deep cultural heritage tied to Persian civilization."
        },
        "Iraq": {
            code: "iq",
            description: "Iraq is home to ancient civilizations such as Mesopotamia, with historical sites like Babylon and the Ziggurat of Ur."
        },
        "Ireland": {
            code: "ie",
            description: "Ireland is known for its lush green landscapes, historic castles, and lively pubs offering traditional music."
        },
        "Palestine": {
            code: "ps",
            description: "Palestine Knows as the most beautiful country and has a really nice people which they are Suffering from the occupation ."
        },
        "Italy": {
            code: "it",
            description: "Italy offers historical landmarks, from the Colosseum to the canals of Venice, as well as renowned food, art, and fashion."
        },
        "Ivory Coast": {
            code: "ci",
            description: "Ivory Coast (Côte d'Ivoire) is known for its cultural diversity, beaches, and rich history, including colonial French influences."
        },
        "Jamaica": {
            code: "jm",
            description: "Jamaica is famous for its reggae music, beautiful beaches, and vibrant culture."
        },
        "Japan": {
            code: "jp",
            description: "Japan blends modern technology with rich traditions, including ancient temples, Mount Fuji, and the cherry blossoms of spring."
        },
        "Jordan": {
            code: "jo",
            description: "Jordan is known for its ancient ruins, such as Petra, and the Dead Sea, along with desert landscapes and hospitable culture."
        },
        "Kazakhstan": {
            code: "kz",
            description: "Kazakhstan offers vast steppes, historic Silk Road sites, and modern cities like Almaty and Nur-Sultan."
        },
        "Kenya": {
            code: "ke",
            description: "Kenya is renowned for its safaris in the Maasai Mara, its beautiful beaches, and diverse wildlife."
        },
        "Kiribati": {
            code: "ki",
            description: "Kiribati is an island nation in the Pacific Ocean, known for its remote atolls and vibrant marine life."
        },
        "North Korea ": {
            code: "kp",
            description: "North Korea is known for its secrecy, with a strict regime, historical landmarks, and a unique political system."
        },
        "South Korea ": {
            code: "kr",
            description: "South Korea offers modern cities like Seoul, along with a deep cultural heritage, K-pop, and beautiful landscapes."
        },
        "Kuwait": {
            code: "kw",
            description: "Kuwait is a small, wealthy country known for its oil reserves, modern infrastructure, and historical landmarks."
        },
        "Kyrgyzstan": {
            code: "kg",
            description: "Kyrgyzstan is known for its mountainous landscapes, nomadic culture, and stunning lakes like Issyk-Kul."
        },
        "Laos": {
            code: "la",
            description: "Laos is a landlocked country in Southeast Asia, known for its Buddhist temples, French colonial architecture, and scenic rivers."
        },
        "Latvia": {
            code: "lv",
            description: "Latvia offers a beautiful Baltic coastline, medieval architecture in Riga, and extensive forests."
        },
        "Lebanon": {
            code: "lb",
            description: "Lebanon is famous for its Mediterranean coastline, historic ruins, vibrant cities like Beirut, and rich cultural diversity."
        },
        "Lesotho": {
            code: "ls",
            description: "Lesotho is a high-altitude country in southern Africa, known for its mountainous terrain, wildlife, and cultural heritage."
        },
        "Liberia": {
            code: "lr",
            description: "Liberia is known for its West African coastline, rainforests, and a unique history as a country founded by freed slaves."
        },
        "Libya": {
            code: "ly",
            description: "Libya has a rich ancient history, with ruins from the Roman era, along with vast deserts and Mediterranean coastline."
        },
        "Liechtenstein": {
            code: "li",
            description: "Liechtenstein is a small, landlocked country known for its alpine scenery, castles, and strong financial sector."
        },
        "Lithuania": {
            code: "lt",
            description: "Lithuania is known for its medieval architecture, beautiful landscapes, and a rich cultural history, particularly in Vilnius."
        },
        "Luxembourg": {
            code: "lu",
            description: "Luxembourg is a small, wealthy country with medieval castles, lush forests, and a vibrant financial center."
        },
        "Madagascar": {
            code: "mg",
            description: "Madagascar is famous for its unique wildlife, including lemurs, and its biodiversity, with rainforests and desert landscapes."
        },
        "Malawi": {
            code: "mw",
            description: "Malawi is known for its beautiful Lake Malawi, mountain ranges, and diverse wildlife, including safaris in its national parks."
        },
        "Malaysia": {
            code: "my",
            description: "Malaysia offers a mix of modern cities, stunning beaches, the rainforests of Borneo, and rich cultural heritage."
        },
        "Maldives": {
            code: "mv",
            description: "Maldives is known for its idyllic coral reefs, luxury resorts, and crystal-clear waters in the Indian Ocean."
        },
        "Mali": {
            code: "ml",
            description: "Mali is famous for its ancient cities, such as Timbuktu, and its rich history and cultural heritage in West Africa."
        },
        "Malta": {
            code: "mt",
            description: "Malta offers a rich history, beautiful Mediterranean coastlines, and unique historical landmarks, including the ancient temples of Hagar Qim."
        },
        "The Marshall Islands": {
            code: "mh",
            description: "The Marshall Islands is a Pacific island nation known for its pristine beaches, coral reefs, and a history related to World War II."
        },
        "Mauritania": {
            code: "mr",
            description: "Mauritania is known for its vast desert landscapes, including the Sahara, and a rich cultural heritage with influences from Arab and African traditions."
        },
        "Mauritius": {
            code: "mu",
            description: "Mauritius is a beautiful island in the Indian Ocean, famous for its beaches, lagoons, and mountainous interior."
        },
        "Mexico": {
            code: "mx",
            description: "Mexico offers diverse landscapes, from beaches to mountains, rich culture, and ancient ruins, including the Maya and Aztec civilizations."
        },
        "Micronesia": {
            code: "fm",
            description: "Micronesia is a collection of islands in the Pacific, known for its tropical climates, coral reefs, and World War II history."
        },
        "Moldova": {
            code: "md",
            description: "Moldova is a small country in Eastern Europe, known for its wine production, rural landscapes, and historical monasteries."
        },
        "Monaco": {
            code: "mc",
            description: "Monaco is a small, wealthy principality known for its glamorous casinos, luxury yachts, and the Monte Carlo Grand Prix."
        },
        "Mongolia": {
            code: "mn",
            description: "Mongolia is famous for its vast steppes, nomadic culture, and the ancient city of Karakorum, along with rich history tied to the Mongol Empire."
        },
        "Montenegro": {
            code: "me",
            description: "Montenegro offers beautiful Adriatic coastlines, rugged mountains, and a rich cultural and medieval heritage."
        },
        "Morocco": {
            code: "ma",
            description: "Morocco is known for its bustling souks, desert landscapes, and historical sites such as the city of Marrakech and the Atlas Mountains."
        },
        "Mozambique": {
            code: "mz",
            description: "Mozambique is famous for its beautiful coastline, vibrant cultures, and rich biodiversity in its national parks."
        },
        "Myanmar": {
            code: "mm",
            description: "Myanmar (formerly Burma) is known for its golden temples, pagodas, and rich Buddhist heritage, as well as its natural beauty."
        },
        "Namibia": {
            code: "na",
            description: "Namibia offers vast desert landscapes, including the iconic dunes of Sossusvlei, along with incredible wildlife in Etosha National Park."
        },
        "Nauru": {
            code: "nr",
            description: "Nauru is a small island nation in the Pacific, known for its phosphate mining industry and pristine beaches."
        },
        "Nepal": {
            code: "np",
            description: "Nepal is famous for the Himalayan mountains, including Mount Everest, and its rich Buddhist and Hindu heritage."
        },
        "The Netherlands": {
            code: "nl",
            description: "The Netherlands is known for its windmills, tulips, bike-friendly cities, and its cultural heritage including famous painters like Van Gogh."
        },
        "New Zealand": {
            code: "nz",
            description: "New Zealand offers stunning landscapes, from beaches to mountains, as well as a rich Maori culture and outdoor adventure opportunities."
        },
        "Nicaragua": {
            code: "ni",
            description: "Nicaragua is known for its volcanic landscapes, beautiful lakes, and colonial cities like Granada."
        },
        "Niger": {
            code: "ne",
            description: "Niger is a landlocked country in West Africa, known for its vast desert landscapes, particularly the Sahara, and rich cultural diversity."
        },
        "Nigeria": {
            code: "ng",
            description: "Nigeria is Africa's most populous country, known for its vibrant cities like Lagos, rich cultural heritage, and diverse ethnic groups."
        },
        "North Macedonia": {
            code: "mk",
            description: "North Macedonia (formerly Macedonia) is known for its picturesque lakes, including Lake Ohrid, and its rich Byzantine history."
        },
        "Norway": {
            code: "no",
            description: "Norway is famous for its dramatic fjords, the Northern Lights, and vibrant cities like Oslo and Bergen."
        },
        "Oman": {
            code: "om",
            description: "Oman offers beautiful deserts, beaches, and mountains, as well as a rich cultural heritage and historic forts."
        },
        "Pakistan": {
            code: "pk",
            description: "Pakistan is home to stunning landscapes, from the Himalayan peaks to the vast deserts, as well as a rich history and culture."
        },
        "Palau": {
            code: "pw",
            description: "Palau is a small Pacific island nation known for its clear waters, coral reefs, and unique marine life."
        },
        "Panama": {
            code: "pa",
            description: "Panama is famous for the Panama Canal, tropical rainforests, and vibrant culture blending indigenous, African, and European influences."
        },
        "Papua New Guinea": {
            code: "pg",
            description: "Papua New Guinea is known for its rugged mountains, tropical forests, and rich cultural diversity with hundreds of indigenous languages."
        },
        "Paraguay": {
            code: "py",
            description: "Paraguay offers vast landscapes, including wetlands and forests, as well as colonial towns and a rich indigenous culture."
        },
        "Peru": {
            code: "pe",
            description: "Peru is home to ancient ruins such as Machu Picchu, vibrant cities, and diverse ecosystems ranging from the Amazon to the Andes."
        },
        "Philippines": {
            code: "ph",
            description: "The Philippines is known for its stunning beaches, over 7,000 islands, and rich history shaped by indigenous and colonial influences."
        },
        "Poland": {
            code: "pl",
            description: "Poland offers a mix of medieval towns, historic cities like Warsaw and Kraków, and beautiful natural landscapes including the Tatra Mountains."
        },
        "Portugal": {
            code: "pt",
            description: "Portugal is famous for its stunning coastline, historic cities like Lisbon, and rich culture with influences from its maritime history."
        },
        "Greenland": {
            "code": "gl",
            "description": "Greenland, the world's largest island, is known for its vast ice sheets, dramatic Arctic landscapes, and Inuit culture. Visitors often explore glaciers, fjords, and remote settlements like Nuuk."
        },

        "Qatar": {
            code: "qa",
            description: "Qatar is a wealthy nation known for its futuristic architecture, luxury shopping, and being a global hub for business and sports."
        },
        "Romania": {
            code: "ro",
            description: "Romania is known for its medieval castles, particularly Dracula's Castle, the Carpathian Mountains, and vibrant culture."
        },
        "Russia": {
            code: "ru",
            description: "Russia is the largest country in the world, offering diverse landscapes, from Siberian tundra to the cultural treasures of Moscow and St. Petersburg."
        },
        "Rwanda": {
            code: "rw",
            description: "Rwanda is famous for its wildlife, including gorillas in Volcanoes National Park, as well as its beautiful rolling hills and peaceful culture."
        },
        "Saint Kitts": {
            code: "kn",
            description: "Saint Kitts and Nevis is known for its stunning beaches, volcanic mountains, and charming colonial towns in the Caribbean."
        },
        "Saint Lucia": {
            code: "lc",
            description: "Saint Lucia offers beautiful beaches, dramatic volcanic mountains like the Pitons, and a vibrant local culture in the Caribbean."
        },
        "Saint Vincent": {
            code: "vc",
            description: "Saint Vincent and the Grenadines is a Caribbean paradise known for its lush islands, pristine beaches, and sailing."
        },
        "Samoa": {
            code: "ws",
            description: "Samoa is known for its lush landscapes, stunning beaches, and a strong Polynesian cultural heritage."
        },
        "San Marino": {
            code: "sm",
            description: "San Marino is one of the world's oldest republics, offering medieval architecture, scenic views, and a rich history in the heart of Italy."
        },
        "São Tomé": {
            code: "st",
            description: "São Tomé and Príncipe is an island nation in the Gulf of Guinea, known for its tropical climate, cocoa production, and biodiversity."
        },
        "Saudi Arabia": {
            code: "sa",
            description: "Saudi Arabia is known for its vast deserts, the holy cities of Mecca and Medina, and its modern developments alongside rich cultural traditions."
        },
        "Senegal": {
            code: "sn",
            description: "Senegal offers vibrant culture, rich music traditions, and beautiful landscapes, including the Pink Lake and the city of Dakar."
        },
        "Serbia": {
            code: "rs",
            description: "Serbia is known for its vibrant cultural life, historic landmarks like Belgrade Fortress, and beautiful natural scenery."
        },
        "Seychelles": {
            code: "sc",
            description: "Seychelles is an archipelago in the Indian Ocean, famous for its pristine beaches, coral reefs, and diverse wildlife."
        },
        "Sierra Leone ": {
            code: "sl",
            description: "Sierra Leone is known for its beautiful beaches, tropical rainforests, and history shaped by the transatlantic slave trade."
        },
        "Singapore": {
            code: "sg",
            description: "Singapore is a global financial hub, known for its clean streets, impressive skyline, and attractions like Gardens by the Bay and Marina Bay Sands."
        },
        "Slovakia": {
            code: "sk",
            description: "Slovakia offers stunning castles, beautiful mountains like the High Tatras, and a rich cultural heritage."
        },
        "Slovenia": {
            code: "si",
            description: "Slovenia is famous for its picturesque lakes, especially Lake Bled, and its impressive caves and natural landscapes."
        },
        "Solomon Islands": {
            code: "sb",
            description: "Solomon Islands is known for its coral reefs, WWII history, and beautiful tropical islands in the Pacific Ocean."
        },
        "Somalia": {
            code: "so",
            description: "Somalia is known for its long coastline along the Horn of Africa, with rich history and cultural diversity influenced by Arab and African traditions."
        },
        "New Caledonia": {
            "code": "nc",
            "description": "New Caledonia is a French overseas territory known for its stunning coral reefs, lush rainforests, and rich cultural heritage. The capital, Nouméa, offers a blend of French and Melanesian influences, making it a unique destination in the Pacific."
        },

        "South Africa": {
            code: "za",
            description: "South Africa offers a diverse range of experiences, from safaris in Kruger National Park to the vibrant cities of Cape Town and Johannesburg."
        },
        "South Sudan": {
            code: "ss",
            description: "South Sudan is known for its natural beauty, including rivers, swamps, and forests, as well as a rich cultural heritage."
        },
        "Spain": {
            code: "es",
            description: "Spain is famous for its beautiful beaches, historic cities like Barcelona and Madrid, and rich cultural traditions like flamenco and bullfighting."
        },
        "Sri Lanka": {
            code: "lk",
            description: "Sri Lanka is known for its stunning beaches, ancient temples, tea plantations, and rich biodiversity."
        },
        "Sudan": {
            code: "sd",
            description: "Sudan offers vast deserts, rich history with ancient Egyptian ruins, and a diverse cultural heritage from Arab and African influences."
        },
        "Suriname": {
            code: "sr",
            description: "Suriname is known for its tropical rainforests, vibrant culture, and historical Dutch colonial architecture."
        },
        "Sweden": {
            code: "se",
            description: "Sweden offers stunning natural landscapes, including the Northern Lights, beautiful coastlines, and vibrant cities like Stockholm."
        },
        "Switzerland": {
            code: "ch",
            description: "Switzerland is famous for its alpine scenery, high-quality chocolates, watches, and being a hub for international diplomacy."
        },
        "Syria": {
            code: "sy",
            description: "Syria is known for its ancient history, including the ruins of Palmyra and Damascus, and a rich cultural and architectural heritage."
        },
        "Taiwan": {
            code: "tw",
            description: "Taiwan is known for its modern cities, including Taipei with its iconic 101 Tower, and beautiful natural landscapes like Taroko Gorge."
        },
        "Tajikistan": {
            code: "tj",
            description: "Tajikistan offers stunning mountain landscapes, historical cities like Dushanbe, and a rich Persian cultural heritage."
        },
        "Tanzania": {
            code: "tz",
            description: "Tanzania is known for its safaris in Serengeti National Park, the stunning Mount Kilimanjaro, and the beautiful island of Zanzibar."
        },
        "Thailand": {
            code: "th",
            description: "Thailand is famous for its vibrant culture, beautiful beaches, ancient temples, and delicious cuisine."
        },
        "Timor-Leste": {
            code: "tl",
            description: "Timor-Leste (East Timor) is a young nation in Southeast Asia known for its beautiful beaches, mountains, and rich cultural traditions."
        },
        "Togo": {
            code: "tg",
            description: "Togo is known for its diverse landscapes, from beaches to savannahs, and its rich cultural traditions and colorful markets."
        },
        "Tonga": {
            code: "to",
            description: "Tonga is a Polynesian kingdom known for its stunning coral reefs, beaches, and ancient cultural traditions."
        },
        "Trinidad": {
            code: "tt",
            description: "Trinidad and Tobago is known for its vibrant carnival, beautiful beaches, and rich cultural diversity."
        },
        "Tunisia": {
            code: "tn",
            description: "Tunisia offers beautiful Mediterranean beaches, ancient ruins like Carthage, and the unique Sahara Desert landscapes."
        },
        "Turkey": {
            code: "tr",
            description: "Turkey is known for its rich history, from ancient ruins like Ephesus and Troy to modern cities like Istanbul, along with stunning landscapes and beaches."
        },
        "Turkmenistan": {
            code: "tm",
            description: "Turkmenistan is known for its desert landscapes, ancient Silk Road sites, and the famous Door to Hell fire crater."
        },
        "Tuvalu": {
            code: "tv",
            description: "Tuvalu is a small island nation in the Pacific Ocean, known for its remote location, pristine beaches, and underwater ecosystems."
        },
        "Uganda": {
            code: "ug",
            description: "Uganda is famous for its wildlife, including gorillas in Bwindi Impenetrable National Park, and its beautiful lakes, including Lake Victoria."
        },
        "Ukraine": {
            code: "ua",
            description: "Ukraine is known for its beautiful landscapes, historic cities like Kyiv, and its rich cultural traditions and folk art."
        },
        "The United Arab Emirates": {
            code: "ae",
            description: "The United Arab Emirates (UAE) is famous for its modern cities like Dubai, with iconic skyscrapers, luxury shopping, and vast deserts."
        },
        "The United Kingdom": {
            code: "gb",
            description: "The United Kingdom is made up of England, Scotland, Wales, and Northern Ireland, known for its history, iconic landmarks like Big Ben, and vibrant cities like London."
        },
        "United States of America": {
            code: "us",
            description: "The United States is famous for its diverse landscapes, from the Grand Canyon to Yellowstone National Park, and its rich cultural history."
        },
        "Uruguay": {
            code: "uy",
            description: "Uruguay is known for its beaches along the Atlantic Ocean, colonial architecture in Montevideo, and its vibrant cultural life."
        },
        "Uzbekistan": {
            code: "uz",
            description: "Uzbekistan is rich in cultural history, with ancient Silk Road cities like Samarkand and Bukhara, known for their Islamic architecture."
        },
        "Vanuatu": {
            code: "vu",
            description: "Vanuatu is a Pacific island nation known for its volcanoes, coral reefs, and unique cultural heritage."
        },
        "Vatican": {
            code: "va",
            description: "Vatican City is the smallest independent state in the world, home to the Pope and renowned landmarks such as St. Peter's Basilica and the Sistine Chapel."
        },
        "Venezuela": {
            code: "ve",
            description: "Venezuela offers diverse landscapes, including the Angel Falls, the world's highest uninterrupted waterfall, and vibrant cities like Caracas."
        },
        "Vietnam": {
            code: "vn",
            description: "Vietnam is known for its stunning landscapes, including Halong Bay, historical sites like the ancient town of Hoi An, and its rich food culture."
        },
        "Yemen": {
            code: "ye",
            description: "Yemen is known for its ancient architecture, particularly in the old city of Sana'a, and its rich history as part of the Arabian Peninsula."
        },
        "Zambia": {
            code: "zm",
            description: "Zambia is home to Victoria Falls, one of the seven natural wonders of the world, and is known for its wildlife, especially in national parks like South Luangwa."
        },
        "Zimbabwe": {
            code: "zw",
            description: "Zimbabwe is known for its stunning landscapes, including the ancient ruins of Great Zimbabwe, and its diverse wildlife in parks like Hwange National Park."
        }
    };

    // About Us button functionality
    // document.querySelector('.button:nth-child(1)').addEventListener('click', () => {
    //     document.getElementById('about-modal').style.display = 'block';
    // });
    //
    // document.getElementById('close-about').addEventListener('click', () => {
    //     document.getElementById('about-modal').style.display = 'none';
    // });

    function showCountryInfoByName(name, fallbackCode = '') {
        const info = countryData[name];

        if (info) {
            showCountryInfo({
                name,
                code: info.code,
                description: info.description
            });
        } else {
            showCountryInfo({
                name,
                code: fallbackCode.toLowerCase(),
                description: "No information available for this country."
            });
        }
    }

    function showCountryInfo({ name, code, description }) {
        document.getElementById('country-name').innerText = name;
        document.getElementById('country-flag').className = `section-country-info__country-flag fi fi-${code}`;
        document.getElementById('country-description').innerText = description;
        document.getElementById('country-info').style.display = 'block';
    }

    fetch('https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json')
        .then(res => res.json())
        .then(geoData => {
            L.geoJSON(geoData, {
                style: {
                    color: '#333', // color de las lineas
                    weight: 1,
                    fillColor: '#050', //color countries
                    fillOpacity: 0.5,
                },
                onEachFeature: (feature, layer) => {
                    const countryName = feature.properties.name || 'Unknown';
                    const countryCode = feature.properties.iso_a2 || '';
                    layer.bindTooltip(countryName, { sticky: true });

                    layer.on('click', () => {
                        showCountryInfoByName(countryName, countryCode);
                    });
                }
            }).addTo(map);
        });
});
