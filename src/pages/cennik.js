import React from 'react';
import H1 from '../components/H1/H1';
import SubPageLayout from '../layout/SubPage';
// import H2 from '../components/H2/H2';
// import Button from '../components/Button/Button';
import Header from '../components/Header/Header';
import Row from '../components/Row/Row';
import Column from '../components/Column/Column';
// import Paragraph from '../components/Paragraph/Paragraph';
import Container from '../components/Container/Container';
import Pricing from '../components/Pricing/Pricing';
import Footer from '../components/Footer/Footer';

const CennikPage = () => (
  <>
    <SubPageLayout>
      <Header />
      <Row>
        <Container>
          <Column nopadd xs="12">
            <H1 centred>Cennik</H1>
          </Column>
        </Container>
      </Row>
    </SubPageLayout>
    <Pricing />
    <Footer />
  </>
);

export default CennikPage;
