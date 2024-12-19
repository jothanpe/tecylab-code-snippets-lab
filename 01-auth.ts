import { defineAuth } from "@aws-amplify/backend";

export const auth = defineAuth({
  loginWith: {
    email: {
      verificationEmailStyle: "CODE",
      verificationEmailSubject: "AI-Powered Recipe Generator App!",
      verificationEmailBody: (createCode) =>
        `Usa este código para confirmar tu cuenta: ${createCode()}`,
    },
  },
});