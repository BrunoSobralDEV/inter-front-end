import {
  DashboardBackground,
  BodyContainer,
  InlineTitle,
  InlineContainer,
} from "./styles";

import Header from "../../components/Header";
import Card from "../../components/Card";

const Dashboard = () => {
  const wallet = 5000;
  return (
    <DashboardBackground>
      <Header />
      <BodyContainer>
        <div>
          <Card noShadow width="90%">
            <InlineTitle>
              <h2 className="h2">Saldo Atual</h2>
            </InlineTitle>
              <h3 className="wallet">
                {wallet.toLocaleString('pt-BR', {style: 'currency', currency:"BRL"})}
              </h3>
            
          </Card>
        </div>
        <div>

        </div>
      </BodyContainer>
    </DashboardBackground>
  );
};

export default Dashboard;
