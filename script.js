function toggleSection(sectionId) {
    const allSections = document.querySelectorAll('.syllabus-section');
    allSections.forEach(section => {
        section.style.display = 'none';
    });
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = (selectedSection.style.display === 'none' || selectedSection.style.display === '') ? 'block' : 'none';
    }
}

function toggleCompanyDetails(company) {
    const details = document.getElementById('company-details');
    details.style.display = 'block';
    const paperPatternImg = document.getElementById('company-image-img');
    const syllabusImg = document.getElementById('syllabus-image-img');
    switch (company) {
        case 'tcs':
            paperPatternImg.src = 'TCS.jpg';
            syllabusImg.src = 'TCS-Syllabus.jpg';
            break;
        case 'accenture':
            paperPatternImg.src = 'Accenture.jpg';
            syllabusImg.src = 'Accenture-Syllabus.jpg';
            break;
        case 'capgemini':
            paperPatternImg.src = 'Capgemini.jpg';
            syllabusImg.src = 'Capgemini-Syllabus.jpg';
            break;
        case 'quantify':
            paperPatternImg.src = 'Quantify.jpg';
            syllabusImg.src = 'Quantify-Syllabus.jpg';
            break;
        case 'ltimindtree':
            paperPatternImg.src = 'LTIMindtree.jpg';
            syllabusImg.src = 'LTIMindtree-Syllabus.jpg';
            break;
        case 'infosys':
            paperPatternImg.src = 'Infosys.jpg';
            syllabusImg.src = 'Infosys-Syllabus.jpg';
            break;
        case 'wipro':
            paperPatternImg.src = 'Wipro.jpg';
            syllabusImg.src = 'Wipro-Syllabus.jpg';
            break;
        case 'hexaware':
            paperPatternImg.src = 'Hexaware.jpg';
            syllabusImg.src = 'Hexaware-Syllabus.jpg';
            break;
        case 'cognizant':
            paperPatternImg.src = 'Cognizant.jpg';
            syllabusImg.src = 'Cognizant-Syllabus.jpg';
            break;
        case 'deloitte':
            paperPatternImg.src = 'Deloitte.jpg';
            syllabusImg.src = 'Deloitte-Syllabus.jpg';
            break;
        case 'oracle':
            paperPatternImg.src = 'Oracle.jpg';
            syllabusImg.src = 'Oracle-Syllabus.jpg';
            break;
        case 'saplabs':
            paperPatternImg.src = 'SAPLabs.jpg';
            syllabusImg.src = 'SAPLabs-Syllabus.jpg';
            break;
        case 'cisco':
            paperPatternImg.src = 'Cisco.jpg';
            syllabusImg.src = 'Cisco-Syllabus.jpg';
            break;
        default:
            break;
    }
    toggleImage('company-image');
    toggleImage('syllabus-image');
}

function toggleImage(imageId) {
    const imgDiv = document.getElementById(imageId);
    if (imgDiv.style.display === 'none' || imgDiv.style.display === '') {
        imgDiv.style.display = 'block';
    } else {
        imgDiv.style.display = 'none';
    }
}
