import styled from "styled-components";
import SocialLinks from "../components/SocialLinks";

const PageFooter = () => {
  return (
    <FooterBlock className="bg-white">
      <SocialBlock>
        <SocialLinks />
      </SocialBlock>
      <div className="max-w-7xl mx-auto px-4 py-6 text-center text-sm text-gray-500">
        <p>travels@webmail.com</p>
        <p className="mt-1">Copyright © 2024 Name. All rights reserved.</p>
      </div>
    </FooterBlock>
  );
};

export default PageFooter;

const SocialBlock = styled.div`
  max-width: 300px;
  margin: 0 auto;
  padding: 60px 0 50px 0;
`;
const FooterBlock = styled.div`
  font-weight: 700;
  font-size: 13px;
  padding: 40px 0;
`;
