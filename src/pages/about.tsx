import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const About = () => (
  <Main meta={<Meta title="About | NFTLaunchKit" description="All about NFTLaunchKit home assessment specification." />}>
    <div className="flex-1 flex justify-center items-center">
      <div className="leading-10">
        <h2 className="text-4xl">NextJS Task</h2>
        <br/>
        <p>- Create a new Git repository and project (Public).</p>
        <p>- Use NextJS (JS or TS), Wagmi, Tailwind or ChakraUI and create a small app.</p>
        <p className="text-2xl">Features and structure:</p>
        <p>- Nice layout with navbar and footer with Next Router.</p>
        <p>- Wallet Connection Integration with Metamask and Coinbase Wallet with Wagmi.</p>
        <p>- Use API of your choice e.g. Coinbase API or any other and display CryptoPunk Collection on the front page of your project.</p>
        <p>- Very important is clean code and comments in your functions.</p>
        <p>- Deploy to Vercel or Netifly.</p>
        <p></p>
      </div>
    </div>
  </Main>
);

export default About;
