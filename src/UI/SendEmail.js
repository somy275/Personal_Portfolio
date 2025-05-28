import emailjs from '@emailjs/browser';
export const onSendData = (data) => {
    emailjs.send('service_ee96nwn', 'template_bekk9ve', data, {
        publicKey: "zU5MC4AjhJkakciY3"
    })
    // }).then(
    //     (response) => {
    //         console.log('SUCCESS!', response.status, response.text);
    //     },
    //     (error) => {
    //         console.log('FAILED...', error);
    //     },
    // );
}