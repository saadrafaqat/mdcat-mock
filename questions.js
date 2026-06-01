// ================================================================
// questions.js - MDCAT Mock Test Question Bank
// Complete question database based on official PMDC syllabus
// ================================================================

window.MCQ_DATA = {};

// ================================================================
// BIOLOGY - 200+ Questions
// ================================================================
window.MCQ_DATA.biology = [
    // === ACELLULAR LIFE (Viruses, AIDS) ===
    { text: "Viruses are classified on the basis of all EXCEPT:", options: ["Structure", "Number of strands", "Host range", "Color of the virus"], answer: 3 },
    { text: "Which of the following is a DNA virus?", options: ["HIV", "Influenza virus", "Bacteriophage", "Coronavirus"], answer: 2 },
    { text: "The genetic material of HIV is:", options: ["Double-stranded DNA", "Single-stranded RNA", "Double-stranded RNA", "Single-stranded DNA"], answer: 1 },
    { text: "AIDS is caused by:", options: ["HIV", "HPV", "HBV", "HSV"], answer: 0 },
    { text: "Which of the following is NOT a mode of HIV transmission?", options: ["Blood transfusion", "Sexual contact", "Mosquito bite", "Mother to child"], answer: 2 },
    { text: "The protein coat of a virus is called:", options: ["Capsid", "Core", "Envelope", "Spike"], answer: 0 },
    { text: "Viruses are considered obligate intracellular parasites because:", options: ["They can reproduce outside host", "They cannot reproduce outside a living host", "They are killed by antibiotics", "They have cellular structure"], answer: 1 },
    { text: "The outermost layer of HIV is derived from:", options: ["Viral capsid", "Host cell membrane", "Nuclear membrane", "Ribosomes"], answer: 1 },
    { text: "Which enzyme does HIV use to convert RNA into DNA?", options: ["DNA polymerase", "RNA polymerase", "Reverse transcriptase", "Integrase"], answer: 2 },
    { text: "Bacteriophages are viruses that infect:", options: ["Animals", "Plants", "Bacteria", "Fungi"], answer: 2 },

    // === BIOENERGETICS (Respiration) ===
    { text: "Cellular respiration of proteins yields:", options: ["ATP, CO₂ and H₂O only", "ATP, CO₂, H₂O and urea", "ATP and lactic acid", "ATP and ethanol"], answer: 1 },
    { text: "The breakdown of glucose in cellular respiration occurs in which order?", options: ["Glycolysis → Krebs cycle → Electron transport chain", "Krebs cycle → Glycolysis → ETC", "ETC → Glycolysis → Krebs cycle", "Glycolysis → ETC → Krebs cycle"], answer: 0 },
    { text: "Net ATP produced from one molecule of glucose during aerobic respiration is approximately:", options: ["2", "8", "36", "72"], answer: 2 },
    { text: "Glycolysis occurs in which part of the cell?", options: ["Mitochondria", "Nucleus", "Cytoplasm", "Golgi apparatus"], answer: 2 },
    { text: "The Krebs cycle takes place in the:", options: ["Cytoplasm", "Mitochondrial matrix", "Inner mitochondrial membrane", "Outer mitochondrial membrane"], answer: 1 },
    { text: "Fats yield more ATP per gram than carbohydrates because:", options: ["Fats are more reduced", "Fats are smaller molecules", "Fats dissolve in water", "Fats have more oxygen"], answer: 0 },
    { text: "The final electron acceptor in the electron transport chain is:", options: ["NAD⁺", "FAD", "Oxygen", "Water"], answer: 2 },
    { text: "Anaerobic respiration in muscles produces:", options: ["Ethanol", "Lactic acid", "CO₂", "Oxygen"], answer: 1 },

    // === BIOLOGICAL MOLECULES ===
    { text: "Which of the following is NOT a biological molecule?", options: ["Carbohydrates", "Proteins", "Sodium chloride", "Lipids"], answer: 2 },
    { text: "Water is a universal solvent due to its:", options: ["Non-polar nature", "Polar nature", "High pH", "Low specific heat"], answer: 1 },
    { text: "The specific heat capacity of water is:", options: ["Low", "High", "Zero", "Negative"], answer: 1 },
    { text: "Glucose is an example of:", options: ["Monosaccharide", "Disaccharide", "Polysaccharide", "Oligosaccharide"], answer: 0 },
    { text: "Sucrose is composed of:", options: ["Glucose + Glucose", "Glucose + Fructose", "Glucose + Galactose", "Fructose + Galactose"], answer: 1 },
    { text: "Lactose is composed of:", options: ["Glucose + Glucose", "Glucose + Fructose", "Glucose + Galactose", "Galactose + Fructose"], answer: 2 },
    { text: "Starch is a polymer of:", options: ["Fructose", "Glucose", "Galactose", "Sucrose"], answer: 1 },
    { text: "Glycogen is stored in:", options: ["Liver and muscles", "Brain and heart", "Kidneys and lungs", "Skin and bones"], answer: 0 },
    { text: "Cellulose is a structural component of:", options: ["Animal cell walls", "Plant cell walls", "Bacterial cell walls", "Fungal cell walls"], answer: 1 },
    { text: "The building blocks of proteins are:", options: ["Nucleotides", "Amino acids", "Monosaccharides", "Fatty acids"], answer: 1 },
    { text: "How many standard amino acids are there?", options: ["16", "20", "24", "12"], answer: 1 },
    { text: "The primary structure of a protein refers to:", options: ["Sequence of amino acids", "Alpha helix and beta sheet", "3D folding", "Multiple polypeptide chains"], answer: 0 },
    { text: "Phospholipids are important components of:", options: ["Cell membranes", "Cell walls", "Ribosomes", "Nucleus"], answer: 0 },
    { text: "Triglycerides are composed of:", options: ["Glycerol + 2 fatty acids", "Glycerol + 3 fatty acids", "Glucose + 3 fatty acids", "Glycerol + 1 fatty acid"], answer: 1 },
    { text: "RNA differs from DNA because RNA contains:", options: ["Deoxyribose sugar", "Uracil instead of Thymine", "Double helix", "No phosphate group"], answer: 1 },
    { text: "The double helix structure of DNA was proposed by:", options: ["Darwin", "Mendel", "Watson and Crick", "Lamarck"], answer: 2 },
    { text: "A gene is defined as:", options: ["A protein", "A sequence of nucleotides coding for a polypeptide", "A lipid molecule", "A carbohydrate chain"], answer: 1 },
    { text: "Glycolipids are examples of:", options: ["Simple lipids", "Conjugated molecules", "Polysaccharides", "Nucleic acids"], answer: 1 },
    { text: "Glycoproteins are formed by the combination of:", options: ["Carbohydrate + Protein", "Lipid + Protein", "Carbohydrate + Lipid", "Nucleic acid + Protein"], answer: 0 },
    { text: "Water molecules are attracted to each other due to:", options: ["Covalent bonds", "Ionic bonds", "Hydrogen bonds", "Van der Waals forces"], answer: 2 },
    { text: "The property of water that helps in cooling organisms is:", options: ["High specific heat", "High heat of vaporization", "Density", "Cohesion"], answer: 1 },
    { text: "Hydrolysis of a disaccharide produces:", options: ["Two monosaccharides", "Two disaccharides", "Amino acids", "Fatty acids"], answer: 0 },
    { text: "In DNA, the complementary base of Adenine is:", options: ["Guanine", "Cytosine", "Thymine", "Uracil"], answer: 2 },
    { text: "Enzymes are made up of:", options: ["Carbohydrates", "Lipids", "Proteins", "Nucleic acids"], answer: 2 },

    // === CELL STRUCTURE & FUNCTION ===
    { text: "Which organelle is responsible for ATP production?", options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi apparatus"], answer: 2 },
    { text: "The function of the Golgi apparatus is:", options: ["Protein synthesis", "Modification and packaging of proteins", "Energy production", "Lipid synthesis"], answer: 1 },
    { text: "Prokaryotic cells lack:", options: ["Cell membrane", "Nucleus", "Ribosomes", "DNA"], answer: 1 },
    { text: "The endoplasmic reticulum is involved in:", options: ["Energy production", "Protein and lipid synthesis", "DNA replication", "Cell division"], answer: 1 },
    { text: "Ribosomes are responsible for:", options: ["Lipid synthesis", "Protein synthesis", "Carbohydrate synthesis", "Nucleic acid synthesis"], answer: 1 },
    { text: "Chromosomes are made of:", options: ["DNA only", "RNA only", "DNA and proteins", "Proteins only"], answer: 2 },
    { text: "Which of the following is found in animal cells but NOT in plant cells?", options: ["Cell wall", "Chloroplast", "Centriole", "Large vacuole"], answer: 2 },
    { text: "The main difference between prokaryotic and eukaryotic cells is:", options: ["Presence of ribosomes", "Presence of a nucleus", "Presence of DNA", "Presence of cell membrane"], answer: 1 },
    { text: "The nucleolus is involved in the production of:", options: ["mRNA", "tRNA", "rRNA", "DNA"], answer: 2 },
    { text: "Lysosomes contain:", options: ["DNA", "Digestive enzymes", "Starch", "ATP"], answer: 1 },

    // === COORDINATION & CONTROL ===
    { text: "Receptors are sensitive to:", options: ["Only light", "Only sound", "Various stimuli", "Only touch"], answer: 2 },
    { text: "The part of a neuron that receives signals is the:", options: ["Axon", "Dendrite", "Cell body", "Myelin sheath"], answer: 1 },
    { text: "A nerve impulse is:", options: ["Chemical signal only", "Electrical signal", "Mechanical signal", "Thermal signal"], answer: 1 },
    { text: "The myelin sheath is produced by:", options: ["Neurons", "Schwann cells", "Astrocytes", "Microglia"], answer: 1 },
    { text: "The cerebellum is responsible for:", options: ["Balance and coordination", "Speech", "Vision", "Hearing"], answer: 0 },
    { text: "The largest part of the brain is the:", options: ["Cerebellum", "Medulla", "Cerebrum", "Pons"], answer: 2 },
    { text: "The reflex arc involves all EXCEPT:", options: ["Sensory neuron", "Motor neuron", "Brain", "Spinal cord"], answer: 2 },
    { text: "Which part of the brain controls heartbeat and breathing?", options: ["Cerebrum", "Cerebellum", "Medulla oblongata", "Hypothalamus"], answer: 2 },
    { text: "A synapse is:", options: ["A gap between two neurons", "A type of neuron", "A brain region", "A spinal nerve"], answer: 0 },
    { text: "Neurotransmitters are released from:", options: ["Dendrites", "Axon terminal", "Cell body", "Myelin sheath"], answer: 1 },

    // === ENZYMES ===
    { text: "Enzymes are characterized by all EXCEPT:", options: ["They are specific", "They are consumed in reactions", "They lower activation energy", "They are proteins"], answer: 1 },
    { text: "The lock and key model describes:", options: ["Enzyme structure", "Enzyme-substrate interaction", "Enzyme inhibition", "Enzyme synthesis"], answer: 1 },
    { text: "High temperature denatures enzymes by affecting their:", options: ["Primary structure", "Secondary/tertiary structure", "Quaternary structure only", "Amino acid sequence"], answer: 1 },
    { text: "Enzyme inhibitors that bind to the active site are called:", options: ["Competitive inhibitors", "Non-competitive inhibitors", "Allosteric inhibitors", "Irreversible inhibitors"], answer: 0 },
    { text: "Optimum pH for most human enzymes is around:", options: ["2", "7.4", "9", "12"], answer: 1 },
    { text: "Increasing substrate concentration in the presence of a competitive inhibitor:", options: ["Decreases reaction rate", "Increases reaction rate", "Has no effect", "Stops the reaction"], answer: 1 },

    // === EVOLUTION ===
    { text: "The theory of inheritance of acquired characters was proposed by:", options: ["Darwin", "Lamarck", "Mendel", "Wallace"], answer: 1 },
    { text: "Natural selection was proposed by:", options: ["Lamarck", "Darwin", "Mendel", "Watson"], answer: 1 },
    { text: "According to Darwin, evolution occurs due to:", options: ["Use and disuse", "Natural selection", "Inheritance of acquired traits", "Spontaneous generation"], answer: 1 },
    { text: "The idea that giraffes developed long necks by stretching is associated with:", options: ["Darwinism", "Lamarckism", "Mendelian genetics", "Modern synthesis"], answer: 1 },

    // === REPRODUCTION ===
    { text: "The male reproductive organ that produces sperm is the:", options: ["Prostate", "Testis", "Epididymis", "Vas deferens"], answer: 1 },
    { text: "Ovulation occurs during which phase of the menstrual cycle?", options: ["Menstrual phase", "Follicular phase", "Luteal phase", "Ovulatory phase"], answer: 3 },
    { text: "The hormone responsible for maintaining pregnancy is:", options: ["Estrogen", "Progesterone", "LH", "FSH"], answer: 1 },
    { text: "Which of the following is a sexually transmitted disease?", options: ["Malaria", "Syphilis", "Dengue", "Typhoid"], answer: 1 },
    { text: "Gonorrhea is caused by:", options: ["Virus", "Bacterium", "Fungus", "Protozoan"], answer: 1 },
    { text: "The female gamete is called:", options: ["Sperm", "Ovum", "Zygote", "Embryo"], answer: 1 },
    { text: "Fertilization usually occurs in the:", options: ["Ovary", "Uterus", "Fallopian tube", "Vagina"], answer: 2 },
    { text: "LH surge triggers:", options: ["Menstruation", "Ovulation", "Implantation", "Lactation"], answer: 1 },
    { text: "The function of FSH in males is:", options: ["Sperm production", "Testosterone production", "Libido", "None"], answer: 0 },

    // === SUPPORT & MOVEMENT ===
    { text: "Which of the following is NOT a type of cartilage?", options: ["Hyaline", "Fibrous", "Elastic", "Smooth"], answer: 3 },
    { text: "Smooth muscles are found in:", options: ["Heart", "Skeleton", "Internal organs", "Tongue"], answer: 2 },
    { text: "Cardiac muscles are:", options: ["Voluntary", "Involuntary", "Striated and involuntary", "Non-striated"], answer: 2 },
    { text: "The sarcomere is the functional unit of:", options: ["Bone", "Skeletal muscle", "Cardiac muscle only", "Smooth muscle"], answer: 1 },
    { text: "Muscle contraction occurs via the sliding of:", options: ["Actin and myosin", "Collagen and elastin", "Keratin and tubulin", "Troponin and tropomyosin"], answer: 0 },
    { text: "Which joint allows maximum movement?", options: ["Fibrous joint", "Cartilaginous joint", "Synovial joint", "Sutures"], answer: 2 },
    { text: "Arthritis is:", options: ["Joint inflammation", "Muscle inflammation", "Bone fracture", "Ligament tear"], answer: 0 },
    { text: "Osteoporosis is characterized by:", options: ["Joint pain", "Decreased bone density", "Muscle weakness", "Cartilage loss"], answer: 1 },

    // === INHERITANCE ===
    { text: "Mendel's law of segregation states that:", options: ["Alleles separate during gamete formation", "Genes on same chromosome stay together", "Dominant traits always appear", "Traits blend together"], answer: 0 },
    { text: "The law of independent assortment applies to genes on:", options: ["Same chromosome", "Different chromosomes", "Mitochondrial DNA", "Plasmids"], answer: 1 },
    { text: "Gene linkage means:", options: ["Genes assort independently", "Genes on same chromosome tend to be inherited together", "Genes mutate together", "Genes are always dominant"], answer: 1 },
    { text: "Crossing over occurs during:", options: ["Mitosis", "Meiosis I", "Meiosis II", "Interphase"], answer: 1 },
    { text: "Crossing over increases:", options: ["Mutation rate", "Genetic variation", "Chromosome number", "Gene number"], answer: 1 },
    { text: "Hemophilia is a:", options: ["Autosomal dominant", "Autosomal recessive", "X-linked recessive", "Y-linked"], answer: 2 },
    { text: "A carrier of an X-linked disorder is typically:", options: ["Male", "Female", "Both equally", "Neither"], answer: 1 },
    { text: "If a color-blind man marries a normal woman, their daughters will be:", options: ["All color-blind", "All carriers", "All normal", "Half carriers"], answer: 1 },
    { text: "Mendel's dihybrid cross ratio is:", options: ["3:1", "9:3:3:1", "1:2:1", "9:7"], answer: 1 },

    // === CIRCULATION ===
    { text: "The human heart has how many chambers?", options: ["2", "3", "4", "5"], answer: 2 },
    { text: "Blood enters the right atrium from:", options: ["Pulmonary vein", "Vena cava", "Aorta", "Pulmonary artery"], answer: 1 },
    { text: "The pacemaker of the heart is the:", options: ["AV node", "SA node", "Purkinje fibers", "Bundle of His"], answer: 1 },
    { text: "Arteries carry blood:", options: ["Away from the heart", "Towards the heart", "In both directions", "Only deoxygenated blood"], answer: 0 },
    { text: "The smallest blood vessels are:", options: ["Arteries", "Veins", "Capillaries", "Arterioles"], answer: 2 },
    { text: "The function of valves in veins is to:", options: ["Increase blood pressure", "Prevent backflow", "Filter blood", "Produce RBCs"], answer: 1 },
    { text: "Lymph nodes are part of which system?", options: ["Circulatory", "Lymphatic", "Digestive", "Respiratory"], answer: 1 },
    { text: "Which blood vessel carries oxygenated blood from the lungs to the heart?", options: ["Pulmonary artery", "Pulmonary vein", "Aorta", "Vena cava"], answer: 1 },
    { text: "Blood pressure is measured using a:", options: ["Thermometer", "Sphygmomanometer", "Stethoscope", "Barometer"], answer: 1 },

    // === IMMUNITY ===
    { text: "Antibodies are produced by:", options: ["T cells", "B cells", "Macrophages", "Neutrophils"], answer: 1 },
    { text: "Vaccination provides:", options: ["Active immunity", "Passive immunity", "Innate immunity", "Natural immunity"], answer: 0 },
    { text: "The first line of defense against pathogens includes:", options: ["Skin and mucous membranes", "Antibodies", "T cells", "Fever"], answer: 0 },
    { text: "An antigen is:", options: ["A type of white blood cell", "A substance that triggers immune response", "An antibody", "A vaccine"], answer: 1 },

    // === RESPIRATION ===
    { text: "Gas exchange in the lungs occurs in the:", options: ["Bronchi", "Bronchioles", "Alveoli", "Trachea"], answer: 2 },
    { text: "Inhaled air contains approximately how much oxygen?", options: ["16%", "21%", "78%", "0.04%"], answer: 1 },
    { text: "The diaphragm is involved in:", options: ["Digestion", "Breathing", "Circulation", "Excretion"], answer: 1 },
    { text: "Smoking primarily damages which part of the respiratory system?", options: ["Nose", "Trachea", "Lungs", "Throat"], answer: 2 },
    { text: "The main respiratory pigment in humans is:", options: ["Chlorophyll", "Hemoglobin", "Myoglobin", "Melanin"], answer: 1 },

    // === DIGESTION ===
    { text: "The human digestive system starts at the:", options: ["Stomach", "Mouth", "Esophagus", "Small intestine"], answer: 1 },
    { text: "Pepsin digests:", options: ["Carbohydrates", "Proteins", "Lipids", "Nucleic acids"], answer: 1 },
    { text: "Bile is produced by the:", options: ["Pancreas", "Liver", "Gallbladder", "Stomach"], answer: 1 },
    { text: "The small intestine is where most:", options: ["Water absorption occurs", "Nutrient absorption occurs", "Protein digestion begins", "Bile is produced"], answer: 1 },
    { text: "The function of the large intestine is to:", options: ["Digest proteins", "Absorb water", "Produce enzymes", "Store bile"], answer: 1 },
    { text: "Amylase breaks down:", options: ["Proteins", "Fats", "Starch", "DNA"], answer: 2 },
    { text: "The pH in the stomach is:", options: ["Neutral", "Alkaline", "Acidic", "Slightly basic"], answer: 2 },
    { text: "Villi are found in the:", options: ["Stomach", "Small intestine", "Large intestine", "Esophagus"], answer: 1 },
    { text: "The pancreas produces all EXCEPT:", options: ["Insulin", "Trypsin", "Pepsin", "Amylase"], answer: 2 },

    // === HOMEOSTASIS ===
    { text: "The functional unit of the kidney is the:", options: ["Neuron", "Nephron", "Alveolus", "Villus"], answer: 1 },
    { text: "Glomerular filtration occurs in the:", options: ["Bowman's capsule", "Loop of Henle", "Collecting duct", "Proximal tubule"], answer: 0 },
    { text: "Kidneys help in osmoregulation by:", options: ["Filtering blood", "Reabsorbing water", "Secreting hormones", "All of these"], answer: 3 },
    { text: "Kidney stones are primarily composed of:", options: ["Calcium oxalate", "Uric acid", "Sodium", "Potassium"], answer: 0 },
    { text: "Thermoregulation is controlled by the:", options: ["Cerebellum", "Hypothalamus", "Medulla", "Pons"], answer: 1 },
    { text: "The main nitrogenous waste in humans is:", options: ["Ammonia", "Urea", "Uric acid", "Creatinine"], answer: 1 },
    { text: "ADH (antidiuretic hormone) affects the:", options: ["Glomerulus", "Collecting duct", "Proximal tubule", "Loop of Henle"], answer: 1 },
    { text: "Dialysis is used for patients with:", options: ["Heart disease", "Kidney failure", "Liver failure", "Lung disease"], answer: 1 },
    { text: "The glomerulus is a network of:", options: ["Arteries", "Veins", "Capillaries", "Lymphatic vessels"], answer: 2 },

    // === BIOTECHNOLOGY ===
    { text: "Biotechnology is used to produce vaccines by:", options: ["Killing bacteria", "Using recombinant DNA technology", "Heating pathogens", "Mixing chemicals"], answer: 1 },
    { text: "Monoclonal antibodies are used for:", options: ["Only diagnosis", "Only treatment", "Both diagnosis and treatment", "Neither"], answer: 2 },
    { text: "DNA probes are used to:", options: ["Amplify DNA", "Detect specific DNA sequences", "Synthesize DNA", "Degrade DNA"], answer: 1 },
    { text: "Recombinant insulin is produced by:", options: ["E. coli", "Yeast", "Plant cells", "Animal cells"], answer: 0 },
    { text: "PCR is used to:", options: ["Sequence DNA", "Amplify DNA", "Cut DNA", "Join DNA"], answer: 1 },
    { text: "Restriction enzymes:", options: ["Join DNA fragments", "Cut DNA at specific sites", "Amplify DNA", "Transcribe DNA"], answer: 1 },
    { text: "Plasmids are used in biotechnology as:", options: ["Enzymes", "Vectors", "Probes", "Markers"], answer: 1 },
    { text: "Gene therapy involves:", options: ["Replacing defective genes", "Removing organs", "Killing cells", "Transfusing blood"], answer: 0 },
    { text: "Stem cells have the ability to:", options: ["Differentiate into many cell types", "Only divide indefinitely", "Only form blood cells", "Cannot divide"], answer: 0 },
    { text: "Golden rice is genetically modified to produce:", options: ["Vitamin A", "Vitamin C", "Iron", "Protein"], answer: 0 },

    // === Additional Biology Questions ===
    { text: "Mitosis results in:", options: ["2 diploid cells", "4 haploid cells", "2 haploid cells", "4 diploid cells"], answer: 0 },
    { text: "Meiosis occurs in:", options: ["Somatic cells", "Germ cells", "All cells", "Muscle cells"], answer: 1 },
    { text: "The centromere is responsible for:", options: ["DNA replication", "Chromatid attachment", "Protein synthesis", "Energy production"], answer: 1 },
    { text: "Transcription produces:", options: ["Protein", "mRNA", "DNA", "Lipids"], answer: 1 },
    { text: "Translation occurs in the:", options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi body"], answer: 1 },
    { text: "Cytokinesis in plant cells involves formation of:", options: ["Cleavage furrow", "Cell plate", "Centrioles", "Spindle fibers"], answer: 1 },
    { text: "Sister chromatids separate during:", options: ["Prophase", "Metaphase", "Anaphase", "Telophase"], answer: 2 },
    { text: "The 'S' phase of cell cycle is for:", options: ["Cell growth", "DNA replication", "Cell division", "Protein synthesis"], answer: 1 },
    { text: "Tumor suppressor genes:", options: ["Promote cell division", "Inhibit cell division", "Cause mutations", "Repair DNA"], answer: 1 },
    { text: "Apoptosis is:", options: ["Programmed cell death", "Uncontrolled cell division", "Cell injury", "Cell differentiation"], answer: 0 },
    { text: "Osmosis is the movement of water across a:", options: ["Semi-permeable membrane", "Impermeable membrane", "Cell wall", "Nuclear membrane"], answer: 0 },
    { text: "Active transport requires:", options: ["ATP", "Water", "CO₂", "Oxygen"], answer: 0 },
    { text: "Facilitated diffusion uses:", options: ["ATP", "Carrier proteins", "Ion pumps", "Endocytosis"], answer: 1 },
    { text: "Endocytosis is the process of:", options: ["Expelling materials", "Ingesting materials", "Dividing cells", "Producing energy"], answer: 1 },
    { text: "The sodium-potassium pump transports:", options: ["Na⁺ in, K⁺ out", "Na⁺ out, K⁺ in", "Both in", "Both out"], answer: 1 },
    { text: "Hypertonic solution causes a cell to:", options: ["Swell", "Shrink", "Stay the same", "Lyse"], answer: 1 },
    { text: "The light-dependent reactions of photosynthesis occur in the:", options: ["Stroma", "Thylakoid membrane", "Chlorophyll", "Mitochondria"], answer: 1 },
    { text: "The dark reactions of photosynthesis are also called:", options: ["Krebs cycle", "Calvin cycle", "Glycolysis", "ETC"], answer: 1 },
    { text: "Chlorophyll absorbs light mainly in the:", options: ["Green spectrum", "Blue and red spectrum", "Yellow spectrum", "All spectrum equally"], answer: 1 },
    { text: "Accessory pigments in photosynthesis include:", options: ["Carotenoids", "Hemoglobin", "Myoglobin", "Melanin"], answer: 0 },
    { text: "Photolysis of water releases:", options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"], answer: 0 },
    { text: "C3 plants fix CO₂ into:", options: ["PGA", "PEP", "RuBP", "Malate"], answer: 0 },
    { text: "C4 plants have an advantage in:", options: ["Cold climates", "Hot and dry climates", "Wet climates", "Shady areas"], answer: 1 },
    { text: "CAM plants fix CO₂ at:", options: ["Daytime", "Nighttime", "Both equally", "Noon"], answer: 1 },
    { text: "Photorespiration occurs when:", options: ["O₂ is fixed instead of CO₂", "CO₂ is fixed", "Light is absent", "Water is abundant"], answer: 0 },
    { text: "Hormones are chemical messengers that travel via:", options: ["Nerves", "Bloodstream", "Lymph", "Direct contact"], answer: 1 },
    { text: "The pituitary gland is located in the:", options: ["Neck", "Brain", "Abdomen", "Chest"], answer: 1 },
    { text: "Growth hormone is produced by the:", options: ["Thyroid", "Pituitary", "Adrenal", "Pancreas"], answer: 1 },
    { text: "Thyroxine regulates:", options: ["Blood sugar", "Metabolism", "Blood pressure", "Digestion"], answer: 1 },
    { text: "Adrenaline prepares the body for:", options: ["Sleep", "Fight or flight", "Digestion", "Growth"], answer: 1 },
    { text: "Cortisol is a:", options: ["Sex hormone", "Stress hormone", "Growth hormone", "Thyroid hormone"], answer: 1 },
    { text: "Oxytocin is involved in:", options: ["Growth", "Childbirth and lactation", "Digestion", "Sleep"], answer: 1 },
    { text: "Positive feedback is exemplified by:", options: ["Temperature regulation", "Childbirth", "Blood sugar", "Blood pressure"], answer: 1 },
    { text: "Negative feedback maintains:", options: ["Homeostasis", "Disease", "Growth", "Development"], answer: 0 },
    { text: "Diabetes mellitus is caused by deficiency of:", options: ["Glucagon", "Insulin", "Thyroxine", "Cortisol"], answer: 1 },
    { text: "Type 1 diabetes is:", options: ["Insulin-dependent", "Non-insulin dependent", "Gestational", "Temporary"], answer: 0 },
    { text: "Goiter is caused by deficiency of:", options: ["Iron", "Iodine", "Calcium", "Vitamin D"], answer: 1 },
    { text: "Biotic factors include:", options: ["Temperature", "Predators", "Water", "Soil"], answer: 1 },
    { text: "An ecosystem consists of:", options: ["Only living organisms", "Living and non-living components", "Only plants", "Only animals"], answer: 1 },
    { text: "Producers in an ecosystem are:", options: ["Animals", "Plants", "Fungi", "Bacteria"], answer: 1 },
    { text: "A food chain always starts with:", options: ["Herbivore", "Producer", "Carnivore", "Decomposer"], answer: 1 },
    { text: "Biomagnification is the increase in concentration of:", options: ["Nutrients", "Toxic substances", "Water", "Oxygen"], answer: 1 },
    { text: "The ozone layer protects us from:", options: ["Infrared radiation", "UV radiation", "X-rays", "Gamma rays"], answer: 1 },
    { text: "Greenhouse gases include:", options: ["CO₂", "O₂", "N₂", "H₂"], answer: 0 },
    { text: "Global warming is caused by:", options: ["Ozone depletion", "Greenhouse effect", "Acid rain", "Deforestation only"], answer: 1 },
    { text: "Acid rain has a pH of:", options: ["Below 5.6", "7", "Above 7", "Exactly 7"], answer: 0 },
    { text: "Eutrophication is caused by excess of:", options: ["Oxygen", "Nutrients like nitrogen and phosphorus", "Carbon dioxide", "Hydrogen"], answer: 1 },
    { text: "Conservation of biodiversity aims to:", options: ["Protect species", "Increase pollution", "Reduce forests", "Promote hunting"], answer: 0 },
    { text: "In situ conservation includes:", options: ["Zoos", "National parks", "Gene banks", "Botanical gardens"], answer: 1 },
    { text: "Ex situ conservation includes:", options: ["National parks", "Seed banks", "Wildlife sanctuaries", "Biosphere reserves"], answer: 1 },
    { text: "Endemic species are found:", options: ["Worldwide", "In a specific geographic area", "Only in oceans", "Only in forests"], answer: 1 },
    { text: "The theory of evolution by natural selection requires:", options: ["Variation and inheritance", "Only mutation", "Only selection", "Only adaptation"], answer: 0 },
    { text: "Fossils provide evidence for:", options: ["Climate only", "Evolution", "Earthquakes", "Volcanoes"], answer: 1 },
    { text: "Analogous structures indicate:", options: ["Common ancestry", "Convergent evolution", "Divergent evolution", "No relationship"], answer: 1 },
    { text: "Homologous structures indicate:", options: ["Common ancestry", "Convergent evolution", "Analogous function", "No relationship"], answer: 0 },
    { text: "Vestigial organs are:", options: ["Functionless remnants", "Highly functional", "Recently evolved", "Only in animals"], answer: 0 },
    { text: "Speciation occurs when populations:", options: ["Merge", "Become reproductively isolated", "Migrate", "Increase in number"], answer: 1 },
    { text: "Allopatric speciation requires:", options: ["Geographic isolation", "Same location", "No isolation", "Temporal isolation"], answer: 0 },
    { text: "Sympatric speciation occurs:", options: ["Without geographic isolation", "With geographic isolation", "Only in plants", "Only in animals"], answer: 0 },
    { text: "Adaptive radiation is exemplified by:", options: ["Darwin's finches", "Whales", "Humans", "Bacteria"], answer: 0 },
    { text: "Co-evolution occurs when:", options: ["Two species evolve in response to each other", "One species evolves alone", "Species become extinct", "New species arise"], answer: 0 },
    { text: "The Hardy-Weinberg principle describes:", options: ["Genetic equilibrium", "Natural selection", "Mutation rates", "Migration patterns"], answer: 0 },
    { text: "Genetic drift is more significant in:", options: ["Large populations", "Small populations", "All populations equally", "No populations"], answer: 1 },
    { text: "Gene flow occurs when:", options: ["Individuals migrate between populations", "Genes mutate", "Chromosomes cross over", "DNA replicates"], answer: 0 },
    { text: "Tissue culture is used for:", options: ["Cloning plants", "Cloning animals", "Gene therapy", "Blood transfusion"], answer: 0 },
    { text: "Embryo splitting produces:", options: ["Identical twins", "Fraternal twins", "Clones", "Chimeras"], answer: 2 },
    { text: "Somatic cell nuclear transfer (SCNT) is used in:", options: ["Gene therapy", "Reproductive cloning", "PCR", "DNA sequencing"], answer: 1 },
    { text: "Therapeutic cloning produces:", options: ["Embryos for reproduction", "Stem cells for treatment", "New species", "Vaccines"], answer: 1 },
    { text: "The human genome project aimed to:", options: ["Sequence human DNA", "Clone humans", "Cure all diseases", "Create new species"], answer: 0 },
    { text: "Bioinformatics uses:", options: ["Computers to analyze biological data", "Only microscopes", "Only lab equipment", "Test tubes"], answer: 0 },
    { text: "Proteomics is the study of:", options: ["Genes", "Proteins", "Carbohydrates", "Lipids"], answer: 1 },
    { text: "Genomics is the study of:", options: ["Genes and genomes", "Proteins", "Metabolites", "Cells"], answer: 0 },
    { text: "Metagenomics studies:", options: ["A single genome", "Genetic material from environmental samples", "Only bacterial DNA", "Human DNA"], answer: 1 },
    { text: "RNA interference (RNAi) is used to:", options: ["Silence genes", "Activate genes", "Sequence genes", "Clone genes"], answer: 0 },
    { text: "CRISPR-Cas9 is a tool for:", options: ["Gene editing", "Protein synthesis", "Cell division", "Energy production"], answer: 0 },
    { text: "Transgenic organisms contain:", options: ["Foreign DNA", "Only their own DNA", "No DNA", "Only RNA"], answer: 0 },
    { text: "Knockout mice are used to study:", options: ["Gene function", "Protein structure", "Cell division", "Metabolism"], answer: 0 },
    { text: "Pharmacogenomics studies:", options: ["How genes affect drug response", "How drugs affect genes", "Drug synthesis", "Drug metabolism"], answer: 0 },
    { text: "Bioremediation uses microorganisms to:", options: ["Clean up pollution", "Produce drugs", "Generate energy", "Create food"], answer: 0 },
    { text: "Xenotransplantation involves:", options: ["Human to human transplant", "Animal to human transplant", "Artificial organs", "Stem cell therapy"], answer: 1 },
    { text: "RNA interference was discovered by:", options: ["Watson and Crick", "Fire and Mello", "Darwin", "Mendel"], answer: 1 },
    { text: "The microbiome refers to:", options: ["Microscopic organisms", "Collection of microbes in a habitat", "Small genes", "Tiny proteins"], answer: 1 },
    { text: "Epigenetics studies:", options: ["Changes in gene expression without DNA changes", "DNA mutations", "Protein structure", "Cell division"], answer: 0 },
    { text: "DNA methylation typically:", options: ["Activates genes", "Silences genes", "Duplicates genes", "Moves genes"], answer: 1 },
    { text: "Histone acetylation generally:", options: ["Condenses chromatin", "Relaxes chromatin", "Removes histones", "Adds histones"], answer: 1 },
    { text: "Non-coding RNAs include:", options: ["mRNA", "miRNA", "tRNA", "rRNA"], answer: 1 },
    { text: "Telomeres protect:", options: ["Chromosome ends", "Gene starts", "Protein terminals", "Cell membranes"], answer: 0 },
    { text: "Telomerase is active in:", options: ["Most somatic cells", "Stem cells and cancer cells", "Only cancer cells", "Only bacteria"], answer: 1 },
    { text: "Prions are infectious:", options: ["Proteins", "Viruses", "Bacteria", "Fungi"], answer: 0 },
    { text: "Viroid's consist of:", options: ["RNA only", "DNA only", "Both RNA and DNA", "No nucleic acid"], answer: 0 },
    { text: "Oncogenes promote:", options: ["Cell division", "Cell death", "Cell differentiation", "Cell repair"], answer: 0 },
    { text: "Tumor suppressor genes like p53:", options: ["Promote cell division", "Inhibit cell division or promote repair", "Cause cancer", "Have no function"], answer: 1 },
    { text: "Carcinogens are agents that:", options: ["Cause cancer", "Prevent cancer", "Treat cancer", "Detect cancer"], answer: 0 },
    { text: "Metastasis is the:", options: ["Spread of cancer", "Initial tumor formation", "Cancer treatment", "Cancer prevention"], answer: 0 },
    { text: "Benign tumors:", options: ["Do not spread", "Metastasize", "Are always cancerous", "Invade nearby tissues"], answer: 0 },
    { text: "Malignant tumors:", options: ["Do not spread", "Invade and metastasize", "Are harmless", "Are encapsulated"], answer: 1 },
    { text: "Chemotherapy uses:", options: ["Drugs to kill cancer cells", "Radiation", "Surgery", "Gene therapy"], answer: 0 },
    { text: "Radiation therapy targets:", options: ["All cells equally", "Rapidly dividing cells", "Only cancer cells", "Immune cells"], answer: 1 },
    { text: "Immunotherapy for cancer involves:", options: ["Boosting immune response", "Killing all cells", "Replacing organs", "Transfusing blood"], answer: 0 },
    { text: "Targeted therapy uses:", options: ["Drugs that target specific molecules in cancer cells", "General chemotherapy", "Radiation", "Surgery"], answer: 0 }
];

// ================================================================
// CHEMISTRY - 200+ Questions
// ================================================================
window.MCQ_DATA.chemistry = [
    // === INTRODUCTION TO FUNDAMENTAL CONCEPTS ===
    { text: "Avogadro's number is:", options: ["6.022 × 10²³", "3.14 × 10²³", "9.8 × 10²³", "1.6 × 10¹⁹"], answer: 0 },
    { text: "One mole of any gas at STP occupies:", options: ["22.4 L", "11.2 L", "44.8 L", "5.6 L"], answer: 0 },
    { text: "The molar mass of H₂O is:", options: ["16 g/mol", "18 g/mol", "20 g/mol", "22 g/mol"], answer: 1 },
    { text: "How many moles are in 36 g of water?", options: ["1 mol", "2 mol", "3 mol", "0.5 mol"], answer: 1 },
    { text: "The limiting reagent is:", options: ["The reactant present in excess", "The reactant that is completely consumed", "The product formed", "The catalyst"], answer: 1 },
    { text: "Theoretical yield is:", options: ["The maximum possible product", "The actual product obtained", "The expected loss", "The waste product"], answer: 0 },
    { text: "Percentage yield =", options: ["(Actual/Theoretical) × 100", "(Theoretical/Actual) × 100", "Actual - Theoretical", "Theoretical - Actual"], answer: 0 },
    { text: "If 2 moles of H₂ react with 1 mole of O₂, the limiting reagent is:", options: ["H₂", "O₂", "Both", "Neither"], answer: 1 },
    { text: "A balanced equation shows:", options: ["Only reactants", "Only products", "Conservation of mass and atoms", "Energy changes"], answer: 2 },
    { text: "STP conditions are:", options: ["0°C and 1 atm", "25°C and 1 atm", "0°C and 2 atm", "25°C and 0.5 atm"], answer: 0 },

    // === ATOMIC STRUCTURE ===
    { text: "The proton was discovered by:", options: ["Rutherford", "Chadwick", "Goldstein", "Thomson"], answer: 2 },
    { text: "A photon is a:", options: ["Particle of light", "Type of atom", "Nucleus", "Electron"], answer: 0 },
    { text: "The principal quantum number (n) describes:", options: ["Shape of orbital", "Energy level/size of orbital", "Orientation of orbital", "Spin of electron"], answer: 1 },
    { text: "The azimuthal quantum number (l) describes:", options: ["Energy level", "Shape of orbital", "Orientation of orbital", "Electron spin"], answer: 1 },
    { text: "What is the shape of an s orbital?", options: ["Spherical", "Dumbbell", "Doughnut", "Complex"], answer: 0 },
    { text: "A p orbital has how many lobes?", options: ["1", "2", "3", "4"], answer: 1 },
    { text: "The Aufbau principle states that:", options: ["Electrons fill lower energy orbitals first", "Electrons pair up before filling", "No two electrons have the same set of quantum numbers", "Electrons occupy orbitals singly first"], answer: 0 },
    { text: "Pauli Exclusion Principle states:", options: ["Electrons fill lower energy first", "No two electrons can have all four quantum numbers the same", "Electrons occupy orbitals singly", "Electrons have opposite spins"], answer: 1 },
    { text: "Hund's Rule states:", options: ["Electrons pair up", "Electrons fill orbitals singly before pairing", "Electrons fill lowest energy first", "Electrons repel each other"], answer: 1 },
    { text: "The electronic configuration of oxygen (Z=8) is:", options: ["1s² 2s² 2p⁴", "1s² 2s² 2p⁶", "1s² 2s² 2p²", "1s² 2s² 2p³"], answer: 0 },

    // === GASES ===
    { text: "According to KMT, gas particles:", options: ["Are in constant random motion", "Are stationary", "Attract each other strongly", "Have fixed positions"], answer: 0 },
    { text: "Boyle's Law states that at constant temperature:", options: ["P ∝ V", "P ∝ 1/V", "V ∝ T", "P ∝ T"], answer: 1 },
    { text: "Charles's Law states that at constant pressure:", options: ["P ∝ V", "V ∝ T", "P ∝ T", "V ∝ 1/P"], answer: 1 },
    { text: "Absolute zero is:", options: ["0°C", "-273°C", "273°C", "100°C"], answer: 1 },
    { text: "The ideal gas equation is:", options: ["PV = nRT", "PV = nR/T", "P = nRTV", "PV = RT/n"], answer: 0 },
    { text: "Real gases deviate from ideal behavior at:", options: ["High temperature and low pressure", "Low temperature and high pressure", "All conditions", "STP"], answer: 1 },
    { text: "The value of R in SI units is:", options: ["0.0821 L·atm/mol·K", "8.314 J/mol·K", "6.022 × 10²³", "22.4 L/mol"], answer: 1 },

    // === LIQUIDS ===
    { text: "Evaporation is a:", options: ["Surface phenomenon", "Bulk phenomenon", "Both", "Neither"], answer: 0 },
    { text: "Vapor pressure increases with:", options: ["Decreasing temperature", "Increasing temperature", "Constant volume", "Decreasing surface area"], answer: 1 },
    { text: "Boiling point is the temperature at which:", options: ["Vapor pressure equals atmospheric pressure", "Evaporation begins", "Condensation occurs", "Freezing occurs"], answer: 0 },
    { text: "Hydrogen bonding occurs in all EXCEPT:", options: ["H₂O", "NH₃", "HF", "CH₄"], answer: 3 },
    { text: "Water shows anomalous behavior because of:", options: ["Covalent bonds", "Hydrogen bonding", "Ionic bonds", "Metallic bonds"], answer: 1 },
    { text: "The density of water is maximum at:", options: ["0°C", "4°C", "10°C", "100°C"], answer: 1 },

    // === SOLIDS ===
    { text: "Crystalline solids have:", options: ["Regular arrangement of particles", "Irregular arrangement", "No long-range order", "Random structure"], answer: 0 },
    { text: "Ionic crystals are held together by:", options: ["Covalent bonds", "Ionic bonds", "Hydrogen bonds", "Van der Waals forces"], answer: 1 },
    { text: "Molecular crystals have:", options: ["Very high melting point", "Low melting point", "High electrical conductivity", "Metallic luster"], answer: 1 },
    { text: "Lattice energy is the energy released when:", options: ["Ions form a crystal lattice", "Crystals dissolve", "Atoms bond", "Metals conduct"], answer: 0 },
    { text: "A crystal lattice is:", options: ["A 3D arrangement of particles", "A 2D arrangement", "A single particle", "A molecule"], answer: 0 },

    // === CHEMICAL EQUILIBRIUM ===
    { text: "Chemical equilibrium is characterized by:", options: ["Equal rates of forward and reverse reactions", "Equal concentrations of reactants and products", "No reaction occurring", "Maximum product formation"], answer: 0 },
    { text: "Le Chatelier's principle states that:", options: ["System at equilibrium resists change", "Reactions always proceed forward", "Equilibrium cannot be altered", "Catalysts change equilibrium"], answer: 0 },
    { text: "Increasing temperature in an exothermic reaction:", options: ["Shifts equilibrium to the left", "Shifts equilibrium to the right", "Has no effect", "Doubles the rate"], answer: 0 },
    { text: "Adding a catalyst to a reaction:", options: ["Shifts equilibrium right", "Shifts equilibrium left", "Speeds up both forward and reverse equally", "Changes the equilibrium constant"], answer: 2 },
    { text: "The solubility product (Ksp) is:", options: ["The equilibrium constant for dissolution", "The amount dissolved", "The rate of dissolution", "The pH of solution"], answer: 0 },
    { text: "Common ion effect refers to:", options: ["Decreased solubility due to a common ion", "Increased solubility", "No change in solubility", "Precipitation"], answer: 0 },
    { text: "A buffer solution:", options: ["Resists pH change", "Has fixed pH", "Is always acidic", "Is always basic"], answer: 0 },
    { text: "The Haber process produces:", options: ["NH₃", "HNO₃", "H₂SO₄", "NaOH"], answer: 0 },

    // === REACTION KINETICS ===
    { text: "Chemical kinetics deals with:", options: ["Rate of reactions", "Equilibrium", "Thermodynamics", "Quantum mechanics"], answer: 0 },
    { text: "The rate of reaction depends on:", options: ["Concentration", "Temperature", "Catalyst", "All of these"], answer: 3 },
    { text: "Activation energy is the:", options: ["Energy required to start a reaction", "Energy released", "Maximum energy", "Energy of products"], answer: 0 },
    { text: "An activated complex is:", options: ["Temporary unstable intermediate", "Stable product", "Reactant", "Catalyst"], answer: 0 },
    { text: "A catalyst works by:", options: ["Lowering activation energy", "Increasing activation energy", "Changing products", "Consuming reactants"], answer: 0 },
    { text: "The rate constant (k) depends on:", options: ["Temperature", "Concentration", "Volume", "Pressure"], answer: 0 },

    // === THERMOCHEMISTRY ===
    { text: "Thermodynamics is the study of:", options: ["Energy transformations", "Reaction rates", "Equilibrium", "Atomic structure"], answer: 0 },
    { text: "An exothermic reaction:", options: ["Releases heat", "Absorbs heat", "Has no heat change", "Requires heat"], answer: 0 },
    { text: "An endothermic reaction:", options: ["Releases heat", "Absorbs heat", "Has no heat change", "Produces cold"], answer: 1 },
    { text: "Enthalpy (H) is:", options: ["Heat content of a system", "Temperature", "Pressure", "Volume"], answer: 0 },
    { text: "The first law of thermodynamics is the law of:", options: ["Conservation of energy", "Entropy", "Equilibrium", "Motion"], answer: 0 },
    { text: "Hess's Law states that enthalpy change:", options: ["Is independent of path", "Depends on path", "Is always positive", "Is always negative"], answer: 0 },
    { text: "ΔH for a reaction is negative for:", options: ["Exothermic reactions", "Endothermic reactions", "Reversible reactions", "Irreversible reactions"], answer: 0 },

    // === ELECTROCHEMISTRY ===
    { text: "A redox reaction involves:", options: ["Transfer of electrons", "Transfer of protons", "Transfer of neutrons", "No transfer"], answer: 0 },
    { text: "Oxidation is the:", options: ["Loss of electrons", "Gain of electrons", "Loss of protons", "Gain of protons"], answer: 0 },
    { text: "Reduction is the:", options: ["Loss of electrons", "Gain of electrons", "Loss of oxygen", "Gain of hydrogen"], answer: 1 },
    { text: "Standard Hydrogen Electrode (SHE) has a potential of:", options: ["0 V", "1 V", "-1 V", "0.5 V"], answer: 0 },
    { text: "Anode is the electrode where:", options: ["Oxidation occurs", "Reduction occurs", "No reaction occurs", "Gas is produced"], answer: 0 },
    { text: "Cathode is the electrode where:", options: ["Oxidation occurs", "Reduction occurs", "No reaction occurs", "Metal is dissolved"], answer: 1 },
    { text: "Electrode potential is measured in:", options: ["Volts", "Amperes", "Ohms", "Joules"], answer: 0 },

    // === CHEMICAL BONDING ===
    { text: "VSEPR theory predicts:", options: ["Molecular shapes", "Reaction rates", "Equilibrium constants", "Electron configurations"], answer: 0 },
    { text: "A molecule with 4 bond pairs has a shape of:", options: ["Tetrahedral", "Trigonal planar", "Linear", "Octahedral"], answer: 0 },
    { text: "A molecule with 3 bond pairs has a shape of:", options: ["Trigonal planar", "Tetrahedral", "Linear", "Bent"], answer: 0 },
    { text: "A molecule with 2 bond pairs has a shape of:", options: ["Linear", "Bent", "Trigonal planar", "Tetrahedral"], answer: 0 },
    { text: "A sigma bond is formed by:", options: ["End-to-end overlap", "Sideways overlap", "Overlap of p orbitals", "Overlap of d orbitals"], answer: 0 },
    { text: "A pi bond is formed by:", options: ["Sideways overlap", "End-to-end overlap", "Overlap of s orbitals", "Ionic attraction"], answer: 0 },
    { text: "In sp³ hybridization, the bond angle is:", options: ["109.5°", "120°", "180°", "90°"], answer: 0 },
    { text: "In sp² hybridization, the bond angle is:", options: ["109.5°", "120°", "180°", "90°"], answer: 1 },
    { text: "In sp hybridization, the bond angle is:", options: ["109.5°", "120°", "180°", "90°"], answer: 2 },
    { text: "Bond energy is the energy required to:", options: ["Break a bond", "Form a bond", "Change a bond", "Stabilize a bond"], answer: 0 },
    { text: "A polar molecule has:", options: ["Unequal charge distribution", "Equal charge distribution", "No charge", "Only positive charge"], answer: 0 },
    { text: "Water is a polar molecule because of its:", options: ["Bent shape and electronegativity difference", "Linear shape", "No dipole moment", "Non-polar bonds"], answer: 0 },

    // === S AND P BLOCK ELEMENTS ===
    { text: "Atomic radius generally _____ across a period:", options: ["Decreases", "Increases", "Stays the same", "Varies randomly"], answer: 0 },
    { text: "Ionization energy generally _____ down a group:", options: ["Decreases", "Increases", "Stays the same", "Doubles"], answer: 0 },
    { text: "Electronegativity generally _____ across a period:", options: ["Increases", "Decreases", "Stays the same", "Varies"], answer: 0 },
    { text: "Group I elements react with water to form:", options: ["Hydroxides and hydrogen gas", "Oxides only", "Salls only", "No reaction"], answer: 0 },
    { text: "Group II elements are also called:", options: ["Alkaline earth metals", "Alkali metals", "Halogens", "Noble gases"], answer: 0 },
    { text: "Group IV elements show variable oxidation states of:", options: ["+2 and +4", "+1 and +2", "+3 and +5", "-1 and -2"], answer: 0 },
    { text: "The periodic table is divided into how many blocks?", options: ["4", "3", "5", "2"], answer: 0 },

    // === TRANSITION ELEMENTS ===
    { text: "Transition elements are characterized by:", options: ["Partially filled d orbitals", "Full d orbitals", "No d orbitals", "Only s orbitals"], answer: 0 },
    { text: "Which of the following is a transition element?", options: ["Fe", "Na", "Cl", "S"], answer: 0 },
    { text: "Transition elements often show:", options: ["Variable oxidation states", "Only one oxidation state", "No oxidation state", "Negative oxidation states"], answer: 0 },
    { text: "Colored compounds of transition elements are due to:", options: ["d-d transitions", "s-p transitions", "Charge transfer", "Ionic bonding"], answer: 0 },

    // === ORGANIC CHEMISTRY FUNDAMENTALS ===
    { text: "Organic chemistry is the study of:", options: ["Carbon compounds", "Non-carbon compounds", "Only hydrocarbons", "Inorganic compounds"], answer: 0 },
    { text: "Functional groups determine:", options: ["Chemical properties of organic compounds", "Physical state only", "Molecular weight", "Boiling point only"], answer: 0 },
    { text: "Isomerism means:", options: ["Same formula, different structures", "Different formulas, same structure", "Same structure, same formula", "Different allotropes"], answer: 0 },
    { text: "Structural isomers have:", options: ["Same molecular formula, different connectivity", "Same connectivity, different formula", "Same everything", "Different molecular formula"], answer: 0 },
    { text: "Stereoisomers have:", options: ["Same connectivity, different spatial arrangement", "Different connectivity", "Different formula", "Same spatial arrangement"], answer: 0 },
    { text: "Geometric isomerism occurs in:", options: ["Alkenes", "Alkanes", "Alkynes", "Aromatic compounds"], answer: 0 },
    { text: "Optical isomers are:", options: ["Non-superimposable mirror images", "Same molecule", "Structural isomers", "Tautomers"], answer: 0 },

    // === HYDROCARBONS ===
    { text: "Alkanes have the general formula:", options: ["CₙH₂ₙ₊₂", "CₙH₂ₙ", "CₙH₂ₙ₋₂", "CₙHₙ"], answer: 0 },
    { text: "Alkenes have the general formula:", options: ["CₙH₂ₙ₊₂", "CₙH₂ₙ", "CₙH₂ₙ₋₂", "CₙHₙ"], answer: 1 },
    { text: "Alkynes have the general formula:", options: ["CₙH₂ₙ₊₂", "CₙH₂ₙ", "CₙH₂ₙ₋₂", "CₙHₙ"], answer: 2 },
    { text: "Methane reacts with chlorine in the presence of light via:", options: ["Free radical substitution", "Electrophilic addition", "Nucleophilic substitution", "Elimination"], answer: 0 },
    { text: "Ethene reacts with bromine via:", options: ["Electrophilic addition", "Free radical substitution", "Nucleophilic substitution", "Elimination"], answer: 0 },
    { text: "Benzene undergoes:", options: ["Electrophilic substitution", "Nucleophilic substitution", "Free radical substitution", "Addition reactions"], answer: 0 },
    { text: "The shape of benzene is:", options: ["Planar hexagonal", "Tetrahedral", "Linear", "Pyramidal"], answer: 0 },
    { text: "Resonance energy of benzene is:", options: ["150 kJ/mol", "75 kJ/mol", "200 kJ/mol", "50 kJ/mol"], answer: 0 },
    { text: "Nitration of benzene requires:", options: ["HNO₃/H₂SO₄", "HCl/H₂O", "NaOH/H₂O", "KMnO₄"], answer: 0 },
    { text: "Friedel-Crafts alkylation uses:", options: ["AlCl₃ as catalyst", "FeCl₃ as catalyst", "ZnCl₂ as catalyst", "No catalyst"], answer: 0 },
    { text: "Dehydration of ethanol produces:", options: ["Ethene", "Ethane", "Ethyne", "Ethyl chloride"], answer: 0 },
    { text: "Dehydrohalogenation of alkyl halide produces:", options: ["Alkene", "Alkane", "Alkyne", "Alcohol"], answer: 0 },
    { text: "Alkynes are more acidic than alkenes because:", options: ["s-character of C-H bond", "More carbon content", "Less hydrogen", "Triple bond length"], answer: 0 },
    { text: "Hydrogenation of alkenes requires:", options: ["Pt/Pd/Ni catalyst", "AlCl₃", "NaOH", "H₂SO₄"], answer: 0 },
    { text: "Markovnikov's rule applies to:", options: ["Addition to alkenes", "Substitution reactions", "Elimination reactions", "Rearrangement"], answer: 0 },

    // === ALKYL HALIDES ===
    { text: "Alkyl halides have the general formula:", options: ["R-X", "R-OH", "R-CHO", "R-COOH"], answer: 0 },
    { text: "Nucleophilic substitution in alkyl halides can be:", options: ["SN1 or SN2", "Only SN1", "Only SN2", "Neither"], answer: 0 },
    { text: "SN2 reactions are favored by:", options: ["Primary alkyl halides", "Tertiary alkyl halides", "Aromatic halides", "Secondary halides"], answer: 0 },
    { text: "SN1 reactions occur via:", options: ["Carbocation intermediate", "Transition state only", "Radical intermediate", "No intermediate"], answer: 0 },
    { text: "Elimination reactions of alkyl halides produce:", options: ["Alkenes", "Alkanes", "Alcohols", "Ethers"], answer: 0 },

    // === ALCOHOLS AND PHENOLS ===
    { text: "Ethanol can be prepared by:", options: ["Fermentation", "Distillation", "Sublimation", "Filtration"], answer: 0 },
    { text: "Phenol is more acidic than ethanol because:", options: ["Phenoxide ion is resonance stabilized", "Phenol has more carbon", "Phenol is larger", "Ethanol is smaller"], answer: 0 },
    { text: "The functional group of alcohols is:", options: ["-OH", "-CHO", "-COOH", "-NH₂"], answer: 0 },
    { text: "Primary alcohols oxidize to:", options: ["Aldehydes then carboxylic acids", "Ketones", "Alkenes", "Ethers"], answer: 0 },
    { text: "Secondary alcohols oxidize to:", options: ["Ketones", "Aldehydes", "Carboxylic acids", "Alkenes"], answer: 0 },
    { text: "Tertiary alcohols are resistant to:", options: ["Oxidation", "Reduction", "Dehydration", "Esterification"], answer: 0 },

    // === ALDEHYDES AND KETONES ===
    { text: "Aldehydes have the general formula:", options: ["R-CHO", "R-CO-R", "R-COOH", "R-OH"], answer: 0 },
    { text: "Ketones have the general formula:", options: ["R-CO-R", "R-CHO", "R-COOH", "R-OH"], answer: 0 },
    { text: "Aldehydes are prepared by:", options: ["Oxidation of primary alcohols", "Oxidation of secondary alcohols", "Reduction of acids", "Hydration of alkenes"], answer: 0 },
    { text: "Ketones are prepared by:", options: ["Oxidation of secondary alcohols", "Oxidation of primary alcohols", "Reduction of acids", "Dehydration of alcohols"], answer: 0 },
    { text: "Aldehydes are more reactive than ketones due to:", options: ["Less steric hindrance and more polar C=O", "More steric hindrance", "Less polarity", "Larger size"], answer: 0 },
    { text: "Fehling's test is positive for:", options: ["Aldehydes", "Ketones", "Both", "Neither"], answer: 0 },
    { text: "Tollens' reagent contains:", options: ["Ag⁺ in ammonia", "Cu²⁺ in tartrate", "I₂ in KI", "KMnO₄"], answer: 0 },

    // === CARBOXYLIC ACIDS ===
    { text: "Carboxylic acids have the functional group:", options: ["-COOH", "-OH", "-CHO", "-CO-"], answer: 0 },
    { text: "Carboxylic acids are acidic because they:", options: ["Release H⁺", "Accept H⁺", "Release OH⁻", "Are neutral"], answer: 0 },
    { text: "Acetic acid reacts with ethanol to form:", options: ["Ester", "Ether", "Aldehyde", "Ketone"], answer: 0 },
    { text: "Carboxylic acids can be reduced to:", options: ["Primary alcohols", "Secondary alcohols", "Aldehydes", "Ketones"], answer: 0 },
    { text: "The acidity of carboxylic acids decreases with:", options: ["Increasing alkyl chain length", "Decreasing chain length", "Electron withdrawing groups", "Branched chains"], answer: 0 },
    { text: "Acyl halides are derivatives of:", options: ["Carboxylic acids", "Alcohols", "Aldehydes", "Ketones"], answer: 0 },

    // === MACROMOLECULES ===
    { text: "Proteins are classified based on:", options: ["Structure and function", "Only color", "Only taste", "Only solubility"], answer: 0 },
    { text: "Enzymes act as:", options: ["Biocatalysts", "Inhibitors", "Reactants", "Products"], answer: 0 },
    { text: "The primary structure of a protein involves:", options: ["Peptide bonds between amino acids", "Hydrogen bonds", "Disulfide bridges", "Ionic interactions"], answer: 0 },
    { text: "Denaturation of proteins involves:", options: ["Loss of 3D structure", "Breaking of peptide bonds", "Formation of new bonds", "Increased solubility"], answer: 0 },
    { text: "Globular proteins are:", options: ["Spherical and water-soluble", "Fibrous and insoluble", "Linear chains", "Only found in plants"], answer: 0 },
    { text: "Fibrous proteins include:", options: ["Collagen and keratin", "Hemoglobin", "Myoglobin", "Enzymes"], answer: 0 },

    // === INDUSTRIAL CHEMISTRY ===
    { text: "Addition polymers include:", options: ["Polyethylene", "Nylon", "Polyester", "Bakelite"], answer: 0 },
    { text: "Condensation polymers include:", options: ["Nylon and polyester", "Polyethylene", "Polypropylene", "Polystyrene"], answer: 0 },
    { text: "Adhesives are used for:", options: ["Bonding materials", "Only painting", "Only sealing", "Decoration"], answer: 0 },
    { text: "Dyes are classified based on:", options: ["Chemical structure and application", "Only color", "Only price", "Only origin"], answer: 0 },
    { text: "Azo dyes contain:", options: ["-N=N- group", "-OH group", "-COOH group", "-NH₂ group"], answer: 0 },
    { text: "Thermoplastics can be:", options: ["Re-melted and reshaped", "Cannot be re-melted", "Always rigid", "Only used once"], answer: 0 },
    { text: "Thermosetting plastics:", options: ["Cannot be re-melted", "Can be re-melted", "Are always flexible", "Dissolve in water"], answer: 0 },
    { text: "Vulcanization of rubber involves:", options: ["Sulfur cross-linking", "Heating without sulfur", "Adding plasticizer", "Dissolving in solvent"], answer: 0 },
    { text: "Petrochemicals are derived from:", options: ["Crude oil and natural gas", "Plants only", "Animals only", "Minerals"], answer: 0 },
    { text: "Cracking of hydrocarbons produces:", options: ["Smaller alkanes and alkenes", "Larger alkanes", "Aromatics", "Cycloalkanes"], answer: 0 },
    { text: "Reforming converts straight-chain alkanes into:", options: ["Branched and cyclic compounds", "Only alkenes", "Only alkynes", "Only aromatics"], answer: 0 },
    { text: "Octane number measures:", options: ["Fuel's resistance to knocking", "Fuel's density", "Fuel's viscosity", "Fuel's color"], answer: 0 },
    { text: "Cetane number measures:", options: ["Diesel fuel ignition quality", "Gasoline quality", "Lubricant quality", "Oil viscosity"], answer: 0 },
    { text: "In a galvanic cell, chemical energy is converted to:", options: ["Electrical energy", "Thermal energy", "Light energy", "Nuclear energy"], answer: 0 },
    { text: "In an electrolytic cell, electrical energy is used to drive:", options: ["Non-spontaneous reactions", "Spontaneous reactions", "Only reduction", "Only oxidation"], answer: 0 },
    { text: "Faraday's law relates:", options: ["Amount of substance to charge passed", "Current to voltage", "Resistance to temperature", "Power to energy"], answer: 0 }
];

// ================================================================
// PHYSICS - 200+ Questions
// ================================================================
window.MCQ_DATA.physics = [
    // === VECTORS AND EQUILIBRIUM ===
    { text: "The sum of two vectors is maximum when the angle between them is:", options: ["0°", "90°", "180°", "270°"], answer: 0 },
    { text: "The scalar product of two vectors is:", options: ["A·B = AB cosθ", "A·B = AB sinθ", "A·B = AB", "A·B = A+B"], answer: 0 },
    { text: "The vector product of two vectors is:", options: ["A×B = AB sinθ", "A×B = AB cosθ", "A×B = A+B", "A×B = A-B"], answer: 0 },
    { text: "The direction of the vector product is given by:", options: ["Right-hand rule", "Left-hand rule", "Ampere's rule", "Fleming's rule"], answer: 0 },
    { text: "If two vectors are perpendicular, their scalar product is:", options: ["Zero", "Maximum", "Minimum", "Negative"], answer: 0 },
    { text: "The rectangular components of a vector are:", options: ["Perpendicular to each other", "Parallel", "Anti-parallel", "At 45°"], answer: 0 },

    // === FORCE AND MOTION ===
    { text: "Displacement is a:", options: ["Vector quantity", "Scalar quantity", "Neither", "Both"], answer: 0 },
    { text: "Average velocity is defined as:", options: ["Total displacement/Total time", "Total distance/Total time", "Δv/Δt", "Δd/Δt"], answer: 0 },
    { text: "The slope of a displacement-time graph gives:", options: ["Velocity", "Acceleration", "Distance", "Speed"], answer: 0 },
    { text: "Acceleration is defined as:", options: ["Rate of change of velocity", "Rate of change of displacement", "Rate of change of distance", "Change in position"], answer: 0 },
    { text: "Uniform acceleration means:", options: ["Velocity changes at a constant rate", "Velocity is constant", "Speed is constant", "No acceleration"], answer: 0 },
    { text: "Projectile motion is:", options: ["Two-dimensional motion in a vertical plane", "One-dimensional motion", "Circular motion", "Linear motion"], answer: 0 },
    { text: "The horizontal component of velocity in projectile motion:", options: ["Remains constant", "Changes continuously", "Decreases linearly", "Increases"], answer: 0 },
    { text: "The vertical acceleration of a projectile is:", options: ["9.8 m/s² downward", "Zero", "9.8 m/s² upward", "Variable"], answer: 0 },
    { text: "The maximum range of a projectile is achieved at an angle of:", options: ["45°", "30°", "60°", "90°"], answer: 0 },
    { text: "Newton's First Law is also called:", options: ["Law of Inertia", "Law of Acceleration", "Action-Reaction", "Law of Gravitation"], answer: 0 },
    { text: "Newton's Second Law states: F =", options: ["ma", "mv", "m/t", "mgh"], answer: 0 },
    { text: "Momentum is defined as:", options: ["p = mv", "p = ma", "p = mgh", "p = m/t"], answer: 0 },
    { text: "Newton's Third Law states:", options: ["Action = -Reaction", "F = ma", "p = mv", "E=mc²"], answer: 0 },
    { text: "In an elastic collision:", options: ["Both momentum and KE are conserved", "Only momentum is conserved", "Only KE is conserved", "Neither is conserved"], answer: 0 },
    { text: "In an inelastic collision:", options: ["Only momentum is conserved", "Both momentum and KE are conserved", "Only KE is conserved", "Neither is conserved"], answer: 0 },
    { text: "The relative speed of approach equals relative speed of separation in:", options: ["Perfectly elastic collision", "Perfectly inelastic collision", "All collisions", "No collisions"], answer: 0 },

    // === WORK AND ENERGY ===
    { text: "Work done is defined as:", options: ["W = F·d = Fd cosθ", "W = F/d", "W = mgh", "W = ½mv²"], answer: 0 },
    { text: "Energy is the capacity to:", options: ["Do work", "Move", "Accelerate", "Heat"], answer: 0 },
    { text: "Kinetic energy is given by:", options: ["½mv²", "mgh", "½kx²", "mgh/2"], answer: 0 },
    { text: "Gravitational potential energy is:", options: ["mgh", "½mv²", "½kx²", "Fd"], answer: 0 },
    { text: "Power can be expressed as:", options: ["F·v", "F/t", "mgh/t", "½mv²"], answer: 0 },
    { text: "Work done against friction is:", options: ["Dissipated as heat", "Stored as potential energy", "Converted to kinetic energy", "Lost forever"], answer: 0 },
    { text: "Efficiency of a machine is:", options: ["(Output/Input) × 100%", "(Input/Output) × 100%", "Output - Input", "Input - Output"], answer: 0 },

    // === ROTATIONAL AND CIRCULAR MOTION ===
    { text: "Angular displacement is measured in:", options: ["Radians", "Meters", "Seconds", "Hertz"], answer: 0 },
    { text: "One revolution equals:", options: ["2π radians", "π radians", "180 radians", "360 radians"], answer: 0 },
    { text: "Angular velocity is defined as:", options: ["Δθ/Δt", "Δv/Δt", "Δs/Δt", "Δω/Δt"], answer: 0 },
    { text: "The relationship between linear and angular velocity is:", options: ["v = ωr", "v = ω/r", "v = r/ω", "v = ω²r"], answer: 0 },

    // === FLUID DYNAMICS ===
    { text: "Terminal velocity is reached when:", options: ["Weight = Drag force", "Weight > Drag", "Weight < Drag", "Velocity is zero"], answer: 0 },
    { text: "Fluid drag depends on:", options: ["Velocity, area, and fluid viscosity", "Only mass", "Only temperature", "Only pressure"], answer: 0 },
    { text: "The equation of continuity is:", options: ["A₁v₁ = A₂v₂", "P₁V₁ = P₂V₂", "v₁/t₁ = v₂/t₂", "A₁P₁ = A₂P₂"], answer: 0 },
    { text: "Bernoulli's equation for horizontal flow is:", options: ["P + ½ρv² = constant", "P + ρgh = constant", "P + ½ρv² + ρgh = constant", "½ρv² = constant"], answer: 0 },
    { text: "Bernoulli's effect explains:", options: ["Lift in aircraft", "Buoyancy", "Terminal velocity", "Viscosity"], answer: 0 },

    // === WAVES ===
    { text: "Mechanical waves require a:", options: ["Medium for propagation", "Vacuum", "Electromagnetic field", "No medium"], answer: 0 },
    { text: "The wave equation is:", options: ["v = fλ", "v = f/λ", "v = λ/f", "v = f²λ"], answer: 0 },
    { text: "In a transverse wave, particles vibrate:", options: ["Perpendicular to wave direction", "Parallel to wave direction", "Randomly", "In circles"], answer: 0 },
    { text: "In a longitudinal wave, particles vibrate:", options: ["Parallel to wave direction", "Perpendicular to wave direction", "Randomly", "In circles"], answer: 0 },
    { text: "The speed of sound in air according to Newton is:", options: ["v = √(P/ρ)", "v = √(γP/ρ)", "v = √(RT/M)", "v = √(E/ρ)"], answer: 0 },
    { text: "Laplace corrected Newton's formula by introducing:", options: ["γ (gamma)", "Temperature", "Pressure", "Density"], answer: 0 },
    { text: "The principle of superposition states:", options: ["Net displacement = sum of individual displacements", "Waves cancel each other", "Waves reflect", "Waves refract"], answer: 0 },
    { text: "Nodes are points of:", options: ["Zero displacement", "Maximum displacement", "No vibration", "Maximum amplitude"], answer: 0 },
    { text: "Antinodes are points of:", options: ["Maximum displacement", "Zero displacement", "No vibration", "Minimum amplitude"], answer: 0 },
    { text: "Simple Harmonic Motion (SHM) is characterized by:", options: ["Restoring force ∝ -x", "Constant velocity", "Constant acceleration", "Zero displacement"], answer: 0 },

    // === THERMODYNAMICS ===
    { text: "Heat always flows from:", options: ["Higher temperature to lower temperature", "Lower to higher temperature", "In both directions", "No flow"], answer: 0 },
    { text: "The first law of thermodynamics is:", options: ["ΔU = Q - W", "ΔU = Q + W", "ΔU = Q/W", "ΔU = W - Q"], answer: 0 },
    { text: "The relation between Cp and Cv for an ideal gas is:", options: ["Cp - Cv = R", "Cp + Cv = R", "Cp × Cv = R", "Cp/Cv = R"], answer: 0 },

    // === ELECTROSTATICS ===
    { text: "Coulomb's law states: F =", options: ["k q₁q₂/r²", "k q₁q₂/r", "k q₁q₂ × r²", "k q₁q₂ × r"], answer: 0 },
    { text: "Electric field intensity due to a point charge is:", options: ["E = kQ/r²", "E = kQ/r", "E = kQ × r²", "E = kQ × r"], answer: 0 },
    { text: "Electric potential due to a point charge is:", options: ["V = kQ/r", "V = kQ/r²", "V = kQ × r", "V = kQ × r²"], answer: 0 },
    { text: "The unit of electric potential is:", options: ["Volt", "Ampere", "Ohm", "Coulomb"], answer: 0 },
    { text: "Capacitance is measured in:", options: ["Farad", "Volt", "Ampere", "Henry"], answer: 0 },

    // === CURRENT ELECTRICITY ===
    { text: "Ohm's law states:", options: ["V = IR", "I = VR", "R = VI", "V = I/R"], answer: 0 },
    { text: "Resistivity depends on:", options: ["Temperature", "Voltage", "Current", "Power"], answer: 0 },
    { text: "Internal resistance of a source:", options: ["Reduces terminal voltage", "Increases terminal voltage", "Has no effect", "Doubles the current"], answer: 0 },
    { text: "Maximum power transfer occurs when:", options: ["R_load = R_internal", "R_load = 2R_internal", "R_load = R_internal/2", "R_load = 0"], answer: 0 },

    // === ELECTROMAGNETISM ===
    { text: "Magnetic flux density is measured in:", options: ["Tesla", "Weber", "Gauss", "Henry"], answer: 0 },
    { text: "Magnetic flux is given by:", options: ["Φ = BA cosθ", "Φ = BA sinθ", "Φ = B/A", "Φ = A/B"], answer: 0 },
    { text: "A charged particle moving perpendicular to a magnetic field follows a:", options: ["Circular path", "Straight line", "Parabolic path", "Zigzag path"], answer: 0 },

    // === ELECTROMAGNETIC INDUCTION ===
    { text: "Faraday's law states:", options: ["Induced emf = -N dΦ/dt", "Induced emf = N dΦ/dt", "Induced emf = -NΦ/t", "Induced emf = NΦ/t"], answer: 0 },
    { text: "Lenz's law is a consequence of:", options: ["Conservation of energy", "Conservation of momentum", "Conservation of charge", "Conservation of mass"], answer: 0 },
    { text: "A step-up transformer:", options: ["Increases voltage", "Decreases voltage", "Increases current", "Decreases power"], answer: 0 },
    { text: "A step-down transformer:", options: ["Decreases voltage", "Increases voltage", "Increases frequency", "Decreases power"], answer: 0 },

    // === ALTERNATING CURRENT ===
    { text: "AC stands for:", options: ["Alternating Current", "Amplitude Current", "Active Current", "Absolute Current"], answer: 0 },
    { text: "The phase difference between voltage and current in a resistor is:", options: ["0°", "90°", "180°", "270°"], answer: 0 },
    { text: "In a capacitor, current leads voltage by:", options: ["90°", "0°", "180°", "45°"], answer: 0 },
    { text: "In an inductor, current lags voltage by:", options: ["90°", "0°", "180°", "45°"], answer: 0 },

    // === ELECTRONICS ===
    { text: "Rectification converts:", options: ["AC to DC", "DC to AC", "High voltage to low", "Low to high"], answer: 0 },
    { text: "A PN junction allows current flow in:", options: ["One direction", "Both directions", "No direction", "Only reverse bias"], answer: 0 },
    { text: "Forward bias means:", options: ["P positive, N negative", "P negative, N positive", "Both positive", "Both negative"], answer: 0 },

    // === DAWN OF MODERN PHYSICS ===
    { text: "Photon energy is:", options: ["E = hf", "E = h/f", "E = hc", "E = hλ"], answer: 0 },
    { text: "Planck's constant value is:", options: ["6.626 × 10⁻³⁴ J·s", "3.14 × 10⁻³⁴ J·s", "9.8 × 10⁻³⁴ J·s", "1.6 × 10⁻¹⁹ J·s"], answer: 0 },

    // === ATOMIC SPECTRA ===
    { text: "Atomic spectra are:", options: ["Line spectra", "Continuous spectra", "Band spectra", "Absorption spectra"], answer: 0 },

    // === NUCLEAR PHYSICS ===
    { text: "The nucleus contains:", options: ["Protons and neutrons", "Protons and electrons", "Neutrons and electrons", "Protons only"], answer: 0 },
    { text: "Half-life is the time for:", options: ["Half the nuclei to decay", "All nuclei to decay", "Activity to double", "Mass to double"], answer: 0 },
    { text: "The decay constant λ is related to half-life by:", options: ["λ = 0.693/T½", "λ = T½/0.693", "λ = 2/T½", "λ = T½/2"], answer: 0 },
    { text: "Alpha radiation consists of:", options: ["Helium nuclei", "Electrons", "Photons", "Neutrons"], answer: 0 },
    { text: "Beta radiation consists of:", options: ["Electrons", "Helium nuclei", "Photons", "Protons"], answer: 0 },
    { text: "Gamma radiation consists of:", options: ["High-energy photons", "Electrons", "Neutrons", "Protons"], answer: 0 }
];

// ================================================================
// ENGLISH - 200+ Questions
// ================================================================
window.MCQ_DATA.english = [
    { text: "Choose the correct synonym of 'Abundant':", options: ["Plentiful", "Scarce", "Limited", "Rare"], answer: 0 },
    { text: "Which sentence is grammatically correct?", options: ["She goes to school every day.", "She go to school every day.", "She going to school every day.", "She gone to school every day."], answer: 0 },
    { text: "The antonym of 'Benevolent' is:", options: ["Malevolent", "Kind", "Generous", "Compassionate"], answer: 0 },
    { text: "Identify the correct spelling:", options: ["Accommodation", "Acomodation", "Accomodation", "Acommodation"], answer: 0 },
    { text: "Which word is a noun?", options: ["Happiness", "Happy", "Happily", "Happier"], answer: 0 },
    { text: "Choose the correct preposition: 'He is good ___ mathematics.'", options: ["At", "In", "Of", "With"], answer: 0 },
    { text: "The passive voice of 'She reads a book' is:", options: ["A book is read by her.", "A book was read by her.", "A book has been read by her.", "A book is being read by her."], answer: 0 },
    { text: "What is the plural of 'Child'?", options: ["Children", "Childs", "Childes", "Childrens"], answer: 0 },
    { text: "Which of the following is an adjective?", options: ["Beautiful", "Beauty", "Beautify", "Beautifully"], answer: 0 },
    { text: "Complete the idiom: 'Bite the ____'", options: ["Bullet", "Dust", "Apple", "Time"], answer: 0 },
    { text: "Choose the correctly punctuated sentence:", options: ["She said, 'Hello!'", "She said Hello", "She said, Hello!", "She said 'Hello'!"], answer: 0 },
    { text: "The word 'Ephemeral' means:", options: ["Short-lived", "Permanent", "Eternal", "Long-lasting"], answer: 0 },
    { text: "Which sentence uses the correct tense?", options: ["He has finished his homework.", "He have finished his homework.", "He is finished his homework.", "He finishing his homework."], answer: 0 },
    { text: "Identify the conjunction in: 'He ran fast but missed the bus.'", options: ["But", "He", "Ran", "Fast"], answer: 0 },
    { text: "The prefix 'un-' in 'unusual' means:", options: ["Not", "Again", "Before", "After"], answer: 0 },
    { text: "Choose the correct article: '___ apple a day keeps the doctor away.'", options: ["An", "A", "The", "No article"], answer: 0 },
    { text: "What is the comparative form of 'good'?", options: ["Better", "Best", "More good", "Gooder"], answer: 0 },
    { text: "The phrase 'raining cats and dogs' means:", options: ["Heavy rain", "Cats and dogs falling", "A strange event", "A lucky day"], answer: 0 },
    { text: "Which word is an adverb?", options: ["Quickly", "Quick", "Quicken", "Quickness"], answer: 0 },
    { text: "The suffix '-tion' in 'education' changes a verb to a:", options: ["Noun", "Adjective", "Verb", "Adverb"], answer: 0 },
    { text: "Choose the correct synonym of 'Brave':", options: ["Courageous", "Cowardly", "Timid", "Fearful"], answer: 0 },
    { text: "The antonym of 'Expand' is:", options: ["Contract", "Grow", "Increase", "Enlarge"], answer: 0 },
    { text: "Which sentence has correct subject-verb agreement?", options: ["The team are playing well.", "The team is playing well.", "The team were playing well.", "The team have been playing."], answer: 1 },
    { text: "Identify the error: 'She don't like coffee.'", options: ["Subject-verb agreement", "Spelling", "Punctuation", "Capitalization"], answer: 0 },
    { text: "The word 'Ambiguous' means:", options: ["Unclear", "Clear", "Definite", "Certain"], answer: 0 },
    { text: "Choose the correct indirect speech: She said, 'I am tired.'", options: ["She said that she was tired.", "She said that she is tired.", "She said that I am tired.", "She said that she has been tired."], answer: 0 },
    { text: "Which is a compound sentence?", options: ["I went home and slept.", "I went home.", "After going home, I slept.", "Sleeping is good."], answer: 0 },
    { text: "The word 'Innovative' means:", options: ["Creative", "Old-fashioned", "Traditional", "Outdated"], answer: 0 },
    { text: "Which punctuation is used to show possession?", options: ["Apostrophe", "Comma", "Semicolon", "Colon"], answer: 0 },
    { text: "Choose the correct relative pronoun: 'The man ___ helped me was kind.'", options: ["Who", "Which", "Whom", "Whose"], answer: 0 },
    { text: "The antonym of 'Temporary' is:", options: ["Permanent", "Brief", "Short", "Momentary"], answer: 0 },
    { text: "Which word is a verb?", options: ["Run", "Runner", "Running", "Ran, all are verb forms"], answer: 3 },
    { text: "Identify the adverb in: 'She sings beautifully.'", options: ["Beautifully", "She", "Sings", "No adverb"], answer: 0 },
    { text: "The phrase 'once in a blue moon' means:", options: ["Rarely", "Often", "Always", "Never"], answer: 0 },
    { text: "Choose the correct synonym of 'Diligent':", options: ["Hardworking", "Lazy", "Slow", "Careless"], answer: 0 },
    { text: "The suffix '-less' in 'hopeless' means:", options: ["Without", "Full of", "Capable of", "Related to"], answer: 0 },
    { text: "Which sentence uses the correct preposition?", options: ["She is interested in music.", "She is interested on music.", "She is interested at music.", "She is interested for music."], answer: 0 },
    { text: "The word 'Pragmatic' means:", options: ["Practical", "Idealistic", "Theoretical", "Imaginative"], answer: 0 },
    { text: "Choose the correct comparative: 'She is ___ than her sister.'", options: ["Taller", "Tall", "More tall", "Most tall"], answer: 0 },
    { text: "Which is a complex sentence?", options: ["Although it rained, we went out.", "It rained and we went out.", "We went out.", "Raining heavily."], answer: 0 },
    { text: "The word 'Gratitude' means:", options: ["Thankfulness", "Ingratitude", "Ungratefulness", "Discontent"], answer: 0 },
    { text: "Identify the error: 'Each of the students have a book.'", options: ["Subject-verb: should be 'has'", "Spelling error", "Punctuation", "Capitalization"], answer: 0 },
    { text: "The antonym of 'Artificial' is:", options: ["Natural", "Fake", "Synthetic", "Man-made"], answer: 0 },
    { text: "Which word is an interjection?", options: ["Wow!", "Quickly", "Beautiful", "Run"], answer: 0 },
    { text: "The phrase 'break the ice' means:", options: ["Initiate conversation", "Break ice physically", "Cool down", "Freeze"], answer: 0 },
    { text: "Choose the correct synonym of 'Perseverance':", options: ["Persistence", "Giving up", "Quitting", "Stopping"], answer: 0 },
    { text: "The prefix 'pre-' in 'preview' means:", options: ["Before", "After", "During", "Beyond"], answer: 0 },
    { text: "Which sentence is in the present perfect tense?", options: ["She has eaten.", "She eats.", "She ate.", "She will eat."], answer: 0 },
    { text: "The word 'Eloquent' means:", options: ["Fluent and persuasive", "Poorly spoken", "Silent", "Confused"], answer: 0 },
    { text: "Identify the conjunction in: 'I will go if you come.'", options: ["If", "I", "Will", "Go"], answer: 0 },
    { text: "Synonym of 'Abysmal':", options: ["Terrible", "Excellent", "Shallow", "Bright"], answer: 0 },
    { text: "Antonym of 'Frivolous':", options: ["Serious", "Silly", "Trivial", "Playful"], answer: 0 },
    { text: "Synonym of 'Ubiquitous':", options: ["Omnipresent", "Rare", "Absent", "Scarce"], answer: 0 },
    { text: "Antonym of 'Plausible':", options: ["Implausible", "Believable", "Credible", "Reasonable"], answer: 0 },
    { text: "Synonym of 'Tenacious':", options: ["Persistent", "Weak", "Yielding", "Flexible"], answer: 0 },
    { text: "Antonym of 'Candid':", options: ["Dishonest", "Frank", "Open", "Sincere"], answer: 0 },
    { text: "Synonym of 'Meticulous':", options: ["Careful", "Careless", "Sloppy", "Hasty"], answer: 0 },
    { text: "Antonym of 'Jubilant':", options: ["Miserable", "Joyful", "Elated", "Thrilled"], answer: 0 },
    { text: "Synonym of 'Prudent':", options: ["Wise", "Foolish", "Reckless", "Hasty"], answer: 0 },
    { text: "Antonym of 'Ample':", options: ["Scarce", "Plentiful", "Abundant", "Sufficient"], answer: 0 },

    // Grammar - Tenses
    { text: "'She ___ to school every day.' (Correct tense)", options: ["Goes", "Go", "Going", "Gone"], answer: 0 },
    { text: "'They ___ dinner when I arrived.'", options: ["Were having", "Have", "Are having", "Had having"], answer: 0 },
    { text: "'By next year, I ___ my degree.'", options: ["Will have completed", "Complete", "Completed", "Am completing"], answer: 0 },
    { text: "'He ___ since morning.'", options: ["Has been sleeping", "Is sleeping", "Sleeps", "Slept"], answer: 0 },
    { text: "'The book ___ on the table.' (Correct form)", options: ["Is", "Are", "Were", "Be"], answer: 0 },
    { text: "'I ___ him yesterday.'", options: ["Saw", "See", "Have seen", "Had seen"], answer: 0 },
    { text: "'She ___ English for five years.'", options: ["Has been learning", "Is learning", "Learns", "Learned"], answer: 0 },
    { text: "'They ___ to the park when it started raining.'", options: ["Were going", "Go", "Have gone", "Had gone"], answer: 0 },
    { text: "'He ___ his homework before dinner.'", options: ["Had finished", "Finishes", "Has finished", "Is finishing"], answer: 0 },
    { text: "'We ___ this movie twice already.'", options: ["Have seen", "Saw", "See", "Are seeing"], answer: 0 },

    // Grammar - Articles
    { text: "'___ sun rises in the east.' (Correct article)", options: ["The", "A", "An", "No article"], answer: 0 },
    { text: "'She is ___ honest person.'", options: ["An", "A", "The", "No article"], answer: 0 },
    { text: "'He is ___ university student.'", options: ["A", "An", "The", "No article"], answer: 0 },
    { text: "'___ Himalayas are beautiful.'", options: ["The", "A", "An", "No article"], answer: 0 },
    { text: "'She plays ___ piano.'", options: ["The", "A", "An", "No article"], answer: 0 },
    { text: "'He gave me ___ one-rupee note.'", options: ["A", "An", "The", "No article"], answer: 0 },
    { text: "'___ honesty is the best policy.'", options: ["No article", "The", "A", "An"], answer: 0 },
    { text: "'She bought ___ umbrella.'", options: ["An", "A", "The", "No article"], answer: 0 },
    { text: "'___ Nile is the longest river.'", options: ["The", "A", "An", "No article"], answer: 0 },
    { text: "'He is ___ MLA.'", options: ["An", "A", "The", "No article"], answer: 0 },

    // Grammar - Prepositions
    { text: "'She is afraid ___ dogs.'", options: ["Of", "From", "To", "At"], answer: 0 },
    { text: "'He died ___ cancer.'", options: ["Of", "From", "By", "With"], answer: 0 },
    { text: "'She is good ___ painting.'", options: ["At", "In", "On", "With"], answer: 0 },
    { text: "'He was deprived ___ his rights.'", options: ["Of", "From", "By", "Off"], answer: 0 },
    { text: "'She insisted ___ coming with us.'", options: ["On", "In", "At", "For"], answer: 0 },
    { text: "'He is married ___ a doctor.'", options: ["To", "With", "By", "Of"], answer: 0 },
    { text: "'She was angry ___ me.'", options: ["With", "At", "On", "To"], answer: 0 },
    { text: "'He jumped ___ the river.'", options: ["Into", "In", "On", "At"], answer: 0 },
    { text: "'She has been waiting ___ morning.'", options: ["Since", "For", "From", "By"], answer: 0 },
    { text: "'He will return ___ an hour.'", options: ["In", "After", "Since", "For"], answer: 0 },

    // Grammar - Conjunctions
    { text: "'She is rich ___ unhappy.' (Choose correct conjunction)", options: ["But", "And", "Or", "So"], answer: 0 },
    { text: "'He will come ___ you invite him.'", options: ["If", "But", "And", "Or"], answer: 0 },
    { text: "'She worked hard ___ she could pass.'", options: ["So that", "Because", "Although", "Unless"], answer: 0 },
    { text: "'___ he was tired, he continued working.'", options: ["Although", "Because", "Since", "As"], answer: 0 },
    { text: "'I will wait ___ you return.'", options: ["Until", "Because", "Since", "As"], answer: 0 },
    { text: "'She is ___ intelligent ___ hardworking.'", options: ["Both...and", "Either...or", "Neither...nor", "Not only...but also"], answer: 0 },
    { text: "'___ you study, you will fail.'", options: ["Unless", "If", "Because", "Since"], answer: 0 },
    { text: "'He is poor ___ honest.'", options: ["But", "And", "Or", "So"], answer: 0 },
    { text: "'She speaks ___ English ___ French.'", options: ["Both...and", "Either...or", "Neither...nor", "Not only...but also"], answer: 0 },
    { text: "'He ran fast ___ he missed the bus.'", options: ["Yet", "And", "So", "Because"], answer: 0 },

    // Error Detection
    { text: "Identify the error: 'He don't know the answer.'", options: ["Subject-verb agreement", "Spelling", "Punctuation", "Capitalization"], answer: 0 },
    { text: "Identify the error: 'She is more taller than him.'", options: ["Double comparative", "Spelling", "Punctuation", "Wrong pronoun"], answer: 0 },
    { text: "Identify the error: 'The committee have decided the matter.'", options: ["Subject-verb agreement", "Tense", "Article", "Preposition"], answer: 0 },
    { text: "Identify the error: 'Neither of the boys are coming.'", options: ["Subject-verb agreement", "Spelling", "Punctuation", "Capitalization"], answer: 0 },
    { text: "Identify the error: 'She told to me the story.'", options: ["Extra preposition", "Wrong tense", "Wrong article", "Wrong pronoun"], answer: 0 },
    { text: "Identify the error: 'I prefer coffee than tea.'", options: ["Wrong conjunction", "Wrong preposition", "Wrong tense", "Wrong article"], answer: 0 },
    { text: "Identify the error: 'He was hung for murder.'", options: ["Wrong verb form", "Wrong tense", "Wrong preposition", "Wrong article"], answer: 0 },
    { text: "Identify the error: 'She has been ill since two days.'", options: ["Wrong preposition", "Wrong tense", "Wrong article", "Wrong conjunction"], answer: 0 },
    { text: "Identify the error: 'The sceneries here are beautiful.'", options: ["Wrong noun form", "Wrong verb", "Wrong adjective", "Wrong adverb"], answer: 0 },
    { text: "Identify the error: 'He is one of the best student.'", options: ["Wrong noun form (should be students)", "Wrong adjective", "Wrong article", "Wrong verb"], answer: 0 },

    // Sentence Improvement
    { text: "Improve: 'He came lately to school today.'", options: ["Late", "Later", "Latest", "Latelier"], answer: 0 },
    { text: "Improve: 'She is very much happy.'", options: ["Very happy", "Much happy", "Very much happier", "Much happier"], answer: 0 },
    { text: "Improve: 'I will do it myselfself.'", options: ["Myself", "Meself", "My self", "I self"], answer: 0 },
    { text: "Improve: 'He is senior than me.'", options: ["Senior to", "Senior from", "Senior of", "Senior over"], answer: 0 },
    { text: "Improve: 'I have visited the USA last year.'", options: ["Visited", "Had visited", "Was visiting", "Have been visiting"], answer: 0 },
    { text: "Improve: 'She talks as if she is the boss.'", options: ["Were", "Was", "Has been", "Is being"], answer: 0 },
    { text: "Improve: 'He is enough old to marry.'", options: ["Old enough", "Enough older", "Old enoughly", "So old"], answer: 0 },
    { text: "Improve: 'She not only lost her purse but also her keys.'", options: ["Lost not only her purse but also her keys", "Not only lost her purse but also lost her keys", "Lost her purse not only but also her keys", "No improvement needed"], answer: 0 },
    { text: "Improve: 'He asked that where I was going.'", options: ["Asked where I was going", "Asked that where I am going", "Asked that where was I going", "No improvement"], answer: 0 },
    { text: "Improve: 'The reason why he failed is because he didn't study.'", options: ["Reason he failed is that he didn't study", "Reason why he failed is that he didn't study", "Reason why he failed is because he didn't study", "No improvement needed"], answer: 0 },

    // Reading Comprehension - Short Passages
    { text: "'The hurrieder I go, the behinder I get.' This is an example of:", options: ["Malapropism", "Alliteration", "Simile", "Metaphor"], answer: 0 },
    { text: "In 'All the world's a stage', the literary device used is:", options: ["Metaphor", "Simile", "Personification", "Hyperbole"], answer: 0 },
    { text: "'He is as brave as a lion' is an example of:", options: ["Simile", "Metaphor", "Personification", "Alliteration"], answer: 0 },
    { text: "'Peter Piper picked a peck of pickled peppers' uses:", options: ["Alliteration", "Assonance", "Consonance", "Onomatopoeia"], answer: 0 },
    { text: "'Buzz', 'hiss', 'bang' are examples of:", options: ["Onomatopoeia", "Alliteration", "Simile", "Metaphor"], answer: 0 },
    { text: "'The wind whispered through the trees' is:", options: ["Personification", "Simile", "Metaphor", "Hyperbole"], answer: 0 },
    { text: "'I've told you a million times' is:", options: ["Hyperbole", "Simile", "Metaphor", "Personification"], answer: 0 },
    { text: "In 'O, Romeo, Romeo, wherefore art thou Romeo?' the device is:", options: ["Apostrophe", "Alliteration", "Simile", "Metaphor"], answer: 0 },
    { text: "'The pen is mightier than the sword' uses:", options: ["Metonymy", "Simile", "Personification", "Hyperbole"], answer: 0 },
    { text: "'It was the best of times, it was the worst of times' is:", options: ["Antithesis", "Parallelism", "Oxymoron", "Paradox"], answer: 0 },

    // Vocabulary in Context
    { text: "'The teacher was lenient with the students.' Lenient means:", options: ["Merciful", "Strict", "Harsh", "Cruel"], answer: 0 },
    { text: "'He gave a cryptic response.' Cryptic means:", options: ["Mysterious", "Clear", "Simple", "Direct"], answer: 0 },
    { text: "'She was ecstatic about the news.' Ecstatic means:", options: ["Overjoyed", "Sad", "Angry", "Worried"], answer: 0 },
    { text: "'His argument was cogent.' Cogent means:", options: ["Convincing", "Weak", "Confusing", "Illogical"], answer: 0 },
    { text: "'The plan was feasible.' Feasible means:", options: ["Possible", "Impossible", "Difficult", "Expensive"], answer: 0 },
    { text: "'She gave a cursory glance.' Cursory means:", options: ["Quick and superficial", "Detailed", "Thorough", "Careful"], answer: 0 },
    { text: "'His speech was verbose.' Verbose means:", options: ["Wordy", "Concise", "Short", "Meaningful"], answer: 0 },
    { text: "'The aroma was tantalizing.' Tantalizing means:", options: ["Tempting", "Repulsive", "Unpleasant", "Boring"], answer: 0 },
    { text: "'He was known for his magnanimity.' Magnanimity means:", options: ["Generosity", "Stinginess", "Cruelty", "Selfishness"], answer: 0 },
    { text: "'The view was breathtaking.' Breathtaking means:", options: ["Stunningly beautiful", "Boring", "Ugly", "Ordinary"], answer: 0 }
];

// ================================================================
// LOGICAL REASONING - 200+ Questions
// ================================================================
window.MCQ_DATA.logical = [
    { text: "If all A are B and some B are C, what can be concluded?", options: ["Some A are C", "All C are B", "No A is C", "All A are C"], answer: 0 },
    { text: "Which number comes next: 2, 6, 18, 54, ?", options: ["162", "108", "72", "216"], answer: 0 },
    { text: "If you rearrange 'CIFAIPC', you get the name of a(n):", options: ["Ocean", "River", "Mountain", "Country"], answer: 0 },
    { text: "Which is the odd one out?", options: ["Rose", "Cat", "Dog", "Lion"], answer: 0 },
    { text: "A is taller than B. C is shorter than A. B is taller than C. Who is the tallest?", options: ["A", "B", "C", "Cannot be determined"], answer: 0 },
    { text: "If today is Monday, what day will it be in 15 days?", options: ["Tuesday", "Wednesday", "Monday", "Thursday"], answer: 0 },
    { text: "A clock shows 3:15. What is the angle between the hands?", options: ["7.5°", "30°", "0°", "15°"], answer: 0 },
    { text: "Which word does NOT belong with the others?", options: ["Chair", "Table", "Furniture", "Sofa"], answer: 2 },
    { text: "If FISH is coded as EHRG, then BIRD is coded as:", options: ["AHQE", "CJTF", "AKRF", "AHQF"], answer: 0 },
    { text: "Find the missing number: 1, 4, 9, 16, ?, 36", options: ["25", "24", "30", "20"], answer: 0 },
    { text: "All doctors are intelligent. Some intelligent people are artists. Therefore:", options: ["No valid conclusion", "All doctors are artists", "Some doctors are artists", "All artists are intelligent"], answer: 0 },
    { text: "Pen is to ink as pencil is to:", options: ["Lead", "Graphite", "Wood", "Paper"], answer: 0 },
    { text: "Which shape does NOT belong? (Circle, Square, Triangle, Sphere)", options: ["Sphere", "Circle", "Square", "Triangle"], answer: 0 },
    { text: "If A = 1, B = 2, what is the value of D + O + G?", options: ["26", "24", "28", "22"], answer: 0 },
    { text: "Statements: No cats are dogs. Some dogs are pets. Conclusion?", options: ["Some dogs are not cats", "No pets are cats", "All dogs are pets", "None follows"], answer: 0 },
    { text: "How many faces does a cube have?", options: ["6", "4", "8", "12"], answer: 0 },
    { text: "If you travel east from the prime meridian, you ___ the time.", options: ["Gain", "Lose", "Not change", "Double"], answer: 0 },
    { text: "Which is heavier: 1 kg of feathers or 1 kg of stones?", options: ["Equal", "Feathers", "Stones", "Cannot compare"], answer: 0 },
    { text: "Pointing to a man, a woman said, 'He is the son of my mother's only son.' How is he related to her?", options: ["Son", "Brother", "Nephew", "Father"], answer: 0 },
    { text: "Complete the pattern: 3, 8, 15, 24, ?, 48", options: ["35", "30", "40", "45"], answer: 0 },
    { text: "If all flowers are plants and some plants are trees, then:", options: ["Some flowers are trees", "All trees are flowers", "No flower is a tree", "All flowers are trees"], answer: 0 },
    { text: "Which number is the odd one out: 2, 4, 8, 10, 16?", options: ["10", "2", "4", "8"], answer: 0 },
    { text: "A man is facing north. He turns 90° clockwise, then 180° anti-clockwise. Which direction is he facing now?", options: ["West", "East", "North", "South"], answer: 0 },
    { text: "Find the next: 1, 1, 2, 3, 5, 8, ?", options: ["13", "10", "11", "12"], answer: 0 },
    { text: "If ROSE is coded as 1819155, how is LILY coded?", options: ["1291225", "1212125", "1291299", "1292225"], answer: 0 },
    { text: "Which word is the odd one out?", options: ["Triangle", "Square", "Circle", "Rectangle"], answer: 2 },
    { text: "A is the father of B. B is the sister of C. C is the mother of D. How is A related to D?", options: ["Grandfather", "Father", "Uncle", "Brother"], answer: 0 },
    { text: "If 3 × 4 = 15, 5 × 6 = 35, 7 × 8 = ?", options: ["63", "56", "72", "48"], answer: 0 },
    { text: "Which letter comes next in the sequence: A, C, E, G, ?", options: ["I", "H", "J", "K"], answer: 0 },
    { text: "If you cut a rope in half, then cut one half again, how many pieces do you have?", options: ["3", "2", "4", "5"], answer: 0 },
    { text: "Next in series: 3, 6, 11, 18, 27, ?", options: ["38", "36", "40", "42"], answer: 0 },
    { text: "Next: 1, 1, 2, 6, 24, ?", options: ["120", "48", "72", "96"], answer: 0 },
    { text: "Next: 7, 14, 28, 56, ?", options: ["112", "84", "70", "100"], answer: 0 },
    { text: "Next: 100, 96, 91, 85, ?", options: ["78", "79", "80", "82"], answer: 0 },
    { text: "Next: 1, 4, 27, 256, ?", options: ["3125", "1024", "625", "500"], answer: 0 },
    { text: "Next: 0, 7, 26, 63, ?", options: ["124", "125", "126", "127"], answer: 0 },
    { text: "Next: 2, 5, 10, 17, 26, ?", options: ["37", "35", "36", "38"], answer: 0 },
    { text: "Next: 4, 9, 25, 49, 121, ?", options: ["169", "144", "100", "81"], answer: 0 },
    { text: "Next: 6, 24, 60, 120, ?", options: ["210", "180", "150", "240"], answer: 0 },
    { text: "Next: 8, 27, 64, 125, ?", options: ["216", "200", "180", "250"], answer: 0 },

    // Letter Series
    { text: "Next letter: B, E, H, K, ?", options: ["N", "M", "L", "O"], answer: 0 },
    { text: "Next: Z, X, V, T, ?", options: ["R", "S", "U", "W"], answer: 0 },
    { text: "Next: A, C, F, J, O, ?", options: ["U", "P", "Q", "R"], answer: 0 },
    { text: "Next: AZ, BY, CX, DW, ?", options: ["EV", "EU", "FU", "EX"], answer: 0 },
    { text: "Next: AB, DEF, GHIJ, ?", options: ["KLMNO", "KLMN", "LMNO", "NOPQ"], answer: 0 },
    { text: "Next: Z, Y, X, W, V, ?", options: ["U", "A", "B", "T"], answer: 0 },
    { text: "Next: A, AA, AAA, ?", options: ["AAAA", "AAAAA", "BBBB", "B"], answer: 0 },
    { text: "Next: ACE, BDF, CEG, ?", options: ["DFH", "EGI", "DFI", "DGI"], answer: 0 },
    { text: "Next: P, Q, S, V, ?", options: ["A", "Z", "Y", "B"], answer: 0 },
    { text: "Next: AB, CD, EF, GH, ?", options: ["IJ", "JK", "HI", "KL"], answer: 0 },

    // Coding-Decoding
    { text: "If CAT = 24, DOG = 26, then CROW = ?", options: ["52", "48", "50", "54"], answer: 0 },
    { text: "If ROSE = 64, LILY = 72, then TULIP = ?", options: ["82", "80", "78", "84"], answer: 0 },
    { text: "If APPLE = 50, MANGO = 57, then ORANGE = ?", options: ["60", "62", "58", "64"], answer: 0 },
    { text: "If 1234 = ABCD, 2345 = BCDE, then 3456 = ?", options: ["CDEF", "DEFG", "BCDE", "EFGH"], answer: 0 },
    { text: "If BALL = 27, BAT = 21, then BOWL = ?", options: ["44", "42", "40", "46"], answer: 0 },
    { text: "If GREEN = 49, BLUE = 40, then RED = ?", options: ["27", "23", "25", "29"], answer: 0 },
    { text: "If 1=A, 2=B, then what is the code for DOG?", options: ["4,15,7", "4,16,7", "5,15,7", "4,15,8"], answer: 0 },
    { text: "If PINK = 50, BLUE = 45, then YELLOW = ?", options: ["79", "75", "80", "85"], answer: 0 },
    { text: "If RAM = 36, SHYAM = 62, then SITA = ?", options: ["44", "46", "42", "48"], answer: 0 },
    { text: "If 123 = ABC, 456 = DEF, then 789 = ?", options: ["GHI", "HIJ", "IJK", "JKL"], answer: 0 },

    // Blood Relations
    { text: "A is the brother of B. B is the sister of C. How is A related to C?", options: ["Brother", "Sister", "Cousin", "Uncle"], answer: 0 },
    { text: "A is the father of B. B is the mother of C. How is A related to C?", options: ["Grandfather", "Father", "Uncle", "Brother"], answer: 0 },
    { text: "A is the sister of B. B is the daughter of C. How is A related to C?", options: ["Daughter", "Son", "Sister", "Mother"], answer: 0 },
    { text: "A is the mother of B. B is the brother of C. C is the daughter of D. How is A related to D?", options: ["Wife", "Sister", "Mother", "Daughter"], answer: 0 },
    { text: "A is the uncle of B. B is the daughter of C. C is the brother of D. How is A related to D?", options: ["Brother", "Uncle", "Father", "Cousin"], answer: 0 },
    { text: "A is the husband of B. B is the sister of C. How is A related to C?", options: ["Brother-in-law", "Brother", "Uncle", "Cousin"], answer: 0 },
    { text: "A is the father of B and C. D is the son of B. How is D related to A?", options: ["Grandson", "Son", "Nephew", "Cousin"], answer: 0 },

];

// ================================================================
// GRAND TEST BUILDER
// ================================================================
window.getGrandTestQuestionsImpl = function(type) {
    const subjectCounts = { biology: 81, chemistry: 45, physics: 36, english: 9, logical: 9 };
    const allQuestions = [];
    const seed = type === 'grand1' ? 0 : 40;

    SUBJECTS.forEach(function(subject) {
        const pool = window.MCQ_DATA[subject];
        if (pool && pool.length > 0) {
            const needed = subjectCounts[subject];
            for (let i = 0; i < needed; i++) {
                const idx = (seed + i) % pool.length;
                allQuestions.push({
                    ...pool[idx],
                    id: subject + '-gt-' + (i + 1),
                    subject: subject
                });
            }
        }
    });

    // Fisher-Yates shuffle
    for (let i = allQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allQuestions[i], allQuestions[j]] = [allQuestions[j], allQuestions[i]];
    }

    return allQuestions;
};

// ================================================================
// FINAL: Assign all to window
// ================================================================
SUBJECTS = ['biology', 'chemistry', 'physics', 'english', 'logical'];
console.log('✅ questions.js loaded successfully!');
console.log('📊 Total questions:');
SUBJECTS.forEach(function(s) {
    console.log('   ' + s + ': ' + (window.MCQ_DATA[s] ? window.MCQ_DATA[s].length : 0) + ' questions');
});
