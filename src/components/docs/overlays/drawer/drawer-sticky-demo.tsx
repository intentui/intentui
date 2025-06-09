"use client"

import { buttonStyles } from "@/components/ui/button"
import { Drawer } from "@/components/ui/drawer"

export default function DrawerStickyDemo() {
  return (
    <Drawer>
      <Drawer.Trigger className={buttonStyles({ intent: "outline" })}>Open</Drawer.Trigger>
      <Drawer.Content>
        <Drawer.Header>The Beatles</Drawer.Header>
        <Drawer.Body>
          <div className="prose prose-zinc dark:prose-invert">
            <p>
              Welcome to our Terms of Use. By accessing or using our services, you agree to be bound
              by these terms. If you do not agree to these terms, please refrain from using our
              services.
            </p>
            <h3> User Obligations</h3>
            <h4>Account Responsibility</h4>
            <p>
              When you create an account with us, you are responsible for maintaining the
              confidentiality of your account and password.
            </p>{" "}
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
            <h3> Prohibited Activities</h3>
            <p>
              You are not permitted to access or attempt to access any of our services by any means
              other than through the interface provided by us. Any form of hacking, bypassing, or
              circumventing our security protocols is strictly prohibited.
            </p>
            <h4>Misuse of Content</h4>
            <p>
              You agree not to misuse, reproduce, distribute, or modify any content from our
              services unless explicitly authorized by us. This includes engaging in activities such
              as scraping, data mining, or using automated systems to extract data.
            </p>
            <h4>Harassment and Abuse</h4>
            <p>
              You are prohibited from using our services to harass, abuse, or harm other users. This
              includes sending unsolicited messages, stalking, or engaging in any form of
              cyberbullying. We reserve the right to terminate accounts found in violation of this
              policy.
            </p>
            <h4>Ownership of Content</h4>
            <p>
              All content, trademarks, service marks, logos, and other intellectual property
              displayed on our services are the property of their respective owners. You may not
              use, copy, or distribute any content without prior written permission from the owner.
            </p>
            <h4>User-Generated Content</h4>
            <p>
              By submitting content to our services, you grant us a worldwide, royalty-free,
              non-exclusive license to use, distribute, modify, and display that content for the
              purpose of providing our services.
            </p>
            <p>
              You retain all ownership rights to your content but agree to allow us to use it in
              accordance with these terms.
            </p>
            <h3> Termination</h3>
            <h4>Right to Terminate</h4>
            We reserve the right to terminate or suspend your access to our services at any time,
            without notice, for any reason, including but not limited to a breach of these terms.
            Upon termination, your right to use our services will immediately cease.
            <h4>Effect of Termination</h4>
            Upon termination of your account, all provisions of these terms that, by their nature,
            should survive termination shall remain in effect. This includes, but is not limited to,
            ownership provisions, warranty disclaimers, and limitations of liability.
            <h3> Limitation of Liability</h3>
            <h4>Service Availability</h4>
            We do not guarantee that our services will be available at all times or without
            interruption. We are not liable for any downtime or technical issues that may prevent
            access to our services.
            <h4>No Warranties</h4>
            Our services are provided "as is" and "as available" without any warranties of any kind,
            whether express or implied. We do not warrant that our services will meet your
            requirements or that they will be error-free or secure.
            <h4>Limitation of Damages</h4>
            In no event shall we be liable for any indirect, incidental, special, consequential, or
            punitive damages arising out of or related to your use of our services. This includes,
            but is not limited to, damages for loss of profits, data, or other intangibles.
            <h3> Changes to These Terms</h3>
            We reserve the right to modify or replace these terms at any time. If a revision is
            material, we will provide at least 30 days' notice prior to any new terms taking effect.
            What constitutes a material change will be determined at our sole discretion.
            <h3> Governing Law</h3>
            These terms shall be governed and construed in accordance with the laws of [Your
            Jurisdiction], without regard to its conflict of law provisions. Any disputes arising
            from or relating to these terms shall be resolved in the courts of [Your Jurisdiction].
            <h3> Contact Information</h3>
            If you have any questions about these terms, please contact us at xxx@example.com.
          </div>
        </Drawer.Body>
        <Drawer.Footer>
          <Drawer.Close shape="circle">Close</Drawer.Close>
        </Drawer.Footer>
      </Drawer.Content>
    </Drawer>
  )
}
