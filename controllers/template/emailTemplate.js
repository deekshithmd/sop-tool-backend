const qualifications=require('../../config');

const EMAIL_TEMPLATE = (formData) => {
    return `
            <h1>Dear ${formData?.name?.value}</h1><br/>
            <p>Please find your the Statement of Purpose data here<p><br/>
            <div class="email-body">
                <div><span>Full Name: </span><span >${formData?.name?.value}</span></div><br/>
                <div><span>Email: </span><span>${formData?.email?.value}</span></div><br/>
                <div><span>Age: </span><span>${formData?.age?.value}</span></div><br/>
                <div><span>Highest level of Education: </span><span>${qualifications[formData?.qualification?.value]}</span></div><br/>
                <div><span>Institute where Highest level of Education completed:</span><span>${formData?.institute?.value}</span></div><br/>
                <div><span>Field of Study: </span><span>${formData?.field?.value}</span></div><br/>
                <div><span>Relevent work experience: </span><span>${formData?.experience?.value}</span></div><br/>
                <div><span>Institute did got admitted to in Canada: </span><span>${formData?.institutecanada?.value}</span></div><br/>
                <div><span>Your program of study in Canada: </span><span>${formData?.programcanada?.value}</span></div><br/>
                <div><span>Country from you are applying: </span><span>${formData?.countryorigin?.value}</span></div><br/>
                <div><span>Your future goals: </span><span>${formData?.goals?.value}</span></div><br/>
                <div><span>English Scores - Listening: </span><span>${formData?.listening?.value}</span></div><br/>
                <div><span>English Scores - Reading: </span><span>${formData?.reading?.value}</span></div><br/>
                <div><span>English Scores - Speaking: </span><span>${formData?.speaking?.value}</span></div><br/>
                <div><span>English Scores - Writing: </span><span>${formData?.writing?.value}</span></div><br/>
                <div><span>First year tuition fees payment status: </span><span>${formData?.firsttution?.value === "yes" ? 'Paid' : 'Not Paid'}</span></div><br/>
                <div><span>Tuition fee amount paid: </span><span>${formData?.tutionfees?.value}</span></div><br/>
                <div><span>GIC status: </span><span>${formData?.gic?.value === "yes" ? 'Completed' : 'Not Completed'}</span></div><br/>
                <div><span>GIC Payment amount: </span><span>${formData?.gicpay?.value}</span></div><br/>
            </div>
            <p>Regards</p>
            <span>Effizient</span>
    `;
}

module.exports = EMAIL_TEMPLATE;