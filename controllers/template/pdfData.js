const qualifications=require('../../config')

const dataStrings = (formData) => {
  const firstPage = `
  From
  ${formData?.name?.value},
  ${formData?.countryorigin?.value},
  ${formData?.email?.value}
  
  To
  Visa Officer
  High Commission of Canada
  Subject: Statement of Purpose for studying in Canada

  Dear Sir/Madam,

  I would like to take this opportunity to introduce myself as ${formData?.name?.value},
  a passionate Frontend Developer with a ${qualifications[formData?.qualification?.value]} 
  in ${formData?.field?.value} fromn${formData?.institute?.value}. 
  I am writing this statement of purpose to express my interest in pursuing 
  further studies in Canada.

  Why the Program of Study in Canada at the Education Institute Name:

  After working as a Frontend Developer at Push Protocol, I have realized
  the importance of continuous learning and staying updated with the latest
  technologies in the field of web development. I believe that pursuing a
  program of study in Canada will provide me with the necessary skills 
  and knowledge to excel in my career.

  The program of study that I am interested in is ${formData?.field?.value}
  with a specialization in Web Development. I have chosen this program
  because it aligns perfectly with my educational background and work
  experience. The interdisciplinary approach of the program will allow
  me to gain a comprehensive understanding of various concepts related
  to web development, including programming languages, user experience
  design, and software development methodologies.

  I have done extensive research on various educational institutions in
  Canada, and I believe that (Education Institute Name) is the perfect
  fit for me. The institute has a reputation for its strong faculty and
  state-of-the-art facilities, which will provide me with the necessary
  resources to enhance my skills and knowledge in web development. 
  Additionally, the institute's focus on practical learning and industry
  collaborations will give me the opportunity to work on real-world 
  projects and gain hands-on experience.
  `;

  const secondPage = `
  Why study in Canada:

  Canada has always been my top choice for pursuing higher education due
  to its excellent education system and multicultural environment. 
  Canadian universities and colleges are known for their high academic 
  standards and globally recognized degrees. Studying in Canada will not
  only provide me with a quality education but also expose me to diverse
  cultures and perspectives, which will broaden my horizons and enhance
  my communication skills.

  Moreover, Canada is a safe and peaceful country with a strong health
  -care system. As an international student, the safety and well-being 
  of myself and my family are of utmost importance to me. I am confident 
  that Canada will provide me with a secure and supportive environment 
  to pursue my studies.

  My Future Goals:

  Upon completion of my program of study in Canada, my goal is to 
  ${formData?.goals?.value}. I aim to utilize the knowledge and skills 
  gained during my studies to develop innovative and user-friendly web
  applications that can solve real-world problems. I believe that my 
  education in Canada will equip me with the necessary expertise to 
  excel in this field and make a positive impact in my home country.

  Academic Background and Language Proficiency:

  I have completed my ${qualifications[formData?.qualification?.value]} Degree in 
  ${formData?.field?.value} from ${formData?.institute?.value}, 
  where I gained a strong foundation in programming languages, data 
  structures, and algorithms. This academic background has prepared 
  me well for the program of study in ${formData?.field?.value} with 
  a specialization in Web Development.In terms of language proficiency,
  I have achieved an overall IELTS score of 5, with individual 
  scores of ${formData?.listening?.value} in listening, ${formData?.reading?.value} in reading, ${formData?.writing?.value} in writing, 
  and ${formData?.speaking?.value} in speaking. This demonstrates my
  ability to effectively communicate and comprehend English, which is
  the primary language of instruction in Canadian universities.
  `;

  const thirdPage=`
  Finances:

  I would like to mention that I have enough finances to support my 
  education in Canada. My family is supporting my education financially,
  and I have made arrangements to cover my first-year tuition fees 
  of ${formData?.firsttution?.value}. Although I have not paid any 
  amount towards the Guaranteed Investment Certificate (GIC), I assure
  you that I have sufficient funds to cover my living expenses 
  during my stay in Canada.

  Conclusion:

  In conclusion, I am highly motivated and committed to pursuing my
  studies in Canada. I assure you that if granted the study visa, 
  I will abide by all the rules and regulations of the Canadian 
  government, the local authorities, and the educational institution.
  I kindly request you to process my visa application at the earliest
  convenience.
  Thank you for considering my application. I look forward to the 
  opportunity to study in Canada and contribute to the field of 
  web development.

  Sincerely,
  ${formData?.name?.value}
  `

  return { firstPage, secondPage, thirdPage };
};

module.exports = dataStrings;
