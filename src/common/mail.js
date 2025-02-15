import { createTransport } from "nodemailer";

const transporter = createTransport({
	service: "gmail",
	host: "smtp.gmail.com",
	port: 465,
	secure: true,
	auth: {
		user: "sheraliyevazamat095@gmail.com",
		pass: "btwr ngio zveo qezn",
	},
});

function sendMail(userMail) {
	try {
		const mailOptions = {
			from: "sheraliyevazamat095@gmail.com",
			to: userMail,
			subject: "Sending Email With Nodemailer",
			text: "Assalomu alaykum  Yurtim senga she'r bittim bugun qiyosong!",
			name: "sheraliyevazamat095",
		};

		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				console.log(error);
			} else {
				console.log("Mail Sent!");
			}
		});
	} catch (error) {
		console.log("ERROR:", error);
	}
}

sendMail("lustrum062@gmail.com");
sendMail("aliataev9979@gmail.com");
sendMail("abdulhaqsherqoziyev@gmail.com");

// export default transporter;