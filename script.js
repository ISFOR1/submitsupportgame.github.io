document.getElementById('applyForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting in the traditional way

    // Collect form data
    const name = document.getElementById('name').value;
    const timeSpent = document.getElementById('timeSpent').value;
    const problemSolving = document.getElementById('problemSolving').value;
    const coolWithEveryone = document.getElementById('coolWithEveryone').value;
    const knowCommands = document.getElementById('knowCommands').value;
    const knowSupport = document.getElementById('knowSupport').value;

    // Format the message to be sent to Discord
    const message = `
**New Support Application:**

**Name:** ${name}
**Time Spent on Game:** ${timeSpent}
**Problem Solving:** ${problemSolving}
**Cool with Everyone:** ${coolWithEveryone}
**Know Admin Commands:** ${knowCommands}
**Know Support Team:** ${knowSupport}
    `;

    // Send the data to Discord using the webhook
    const webhookURL = 'https://discord.com/api/webhooks/1276271893779058719/oiLoC6B79fwgKHot_CqHYviChZPK-TL0rs0wmiY8JP6faGl8OPtxNu1JZWG7mCMfw8kq'; // Replace with your Discord webhook URL

    const payload = {
        content: message, 
        username: 'Support Application Bot', 
    };

    fetch(webhookURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    })
    .then(response => {
        if (response.ok) {
            console.log('Application submitted successfully!');

            // Hide the form and show the thank you message
            document.getElementById('applyForm').classList.add('hidden');
            document.getElementById('thankYouMessage').classList.remove('hidden');
        } else {
            console.error('Failed to submit application:', response.statusText);
        }
    })
    .catch(error => console.error('Error:', error));
});
