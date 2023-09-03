const EMAIL_TEMPLATE = (formData) => {
    return `
            <h1>${formData?.name?.value}'s SOP Data</h1><br/>
              <div class="email-body">
                <div class="field-data"><span class="field-header">Full Name: </span><span class="field-value">${formData?.name?.value}</span></div><br/>
                <div class="field-data"><span class="field-header">Email: </span><span class="field-value">${formData?.email?.value}</span></div><br/>
                <div class="field-data"><span class="field-header">Age: </span><span class="field-value">${formData?.age?.value}</span></div><br/>
                <div class="field-data"><span class="field-header">Highest level of Education: </span><span class="field-value">${formData?.qualification?.value}</span></div><br/>
                <div class="field-data"><span class="field-header">Institute where Highest level of Education completed:</span><span class="field-value">${formData?.institute?.value}</span></div><br/>
                <div class="field-data"><span class="field-header">Field of Study: </span><span class="field-value">${formData?.field?.value}</span></div><br/>
                <div class="field-data"><span class="field-header">Relevent work experience: </span><span class="field-value">${formData?.experience?.value}</span></div><br/>
                <div class="field-data"><span class="field-header">Institute did got admitted to in Canada: </span><span class="field-value">${formData?.institutecanada?.value}</span></div><br/>
                <div class="field-data"><span class="field-header">Your program of study in Canada: </span><span class="field-value">${formData?.programcanada?.value}</span></div><br/>
                <div class="field-data"><span class="field-header">Country from you are applying: </span><span class="field-value">${formData?.countryorigin?.value}</span></div><br/>
                <div class="field-data"><span class="field-header">Your future goals: </span><span class="field-value">${formData?.goals?.value}</span></div><br/>
                <div class="field-data"><span class="field-header">English Scores - Listening: </span><span class="field-value">${formData?.listening?.value}</span></div><br/>
                <div class="field-data"><span class="field-header">English Scores - Reading: </span><span class="field-value">${formData?.reading?.value}</span></div><br/>
                <div class="field-data"><span class="field-header">English Scores - Speaking: </span><span class="field-value">${formData?.speaking?.value}</span></div><br/>
                <div class="field-data"><span class="field-header">English Scores - Writing: </span><span class="field-value">${formData?.writing?.value}</span></div><br/>
                <div class="field-data"><span class="field-header">First year tuition fees payment status: </span><span class="field-value">${formData?.firsttution?.value === "yes" ? 'Paid' : 'Not Paid'}</span></div><br/>
                <div class="field-data"><span class="field-header">Tuition fee amount paid: </span><span class="field-value">${formData?.tutionfees?.value}</span></div><br/>
                <div class="field-data"><span class="field-header">GIC status: </span><span class="field-value">${formData?.gic?.value === "yes" ? 'Completed' : 'Not Completed'}</span></div><br/>
                <div class="field-data"><span class="field-header">GIC Payment amount: </span><span class="field-value">${formData?.gicpay?.value}</span></div><br/>
              </div>
    `;
}

module.exports = EMAIL_TEMPLATE;