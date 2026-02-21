const fs = require('fs');
const path = require('path');

const eventList = [
    // Technical Events (Neon Blue)
    {
        filename: 'quantity-estimation.html',
        title: 'QUANTIFY',
        category: 'Technical Event',
        overview: 'QUANTIFY is a technical quantity estimation challenge where participants test their practical knowledge of BOQ preparation, material estimation, and real-world construction calculations. The event evaluates accuracy, speed, and understanding of estimation principles used in civil engineering practice.',
        description: 'Test your skills in estimating quantities from structural drawings.',
        date: '27 February 2026',
        time: '10:00 AM – 12:00 PM',
        venue: 'C15',
        rules: [
            'Registration Fee: ₹100',
            'Prize Pool: ₹5,000',
            'Activity Points: Up to 30',
            'Open to all college students',
            'Individual participation only',
            'Valid college ID card is mandatory',
            'Total duration: 2 hours',
            'Participants must submit within the given time',
            'Any form of malpractice or copying will lead to immediate disqualification',
            'Participants must follow instructions of event coordinators',
            'Judges’ decision will be final and binding'
        ],
        coordinators: [
            { name: 'Anshitha', phone: '85938 34623' },
            { name: 'Sreegovind', phone: '99952 61962' }
        ],
        regLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfePM_bIqm9ND7PCGKIxOnbVo0MoaPlIFzmh1xQhmQDD4raWQ/viewform'
    },
    {
        filename: 'failure-x.html',
        title: 'FAILUREX',
        category: 'Technical Event',
        overview: 'FAILUREX is a forensic engineering challenge where teams analyze real-world engineering failure cases. Participants investigate causes, sequence of failure, and preventive measures, testing analytical thinking, teamwork, and presentation skills.',
        description: 'Analyze structural failures and propose solutions.',
        date: '27 February 2026',
        time: '11:00 AM – 1:00 PM',
        venue: 'Conference Hall',
        rules: [
            'Registration Fee: ₹200',
            'Prize Pool: ₹7,000',
            'Activity Points: Up to 30',
            'Team-based event with 3–5 members per team',
            'Open to students of all years',
            'Each team will be assigned one engineering failure case on the spot',
            'Teams must analyze what failed, why it failed, and how it could have been prevented',
            'Laptop is compulsory for each team',
            'Duration: 1–1.5 hours',
            'Presentation format and time limit will be informed during the event',
            'Judges’ decision will be final and binding'
        ],
        coordinators: [
            { name: 'Surabhi', phone: '85472 76614' },
            { name: 'Karthika', phone: '62384 77523' }
        ],
        regLink: 'https://docs.google.com/forms/d/e/1FAIpQLSccsf4UmTkdnc5VGrBCxvq8LsOvZew3ZXNkRKnxfWApRsVJUA/viewform'
    },
    {
        filename: 'scaffex.html',
        title: 'SCAFFEXX',
        category: 'Technical Event',
        overview: 'SCAFFEXX ’26 challenges teams to design and construct stable scaffolding structures using provided materials. The event tests structural logic, load understanding, precision, teamwork, and innovative design under time pressure.',
        description: 'Design and build the most efficient scaffolding structure.',
        date: '01 March 2026',
        time: '10:00 AM – 12:00 PM',
        venue: 'C16',
        rules: [
            'Registration Fee: ₹200',
            'Prize Pool: ₹12,000',
            'Activity Points: Up to 30',
            'Team-based event with 4 members per team',
            'All team members must be college students and carry valid ID cards',
            'The event will be conducted in three rounds:',
            'Round 1: Aptitude Test',
            'Round 2: Details informed at the time of the test',
            'Round 3: Scaffolding Challenge',
            'Scaffolding model must be constructed using only the materials provided',
            'Judges’ decision will be final and binding'
        ],
        coordinators: [
            { name: 'Shazmil', phone: '80754 16326' },
            { name: 'Rafaath', phone: '87143 56086' }
        ],
        regLink: 'https://docs.google.com/forms/d/e/1FAIpQLSf2AcuomWPPz4kqV_DR9zuBtIM6E3yUJ6b6Bxfk1e7-E-OpQg/viewform'
    },

    // Competitions (Neon Blue)
    {
        filename: 'disaster-zone.html',
        title: 'DISASTER ESCAPE',
        category: 'Competition',
        overview: 'Disaster Escape is an intense escape-room style challenge where teams race against time to solve puzzles, decode clues, and escape the room. The event tests logic, teamwork, communication, and calmness under pressure.',
        description: 'Decode fast. Escape smarter.',
        date: '27 February – 01 March 2026',
        time: '1:00 PM – 4:00 PM',
        venue: 'Structural Block',
        rules: [
            'Registration Fee: ₹200',
            'Prize Pool: ₹6,000',
            'Activity Points: Up to 20',
            'Open to all colleges / departments',
            'Team event with 3–4 members',
            'Time limit: 30 minutes per team',
            'Goal is to solve all puzzles and escape',
            'No phones or external help allowed',
            'Do not damage or dismantle props',
            'Hints available (time penalty applicable)',
            'Follow Game Master’s instructions strictly',
            'Fastest escape wins',
            'Organizer’s decision will be final'
        ],
        coordinators: [
            { name: 'Indubala', phone: '90481 99989' },
            { name: 'Ibrahim', phone: '99465 31062' }
        ],
        regLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfh8R_lHOf1P49u0lO_U_oW6qPlf69qP8_g_vL7X0_s4TzJ4g/viewform'
    },
    {
        filename: 'urbanova.html',
        title: 'URBANOVA',
        category: 'Competition',
        overview: 'Urbanova is a two-day town planning challenge focused on smart design, sustainability, and real-world urban solutions. Teams will analyze a given problem, develop an innovative town plan, and present their proposal, testing planning skills, creativity, feasibility, and presentation ability.',
        description: 'Plan smart. Shape the future.',
        date: '28 February – 01 March 2026',
        time: '10:00 AM – 11:00 AM',
        venue: 'C15',
        rules: [
            'Registration Fee: ₹200',
            'Prize Pool: ₹7,000',
            'Activity Points: Up to 20',
            'Open to all colleges',
            'Team event with 3–4 members per team',
            'Open to Polytechnic and B.Tech students',
            'Each team must include at least one Civil / Architectural Engineering student',
            'This is a 2-day competition',
            'Day 1: Theme & problem statement will be given on the spot',
            'Day 2: Teams prepare the town plan and present their proposal',
            'Laptop is mandatory for every team',
            'Evaluation based on planning quality, creativity, feasibility, sustainability & presentation',
            'Judges’ decision will be final and binding'
        ],
        coordinators: [
            { name: 'Jasmin', phone: '89218 65740' },
            { name: 'Aparna K P', phone: '85929 91092' }
        ],
        regLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfa6DqOiL8PH1E_cX2EwC51J1lhTzPaOKxYq1PhY3RDCXko_w/viewform'
    },
    {
        filename: 'kaun-banega-civilpati.html',
        title: 'KAUN BANEGA CIVILPATI',
        category: 'Competition',
        overview: 'Kaun Banega Civilpati is a high-energy quiz competition testing civil engineering fundamentals, logic, and confidence. With multiple rounds and eliminations, every question pushes participants closer to the hot seat where only one team emerges victorious.',
        description: 'Lock in. Reinforce. Crack it.',
        date: '28 February 2026',
        time: '3:00 PM – 6:00 PM',
        venue: 'Eastern Amphi',
        rules: [
            'Registration Fee: ₹150',
            'Prize Pool: ₹7,000',
            'Activity Points: Up to 20',
            'Open to all colleges',
            'Fully based on Civil Engineering fundamentals',
            'Open to students from all colleges',
            'Register and pay before the deadline',
            'Multiple rounds with eliminations',
            'Any malpractice will lead to disqualification',
            'Winners declared after the final round',
            'Coordinators’ decision will be final',
            'Further instructions will be given at the venue'
        ],
        coordinators: [
            { name: 'Keerthana K', phone: '99952 79824' },
            { name: 'Megha D Prasad', phone: '82818 97105' }
        ],
        regLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfNhuUmvvASzKQCZnXxfbnyhYn0g90wMx6ESF2ZQaGieA89Sg/viewform'
    },
    {
        filename: 'draftera.html',
        title: 'DRAFTERA',
        category: 'Competition',
        overview: 'DraftEra is an individual AutoCAD competition designed to test drafting accuracy, speed, and precision. Participants will create civil engineering drawings under time constraints, showcasing their technical drafting skills through multiple rounds.',
        description: 'Where civil ideas take shape.',
        date: '28 February 2026',
        time: '1:30 PM – 3:00 PM',
        venue: 'CADD Lab',
        rules: [
            'Registration Fee: ₹100',
            'Prize Pool: ₹6,000',
            'Activity Points: Up to 20',
            'Open to all colleges',
            'Individual participation only',
            'All participants must carry college ID cards',
            'Laptop is mandatory',
            'Event will focus on AutoCAD drawings',
            'Competition will be conducted in two rounds',
            'Preliminary test may be conducted depending on participation',
            'Judges’ decision will be final'
        ],
        coordinators: [
            { name: 'Amritha PM', phone: '95399 86028' },
            { name: 'Anit C Mathew', phone: '97451 18170' }
        ],
        regLink: 'https://docs.google.com/forms/d/e/1FAIpQLScieF3HLYvwJYs8On7aaHRxjBu2bUxMTZvmYOjLyl3091RAaw/viewform'
    },
    {
        filename: 'decrypta.html',
        title: 'DECRYPTA',
        category: 'Competition',
        overview: 'Decrypta is a fast-paced logic and observation challenge where teams follow hidden clues scattered across the campus. What seems ordinary may lead to something unexpected as participants decode paths, solve puzzles, and race against time to uncover the final solution.',
        description: 'Decrypt the code. Not everything is visible.',
        date: '1 March 2026',
        time: 'Full Day',
        venue: 'C3',
        rules: [
            'Registration Fee: ₹200',
            'Prize Pool: ₹6,000',
            'Activity Points: Up to 20',
            'Open to all colleges',
            'Team event with 4–6 members',
            'Open to students from all colleges',
            'All participants must carry valid college ID cards',
            'Teams must register and complete payment before deadline',
            'Winners declared after proper verification',
            'Any malpractice will lead to disqualification',
            'Decision of the coordinators will be final',
            'Further instructions will be provided at the venue'
        ],
        coordinators: [
            { name: 'Ashin Gireesh', phone: '95675 62096' },
            { name: 'Anyaraj', phone: '70253 89165' }
        ],
        regLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdwACG4HVNZmKjjRfK9LwC9-tsEOj2EsqlzW0yhO_sgp6eM7w/viewform'
    },
    {
        filename: 'mixcraft.html',
        title: 'MIXCRAFT',
        category: 'Competition',
        overview: 'MixCraft is a hands-on concrete mix design challenge where teams compete to create the smartest, strongest, and most efficient concrete mix. The event blends theoretical knowledge with practical execution through testing and evaluation.',
        description: 'Mix it to fix it.',
        date: '1 March 2026',
        time: '10:00 AM - 1:00 PM',
        venue: 'Structural / MT Lab',
        rules: [
            'Registration Fee: ₹200',
            'Prize Pool: ₹8,000',
            'Activity Points: Up to 20',
            'Open to all colleges',
            'Team of 3 or 4 members allowed',
            'Team members can be from different colleges',
            'All participants must carry college ID cards',
            'Event consists of two rounds',
            'Round 1: Preliminary quiz',
            'Round 2: Concrete mix preparation & slump test',
            'Judges’ decision will be final'
        ],
        coordinators: [
            { name: 'Anupriya', phone: '89216 21861' },
            { name: 'Sreegovind', phone: '99952 61961' }
        ],
        regLink: 'https://docs.google.com/forms/d/e/1FAIpQLSeG9gpScuifBpZQjAnxPFOWCaHzt9dgIJT1mbPEsr1ugRO1fQ/viewform'
    },

    // Workshops (Emerald Green)
    {
        filename: 'natural-plasters-workshop.html',
        title: 'Natural Plasters & Finishes Workshop',
        category: 'Workshop',
        overview: 'This workshop explores sustainable and eco-friendly construction finishes using traditional materials and techniques. Participants will gain practical exposure to earth and lime-based plasters, natural pigments, and climate-responsive finishing methods through live demonstrations and hands-on application.',
        description: 'A one-day hands-on workshop by NAAMEARTH exploring sustainable surface finishing techniques including earth & lime-based plasters, natural pigments, and traditional finishing methods through live demos and hands-on application.',
        date: 'Mar 01',
        time: '10:00 AM',
        venue: 'Eastern Amphi, GECT',
        rules: [
            'Registration Fee: ₹100',
            'Seats: Limited (25–30 participants)',
            'Activity Points: Up to 20',
            'Materials will be provided',
            'Wear comfortable clothes',
            'Hands-on participation required',
            'Certificates will be provided',
            'No spot registration',
            'Limited seats, first come first serve'
        ],
        coordinators: [
            { name: 'Janisha', phone: '+91 99470 59088' },
            { name: 'Nihada', phone: '+91 95394 81024' }
        ],
        regLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdv80AsJq2Y_dpcd6N9xFMdzYdDEiiYGYuC8eV1_L2Rr2Q8kw/viewform?usp=sharing&ouid=100074532887975609263'
    },
    {
        filename: 'autodesk-revit-workshop.html',
        title: 'Autodesk Revit Workshop',
        category: 'Workshop',
        overview: 'This workshop introduces participants to Autodesk Revit, a powerful Building Information Modeling (BIM) tool widely used in the construction industry. The session focuses on creating intelligent 3D models, understanding BIM workflows, and transitioning from traditional 2D drafting to modern digital construction practices.',
        description: 'Hands-on expert-led workshop on Autodesk Revit, the global standard for 3D structural modeling. Learn modern BIM workflows and move beyond traditional 2D drawings.',
        date: 'Feb 27',
        time: '1:00 PM – 4:00 PM',
        venue: 'Civil CAD Lab',
        rules: [
            'Registration Fee: ₹99',
            'Activity Points: Up to 20',
            'Participants must bring their own laptops',
            'Autodesk Revit should be pre-installed',
            'Basic knowledge of CAD is recommended',
            'Certificates will be provided',
            'Limited seats available',
            'No spot registration'
        ],
        coordinators: [
            { name: 'Anusree P S', phone: '+91 97784 80482' },
            { name: 'Ganga Krishna P', phone: '+91 77360 48214' }
        ],
        regLink: 'https://docs.google.com/forms/d/e/1FAIpQLSf_Tpe6wQjAkYIBg00OLVhpnO3i9lefN-pcUeTVXYDatTRRZA/viewform?usp=publish-editor'
    },
    {
        filename: 'vr-ai-workshop.html',
        title: 'Virtual Reality & AI Applications in Civil Engineering',
        category: 'Workshop',
        overview: 'This industry-led workshop demonstrates how Virtual Reality (VR) and Artificial Intelligence (AI) are revolutionizing civil engineering. Participants will experience immersive visualization techniques and understand how emerging technologies are applied in planning, design, and execution stages of construction projects.',
        description: 'Industry-led workshop by Tangent exploring how Virtual Reality (VR) and Artificial Intelligence (AI) are transforming civil engineering — from design visualization to execution.',
        date: 'Feb 28',
        time: '10:00 AM',
        venue: 'Civil Seminar Hall',
        rules: [
            'Registration Fee: ₹150',
            'Activity Points: Up to 20',
            'Open to all engineering students',
            'Interactive demo-based session',
            'Certificates will be provided',
            'No spot registration',
            'Limited seats available'
        ],
        coordinators: [
            { name: 'Siyana M S', phone: '+91 80893 90638' },
            { name: 'Cijins P Nassar', phone: '+91 88489 91941' }
        ],
        regLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfIxhKPzavgRLZxf4oJtUf4U2k3M1JTft1_8OE7mVcQ9ngPeQ/viewform'
    },

    // Informals (Electric Amber)
    {
        filename: 'debate.html',
        title: 'CROSS SECTION',
        category: 'Informal Event',
        overview: 'Cross Section is a lively debate competition where perspectives clash and logic takes center stage. Participants battle it out with arguments, counter-arguments, and clarity of thought, testing communication skills, confidence, and critical thinking in a fun yet competitive environment.',
        description: 'Where perspectives intersect.',
        date: '27 February 2026',
        time: '4:00 PM',
        venue: 'Eastern Amphi',
        rules: [
            'Registration Fee: ₹50',
            'Prize Pool: ₹2,000',
            'Open to all college students',
            'Individual participation',
            'Topics will be given on the spot',
            'Participants must respect time limits',
            'Use of offensive language is strictly prohibited',
            'Judges’ decision will be final and binding'
        ],
        coordinators: [
            { name: 'Kunjilakshmi', phone: '77361 73672' },
            { name: 'Anupriya T S', phone: '89216 21861' }
        ],
        regLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdx1HV_Kw1JPan_TQUBFuyJJnDFgpUqIRgGMW6t7_8F0krvqA/viewform'
    },
    {
        filename: 'food-eating.html',
        title: 'CRAVATO',
        category: 'Informal Event',
        overview: 'Cravato is a fun-packed food eating competition designed to test speed, stamina, and strategy. Participants race against time and competitors to conquer the feast and claim victory in one of Concetto’s most entertaining informal events.',
        description: 'Unleash the Beast, Conquer the Feast.',
        date: '28 February 2026',
        time: '12:30 PM',
        venue: 'Department Front',
        rules: [
            'Registration Fee: ₹50',
            'Prize Pool: ₹2,000',
            'Open to all students',
            'Individual participation only',
            'Food items will be provided on the spot',
            'Participants must follow hygiene and safety rules',
            'Any unfair practice leads to disqualification',
            'Coordinators’ instructions must be followed strictly'
        ],
        coordinators: [
            { name: 'Jesna Sabu', phone: '94968 81911' },
            { name: 'Sona Sudheesh', phone: '62828 29854' }
        ],
        regLink: 'https://docs.google.com/forms/d/e/1FAIpQLSeRAQdhwUaZpGAy-g70ZMtj0Hnap620sKzasg1Ir0OcNfrjiA/closedform'
    },
    {
        filename: 'spot-dubbing-choreo.html',
        title: 'ELEVATION',
        category: 'Informal Event',
        overview: 'Elevation is a high-energy spot choreography competition where dancers express creativity, rhythm, and confidence on the fly. Participants must adapt instantly to music and showcase their performance skills without prior preparation.',
        description: 'The Spot Choreo Arena.',
        date: '01 March 2026',
        time: '3:00 PM',
        venue: 'Western Amphi',
        rules: [
            'Registration Fee: ₹25',
            'Prize Pool: ₹2,000',
            'Open to all students',
            'Individual participation only',
            'Music will be provided on the spot',
            'Performance duration will be informed during the event',
            'Vulgarity or unsafe moves are strictly prohibited',
            'Judges’ decision will be final and binding'
        ],
        coordinators: [
            { name: 'Sreehari Raj', phone: '99466 61464' },
            { name: 'Arsha V K', phone: '82898 68621' }
        ],
        regLink: 'https://docs.google.com/forms/d/e/1FAIpQLSe26V18F5JoDoZZSF--aFHjkwGpT2HOp3cAzR7r2mrD36-Jaw/viewform'
    },

    // On-Spot Informals (No Registration)
    {
        filename: 'puzzle-solving.html',
        title: 'Puzzle Solving',
        category: 'Informal Event',
        description: 'Solve puzzles and win prizes.',
        date: 'On-Spot',
        time: 'Ongoing',
        venue: 'Campus',
        rules: ['On-Spot Participation', 'No Registration Required'],
        coordinators: []
    },
    {
        filename: 'mystery-box.html',
        title: 'Mystery Box',
        category: 'Informal Event',
        description: 'What is inside the box?',
        date: 'On-Spot',
        time: 'Ongoing',
        venue: 'Campus',
        rules: ['On-Spot Participation', 'No Registration Required'],
        coordinators: []
    },
    {
        filename: 'board-games.html',
        title: 'Board Games',
        category: 'Informal Event',
        description: 'Classic board games for fun.',
        date: 'On-Spot',
        time: 'Ongoing',
        venue: 'Campus',
        rules: ['On-Spot Participation', 'No Registration Required'],
        coordinators: []
    },
    {
        filename: 'carroms.html',
        title: 'Carroms',
        category: 'Informal Event',
        description: 'Strike and pocket.',
        date: 'On-Spot',
        time: 'Ongoing',
        venue: 'Campus',
        rules: ['On-Spot Participation', 'No Registration Required'],
        coordinators: []
    },
    {
        filename: 'chess.html',
        title: 'Chess',
        category: 'Informal Event',
        description: 'Checkmate your opponent.',
        date: 'On-Spot',
        time: 'Ongoing',
        venue: 'Campus',
        rules: ['On-Spot Participation', 'No Registration Required'],
        coordinators: []
    },
    {
        filename: 'arm-wrestling.html',
        title: 'Arm Wrestling',
        category: 'Informal Event',
        description: 'Test your strength.',
        date: 'On-Spot',
        time: 'Ongoing',
        venue: 'Campus',
        rules: ['On-Spot Participation', 'No Registration Required'],
        coordinators: []
    },
    {
        filename: 'cards-palace.html',
        title: 'Cards Palace',
        category: 'Informal Event',
        description: 'Card games for everyone.',
        date: 'On-Spot',
        time: 'Ongoing',
        venue: 'Campus',
        rules: ['On-Spot Participation', 'No Registration Required'],
        coordinators: []
    },

    // Pro Shows (Deep Purple/Magenta)
    {
        filename: 'mentalist-show.html',
        title: 'Mentalist Show',
        category: 'Pro Show',
        description: 'Mind-bending performance by a renowned mentalist.',
        date: 'Feb 27',
        time: '4:00 PM',
        venue: 'Gloria Gopi Hall',
        rules: ['Open to all', 'Entry via Fest Pass'],
        coordinators: []
    },
    {
        filename: 'luminare.html',
        title: 'Luminare',
        category: 'Pro Show',
        description: 'Cultural Night - A night of lights and music.',
        date: 'Feb 27',
        time: '6:00 PM - 10:00 PM',
        venue: 'Auditorium',
        rules: ['Entry via Fest Pass'],
        coordinators: []
    },
    {
        filename: 'fashion-show.html',
        title: 'Fashion Show',
        category: 'Pro Show',
        description: 'Walk the ramp in style.',
        date: 'Feb 28',
        time: '6:30 PM',
        venue: 'Auditorium',
        rules: ['Entry via Fest Pass'],
        coordinators: []
    },
    {
        filename: 'pro-show-2-3.html',
        title: 'Pro Shows (Day 2 & 3)',
        category: 'Pro Show',
        description: 'Live Band & DJ Night.',
        date: 'Feb 28 & Mar 01',
        time: '8:00 PM - 9:00 PM',
        venue: 'Auditorium',
        rules: ['Entry via Fest Pass'],
        coordinators: []
    }
];

const templateRaw = `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{TITLE}} | CONCETTO 2026</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        gold: '#D4AF37',
                        dark: '#0a0a0a',
                        'dark-gray': '#1a1a1a',
                        'subtle-red': '#8B0000',
                    },
                    fontFamily: {
                        sans: ['Outfit', 'sans-serif'],
                    }
                }
            }
        }
    </script>
    <link rel="stylesheet" href="../css/styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .glass-nav { background: rgba(10, 10, 10, 0.95); backdrop-filter: blur(10px); }
    </style>
</head>
<body class="bg-dark text-white antialiased selection:bg-gold/30">

    <!-- Main Navigation -->
    <nav class="fixed top-0 w-full z-50 glass-nav border-b border-white/10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <a href="../index.html" class="text-xl font-bold tracking-wider text-gold hover:text-white transition-colors">CONCETTO '26</a>
                <a href="../index.html#events" class="text-sm font-medium text-gray-400 hover:text-gold transition-colors flex items-center gap-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                    Back to Events
                </a>
            </div>
        </div>
    </nav>

    <!-- Page Content -->
    <main class="pt-28 pb-32 max-w-5xl mx-auto px-4 sm:px-6 relative">
        
        <!-- Text-Based Hero -->
        <div class="mb-12 md:mb-16 animate-fade-in-up">
            <div class="inline-block px-3 py-1 mb-4 border border-gold/30 rounded-full bg-gold/5 backdrop-blur-sm">
                <span class="text-xs font-bold text-gold tracking-widest uppercase">{{CATEGORY}}</span>
            </div>
            <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-2 tracking-tight leading-tight uppercase">{{TITLE}}</h1>
            <p class="text-lg md:text-xl text-gray-400 tracking-wide font-light">{{CATEGORY}} | CONCETTO '26</p>
        </div>

        <!-- Sticky Anchor Navigation -->
        <div class="sticky top-16 z-40 bg-dark/95 backdrop-blur-md border-y border-white/10 mb-12 -mx-4 px-4 md:mx-0 md:px-0 md:rounded-full md:border">
            <div class="flex items-center overflow-x-auto no-scrollbar space-x-6 py-4 md:justify-center md:space-x-12">
                <a href="#overview" class="text-sm font-medium text-white hover:text-gold whitespace-nowrap transition-colors">Overview</a>
                <a href="#info" class="text-sm font-medium text-gray-400 hover:text-gold whitespace-nowrap transition-colors">Event Info</a>
                <a href="#guidelines" class="text-sm font-medium text-gray-400 hover:text-gold whitespace-nowrap transition-colors">Guidelines</a>
                <a href="#coordinators" class="text-sm font-medium text-gray-400 hover:text-gold whitespace-nowrap transition-colors">Coordinators</a>
                {{REG_NAV_LINK}}
            </div>
        </div>

        <!-- Event Overview -->
        <section id="overview" class="mb-16 scroll-mt-32 animate-on-scroll">
            <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span class="w-1 h-8 bg-gold rounded-full"></span>
                Event Overview
            </h2>
            <div class="prose prose-invert prose-lg max-w-none text-gray-300 leading-relaxed">
                <p>{{OVERVIEW}}</p>
            </div>
        </section>

        <!-- Event Information Grid -->
        <section id="info" class="mb-16 scroll-mt-32 animate-on-scroll">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <!-- Date -->
                <div class="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-start gap-4 hover:bg-white/10 transition-colors">
                    <div class="p-3 bg-gold/10 rounded-xl text-gold">
                        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    </div>
                    <div>
                        <h3 class="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Date</h3>
                        <p class="text-lg font-semibold text-white">{{DATE}}</p>
                    </div>
                </div>
                <!-- Time -->
                <div class="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-start gap-4 hover:bg-white/10 transition-colors">
                    <div class="p-3 bg-gold/10 rounded-xl text-gold">
                        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <div>
                        <h3 class="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Time</h3>
                        <p class="text-lg font-semibold text-white">{{TIME}}</p>
                    </div>
                </div>
                <!-- Venue -->
                <div class="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-start gap-4 hover:bg-white/10 transition-colors">
                    <div class="p-3 bg-gold/10 rounded-xl text-gold">
                        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <div>
                        <h3 class="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Venue</h3>
                        <p class="text-lg font-semibold text-white">{{VENUE}}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Guidelines -->
        <section id="guidelines" class="mb-16 scroll-mt-32 animate-on-scroll">
            <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span class="w-1 h-8 bg-gold rounded-full"></span>
                Guidelines & Rules
            </h2>
            <div class="bg-dark-gray border border-white/10 rounded-2xl p-6 md:p-8">
                <ul class="space-y-4">
                    {{RULES_LIST}}
                </ul>
            </div>
        </section>

        <!-- Coordinators -->
        <section id="coordinators" class="mb-24 scroll-mt-32 animate-on-scroll">
            <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span class="w-1 h-8 bg-gold rounded-full"></span>
                Event Coordinators
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                {{COORDINATORS_LIST}}
            </div>
        </section>

    </main>

    <!-- Sticky Bottom CTA -->
    {{REG_SECTION}}

    <!-- Scripts -->
    <script>
        // Simple Intersection Observer for Fade-in Animations
        document.addEventListener('DOMContentLoaded', () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('opacity-100', 'translate-y-0');
                        entry.target.classList.remove('opacity-0', 'translate-y-10');
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('.animate-on-scroll').forEach((el) => {
                el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-10');
                observer.observe(el);
            });
        });
    </script>
</body>
</html>`;

function generatePages() {
    const eventsDir = path.join(__dirname, '../events');
    if (!fs.existsSync(eventsDir)) {
        fs.mkdirSync(eventsDir);
    }
    console.log('Writing to:', eventsDir);

    eventList.forEach(event => {
        let content = templateRaw.replace(/{{TITLE}}/g, event.title);
        content = content.replace(/{{CATEGORY}}/g, event.category);
        content = content.replace(/{{DESCRIPTION}}/g, event.description);
        content = content.replace(/{{OVERVIEW}}/g, event.overview || event.description);
        content = content.replace(/{{DATE}}/g, event.date);
        content = content.replace(/{{TIME}}/g, event.time);
        content = content.replace(/{{VENUE}}/g, event.venue);

        const rulesHTML = event.rules.map(r =>
            `<li class="flex items-start gap-3 text-gray-300">
                <svg class="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>${r}</span>
            </li>`
        ).join('\n');
        content = content.replace(/{{RULES_LIST}}/g, rulesHTML);

        const coordsHTML = event.coordinators.map(c => `
        <a href="tel:${c.phone.replace(/\s/g, '')}" class="flex items-center gap-4 bg-white/5 border border-white/5 p-4 rounded-xl hover:bg-white/10 transition-all group">
            <div class="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            </div>
            <div>
                <p class="text-white font-bold text-base">${c.name}</p>
                <p class="text-gray-400 text-sm group-hover:text-gold transition-colors">${c.phone}</p>
            </div>
        </a>`).join('\n');
        content = content.replace(/{{COORDINATORS_LIST}}/g, coordsHTML);

        let regSectionHTML = '';
        let regNavLinkHTML = '';
        if (event.regLink) {
            regNavLinkHTML = '<a href="#register" class="text-sm font-medium text-gray-400 hover:text-gold whitespace-nowrap transition-colors">Register</a>';
            regSectionHTML = `
    <div id="register" class="fixed bottom-0 left-0 w-full p-4 bg-dark/90 backdrop-blur-lg border-t border-white/10 z-50 flex items-center justify-center">
        <a href="${event.regLink}" target="_blank" class="w-full md:w-auto px-12 py-4 bg-gold text-dark font-bold text-lg rounded-full shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:scale-105 hover:bg-white transition-all duration-300 flex items-center justify-center gap-2">
            Register
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </a>
    </div>`;
        }
        content = content.replace(/{{REG_SECTION}}/g, regSectionHTML);
        content = content.replace(/{{REG_NAV_LINK}}/g, regNavLinkHTML);

        fs.writeFileSync(path.join(eventsDir, event.filename), content);
        console.log(`Generated: ${event.filename}`);
    });
}

generatePages();
