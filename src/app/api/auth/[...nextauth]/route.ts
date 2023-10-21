import NextAuth from "next-auth";
import CognitoProvider from "next-auth/providers/cognito";

const handler = NextAuth({
  // Configure one or more authentication providers
  providers: [
    CognitoProvider({
      clientId: '4bs6sbl0nfbfp3so1fbogr1edd',
      clientSecret: '2jkosifpcic151sfejn55ascs8ofh97mal2k62f9grlnr1k98ln',
      issuer: 'https://cognito-idp.us-east-2.amazonaws.com/us-east-2_tdQI2XLUP'
    }),
  ]
});

export {handler as GET, handler as POST}