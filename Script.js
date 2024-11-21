

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
    const paperPatternImg = document.getElementById('company-image-img');
    const syllabusImg = document.getElementById('syllabus-image-img');
    
    details.style.display = 'block';

    switch (company) {
        case 'tcs':
            updateCompanyImages('TCS.jpg', 'TCS-Syllabus.jpg');
            break;
        case 'accenture':
            updateCompanyImages('Accenture.jpg', 'Accenture-Syllabus.jpg');
            break;
        case 'capgemini':
            updateCompanyImages('Capgemini.jpg', 'Capgemini-Syllabus.jpg');
            break;
        case 'quantify':
            updateCompanyImages('Quantify.jpg', 'Quantify-Syllabus.jpg');
            break;
        case 'ltimindtree':
            updateCompanyImages('LTIMindtree.jpg', 'LTIMindtree-Syllabus.jpg');
            break;
        case 'infosys':
            updateCompanyImages('Infosys.jpg', 'Infosys-Syllabus.jpg');
            break;
        case 'wipro':
            updateCompanyImages('Wipro.jpg', 'Wipro-Syllabus.jpg');
            break;
        case 'hexaware':
            updateCompanyImages('Hexaware.jpg', 'Hexaware-Syllabus.jpg');
            break;
        case 'cognizant':
            updateCompanyImages('Cognizant.jpg', 'Cognizant-Syllabus.jpg');
            break;
        case 'deloitte':
            updateCompanyImages('Deloitte.jpg', 'Deloitte-Syllabus.jpg');
            break;
        case 'oracle':
            updateCompanyImages('Oracle.jpg', 'Oracle-Syllabus.jpg');
            break;
        case 'saplabs':
            updateCompanyImages('SAPLabs.jpg', 'SAPLabs-Syllabus.jpg');
            break;
        case 'cisco':
            updateCompanyImages('Cisco.jpg', 'Cisco-Syllabus.jpg');
            break;
        default:
            break;
    }

    toggleImage('company-image');
    toggleImage('syllabus-image');
}

function updateCompanyImages(paperPattern, syllabus) {
    const paperPatternImg = document.getElementById('company-image-img');
    const syllabusImg = document.getElementById('syllabus-image-img');
    paperPatternImg.src = paperPattern;
    syllabusImg.src = syllabus;
}

function toggleImage(imageId) {
    const imgDiv = document.getElementById(imageId);
    imgDiv.style.display = (imgDiv.style.display === 'none' || imgDiv.style.display === '') ? 'block' : 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    const imgDivs = ['company-image', 'syllabus-image'];
    imgDivs.forEach(function(id) {
        const imgDiv = document.getElementById(id);
        imgDiv.style.display = 'none';
    });
});



