import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Text,
  Link,
  Button,
} from "@react-email/components";

type VerificationEmailProps = {
  url: string;
  email: string;
};

export default function VerificationEmail({ url, email }: VerificationEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Sign in to your KATALYST account</Preview>
      <Body style={main}>
        <Container style={container}>
          <Text style={heading}>Welcome back to KATALYST 👋</Text>

          <Text style={text}>
            Hi <strong>{email}</strong>,
          </Text>
          <Text style={text}>Click the button below to sign in:</Text>

          <Section style={{ textAlign: "center", margin: "24px 0" }}>
            <Button style={button} href={url}>
              Sign in to your account
            </Button>
          </Section>

          <Text style={text}>
            If the button doesn&apos;t work, copy and paste this URL into your browser:
          </Text>
          <Link style={link} href={url}>
            {url}
          </Link>

          <Text style={footer}>
            If you didn&apos;t request this email, you can safely ignore it.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

// Styles
const main = {
  backgroundColor: "#f9fafb",
  padding: "40px 0",
  fontFamily: "Arial, sans-serif",
};

const container = {
  maxWidth: "520px",
  margin: "0 auto",
  backgroundColor: "#ffffff",
  padding: "32px",
  borderRadius: "8px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
};

const heading = {
  fontSize: "20px",
  fontWeight: "bold",
  marginBottom: "24px",
};

const text = {
  fontSize: "16px",
  color: "#333333",
  margin: "16px 0",
};

const button = {
  backgroundColor: "#2563eb",
  color: "#ffffff",
  padding: "12px 20px",
  borderRadius: "6px",
  textDecoration: "none",
  fontWeight: "bold",
};

const link = {
  wordBreak: "break-word" as React.CSSProperties["wordBreak"],
  color: "#2563eb",
  fontSize: "14px",
};

const footer = {
  fontSize: "12px",
  color: "#888888",
  marginTop: "32px",
};
