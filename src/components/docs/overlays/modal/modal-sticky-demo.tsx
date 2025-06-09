"use client"

import { Button } from "@/components/ui/button"
import { Modal } from "@/components/ui/modal"

export default function ModalStickyDemo() {
  return (
    <Modal>
      <Button>Read</Button>
      <Modal.Content size="2xl">
        <Modal.Header>
          <Modal.Title>Terms of Use</Modal.Title>
          <Modal.Description>
            If you do not agree to these terms, please refrain from using our services.
          </Modal.Description>
        </Modal.Header>
        <Modal.Body>
          <div className="prose prose-zinc dark:prose-invert">
            <p>
              By accessing or using our services, you agree to be bound by these terms. If you do
              not agree to these terms, please refrain from using our services.
            </p>
            <h3> User Obligations</h3>
            <h4>Account Responsibility</h4>
            <p>
              When you create an account with us, you are responsible for maintaining the
              confidentiality of your account and password.
            </p>
            <p>
              You agree to accept responsibility for all activities that occur under your account.
              You must notify us immediately of any breach of security or unauthorized use of your
              account.
            </p>
            <h4>Compliance with Laws</h4>
            <p>
              You agree to comply with all applicable laws, regulations, and policies in connection
              with your use of our services. This includes adhering to intellectual property laws
              and refraining from any unlawful behavior while using our platform.
            </p>
            <div>
              <h3> Prohibited Activities</h3>
              <p>
                You are not permitted to access or attempt to access any of our services by any
                means other than through the interface provided by us. Any form of hacking,
                bypassing, or circumventing our security protocols is strictly prohibited.
              </p>
            </div>
            <div>
              <h4>Misuse of Content</h4>
              <p>
                You agree not to misuse, reproduce, distribute, or modify any content from our
                services unless explicitly authorized by us. This includes engaging in activities
                such as scraping, data mining, or using automated systems to extract data.
              </p>
            </div>
            <div>
              <h4>Harassment and Abuse</h4>
              <p>
                You are prohibited from using our services to harass, abuse, or harm other users.
                This includes sending unsolicited messages, stalking, or engaging in any form of
                cyberbullying. We reserve the right to terminate accounts found in violation of this
                policy.
              </p>
            </div>
            <div>
              <h4>Ownership of Content</h4>
              <p>
                All content, trademarks, service marks, logos, and other intellectual property
                displayed on our services are the property of their respective owners. You may not
                use, copy, or distribute any content without prior written permission from the
                owner.
              </p>
            </div>
            <div>
              <h4>User-Generated Content</h4>
              <p>
                By submitting content to our services, you grant us a worldwide, royalty-free,
                non-exclusive license to use, distribute, modify, and display that content for the
                purpose of providing our services.
              </p>
            </div>
            <p>
              You retain all ownership rights to your content but agree to allow us to use it in
              accordance with these terms.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Modal.Close>Close</Modal.Close>
          <Button>Accept</Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  )
}
