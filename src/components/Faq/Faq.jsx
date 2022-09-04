import React from "react";
import "./Faq.css";
import Navbar from "../Navbar";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
function Faq() {
  return (
    <>
      <Navbar />

      <div className="faq_outside">
        <h1>Frequently Asked Questions</h1>
        <div>
          <div>
            <Accordion className="accordion">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  What is Your Doctors Online and how does it work?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="typography">
                  We are a proudly Indian company with world-class doctors. Our
                  doctors work diligently around the clock to provide free
                  medical consultations 24 hours a day, 7 days a week. As we
                  need to have around the clock coverage, some of our doctors
                  are globally situated. We are here for you whenever you need
                  us. When you download our app, you will always have a well
                  educated, board-certified physician ready to assist.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="accordion">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>
                  Can I select which doctor I want to chat with?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="typography">
                  All of our doctors are well educated and screened to ensure
                  they are able to discuss topics in the general physician
                  field. Our physicians respond to our patients on a rotating
                  basis to ensure 24 hour coverage. With this continuous
                  coverage, we cannot guarantee that you will be able to speak
                  to a specific doctor at any given time. In some cases, the
                  doctor on call may transfer you to a specific physician if
                  they determine another physician could provide better insights
                  for your particular medical concern.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="accordion">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
              >
                <Typography>
                  Can I consult with an online doctor from anywhere in the
                  world?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="typography">
                  Your Doctors Online is a platform that has made it possible
                  for anyone to access online healthcare services from anywhere
                  in the world.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="accordion">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4a-content"
                id="panel4a-header"
              >
                <Typography>
                  Do I have to book an appointment in advance?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="typography">
                  You do not have to book an appointment in advance to chat with
                  our online doctors. Download the app and we will connect you
                  with a physician within minutes.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion className="accordion">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel5a-content"
                id="panel5a-header"
              >
                <Typography>How will I get my response?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Your Doctors Online is a smartphone-based application that can
                  be downloaded through the Apple Store or the Google Play
                  Store. Once you have downloaded our free app, you simply click
                  on the app to be connected with an online doctor and try out
                  our free chat. Simply answer a few questions about yourself
                  and your medical concern. You will then connect with a doctor
                  through an in-app real-time online chat. This chat is similar
                  to many online messaging systems and allows you to communicate
                  with a real doctor about your issue 24 hours a day, 7 days a
                  week.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion className="accordion">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel6a-content"
                id="panel6a-header"
              >
                <Typography>
                  Can I upload attachments for the doctors to review and provide
                  their medical expertise?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Our service provides a chat with a doctor for users around the
                  world. We strongly believe that everyone should have access to
                  medical advice from a doctor regardless of their economic
                  status or country of origin. In addition to an online text
                  chat, our users are able to also attach photos and videos for
                  our users to review. Our users are also able to skip the queue
                  to access our doctors sooner and get medication reminders to
                  never miss a dose.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion className="accordion">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel7a-content"
                id="panel7a-header"
              >
                <Typography>
                  Can Your Doctors Online replace my existing doctor?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Our service is designed to provide convenient access to
                  medical information and bring peace of mind to our patients.
                  We want people to be able to access a doctor easily and
                  without cost becoming a barrier to sound medical advice. Your
                  Doctors Online is earmarked to compliment your existing
                  medical services and help deter unnecessary visits to the
                  doctor and hospital. We want to eliminate as many hours spent
                  unnecessary sitting in a waiting room as we possibly can. When
                  necessary, our doctors will direct our patients to their
                  primary physician or emergency room when the issue presented
                  warrants it.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion className="accordion">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel8a-content"
                id="panel8a-header"
              >
                <Typography>How to get prescriptions online?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  You can receive online prescriptions for non-controlled
                  medications and refills for medications prescribed by local
                  doctors by consulting with our trusted doctors. Your Doctors
                  Online is an easy, reliable solution to all of your worries.
                  Using our application, you can get a prescription right from
                  the comfort of your home without visits to the doctor’s clinic
                  or hefty healthcare expenses. Get your free online
                  prescription now; it’s just a finger tap away.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion className="accordion">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel9a-content"
                id="panel9a-header"
              >
                <Typography>
                  How can you provide free access to a doctor?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Creating a service that provides free access to doctors
                  worldwide is not easy. Our founders believe strongly that this
                  service is not only a great idea, but has been lifesaving for
                  many of our users. Our doctors are also passionate about
                  providing healthcare to those who are unable to access a
                  doctor for either economic or other limitations. In order to
                  fund our services, our online doctor chat is free for the
                  first day. After one day period, you are charged with a
                  monthly subscription or an annual subscription. Subscribing to
                  our service is easy. You never need to give us a credit card
                  number as all transactions are done safely through the Apple
                  Store or the Google Play Store.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion className="accordion">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel10a-content"
                id="panel10a-header"
              >
                <Typography>Can I chat with a real doctor online?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Yes, our free app allows you to chat live with a real doctor
                  online. You can send pictures or videos and get a medical
                  diagnosis from the comfort of your home. Our doctors are
                  available 24 hours a day, working assiduously to ensure you
                  and your family receive the best medical advice online.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion className="accordion">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel11a-content"
                id="panel11a-header"
              >
                <Typography>What can online doctors treat?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Our online doctors are equipped to deal with a number of
                  diseases including, but not limited to, allergies, bacterial
                  vaginosis, yeast Infections, skin irritants, fertility issues,
                  identify cysts, urinary tract infections, cold and flu,
                  stomachaches, sore throats, pregnancy, and many more.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion className="accordion">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel12a-content"
                id="panel12a-header"
              >
                <Typography>How to find OBGYN online for free?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Find OBGYN online for free at Your Doctors Online. Simply
                  download our application and consult with our board-certified
                  OBGYN online. Depending on your medical concern, our doctors
                  will refer you to an OBGYN online. This service is also
                  available to our US-based users.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion className="accordion">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel13a-content"
                id="panel13a-header"
              >
                <Typography>Can I get prescription refills?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  The process of getting a prescription refill couldn’t be more
                  straightforward; connect with a doctor at Your Doctors Online
                  and get your prescription refilled from the comfort of your
                  home.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}

export default Faq;
