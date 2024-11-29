import "./channel-information-view.scss";
// import { format } from "date-fns";

import { Card, Col, Row } from "antd";
import { useEffect, useMemo } from "react";
import { FaCheck, FaLink } from "react-icons/fa";
// import { PageTitle } from "~components/page-title";
import { useAppDispatch, useAppSelector } from "~store";
// import { formatCurrency } from "../../helpers/format-currency-helper";
// import { getOwnMerchantAction } from "~store/actions/merchant-action";

const ChannelInformation = () => {
  // const dispatch = useAppDispatch();
  // const userMerchant = useAppSelector((state) => state.merchant.info);
  // const isAuth = useAppSelector((state) => state.auth.isAuth);

  // useEffect(() => {
  //   if (isAuth) {
  //     dispatch(getOwnMerchantAction());
  //   }
  // }, [isAuth, dispatch]);

  // const dataMerchant = useMemo(() => {
  //   return [
  //     {
  //       purview: "agent",
  //       account: userMerchant?.merchant?.merchantId,
  //       amount: formatCurrency(
  //         userMerchant?.merchant?.merchantBalance?.balance || 0
  //       ),
  //       creationTime: userMerchant?.merchant
  //         ? format(
  //             new Date(userMerchant?.merchant?.createdAt),
  //             "yyyy-MM-dd HH:mm:ss"
  //           )
  //         : "",
  //       onlineDocument: "https://cmd345pay.com/documentation",
  //     },
  //   ];
  // }, [userMerchant]);

  // const dataChannel = useMemo(() => {
  //   return [
  //     {
  //       merchantAPINumber: 5571,
  //       apiURL: "https://api.cmd345pay.com",
  //       merchantID: userMerchant?.merchant?.merchantId,
  //       key: "****************",
  //       useState: "active",
  //       mode: "production",
  //     },
  //   ];
  // }, [userMerchant]);
  // const dataPayment = useMemo(() => {
  //   return [
  //     {
  //       paymentTypes: "bank online",
  //       paymentTypenumber: 1011,
  //       fee: "0",
  //       useState: "active",
  //       percentage: userMerchant?.merchant
  //         ? 100 - userMerchant?.merchant.merchantDepositRate
  //         : 0,
  //       minimum: "50,000",
  //       maximumtransaction: "300,000,000",
  //       maximumDay: "9,999,999,999",

  //       paymentTypes2: "Bank pay",
  //       paymentTypenumber2: 1012,
  //       fee2: "0",
  //       useState2: "Active",
  //       percentage2: userMerchant?.merchant
  //         ? 100 - userMerchant?.merchant.merchantDepositRate
  //         : 0,
  //       minimum2: "50,000",
  //       maximumtransaction2: "300,000,000",
  //       maximumDay2: "9,999,999,999",

  //       paymentTypes3: "QR scan",
  //       paymentTypenumber3: 1013,
  //       fee3: "0",
  //       useState3: "Active",
  //       percentage3: userMerchant?.merchant
  //         ? 100 - userMerchant?.merchant.merchantDepositRate
  //         : 0,
  //       minimum3: "50,000",
  //       maximumtransaction3: "300,000,000",
  //       maximumDay3: "9,999,999,999",
  //     },
  //   ];
  // }, [userMerchant]);

  // const dataPaymentReceive = useMemo(() => {
  //   return [
  //     {
  //       paymentTypes: "bank payout",
  //       paymentTypenumber: 816,
  //       fee: "0",
  //       useState: "active",
  //       percentage: userMerchant?.merchant
  //         ? 100 - userMerchant?.merchant.merchantWithdrawRate
  //         : 0,
  //       minimum: "100,000",
  //       maximumtransaction: "300,000,000",
  //       maximumDay: "9,999,999,999",
  //     },
  //   ];
  // }, [userMerchant]);
  return (
    <div className="channel-information-page">
      {/* <PageTitle title="Channel Information" />
      <div>
        <Card title={"Merchant Information"}>
          {dataMerchant.map((item: any, index) => (
            <div key={index}>
              <Row className="row-merchant">
                <Col span={6}>
                  <div className="col-child">
                    <h5>{item.purview}</h5>
                    <span>purview</span>
                  </div>
                </Col>
                <Col span={6}>
                  <div className="col-child">
                    <h5> {item.account}</h5>
                    <span>Account</span>
                  </div>
                </Col>
                <Col span={6}>
                  <div className="col-child">
                    <h5>{item.amount}</h5>
                    <span>Amount</span>
                  </div>
                </Col>
                <Col span={6}>
                  <div className="col-child">
                    <h5> {item.creationTime}</h5>
                    <span>Creation time</span>
                  </div>
                </Col>
              </Row>

              <Col span={24}>
                <div className="col-child  border-blue">
                  <h4 className="link-document">
                    {item.onlineDocument}
                    <FaLink className="link-icon" />
                  </h4>
                  <span>Online document</span>
                </div>
              </Col>
            </div>
          ))}
        </Card>
        <Card title={"Channel information"}>
          {dataChannel.map((item: any, index) => (
            <div key={index}>
              <Row>
                <Col span={8}>
                  <div className="col-child border-red">
                    <h5> {item.merchantAPINumber}</h5>
                    <span>Merchant API Number</span>
                  </div>
                </Col>
                <Col span={16}>
                  <div className="col-child border-blue">
                    <h5> {item.apiURL}</h5>
                    <span>API URL</span>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col span={8}>
                  <div className="col-child border-yellow">
                    <h5>{item.merchantID}</h5>
                    <span>Merchant ID</span>
                  </div>
                </Col>
                <Col span={16}>
                  <div className="col-child border-yellow">
                    <h5>{item.key}</h5>
                    <span>
                      Key--The API key is hidden 3 days after the account is
                      created.
                    </span>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col span={12}>
                  <div className="col-child border-green">
                    <h5
                      className="flex-align"
                      style={
                        item.useState === "active"
                          ? { color: "#28a745" }
                          : { color: "#fff" }
                      }
                    >
                      <FaCheck className="check-icon" />
                      {item.useState}
                    </h5>
                    <span>Use state</span>
                  </div>
                </Col>
                <Col span={12}>
                  <div className="col-child border-red">
                    <h5
                      className="flex-align"
                      style={
                        item.mode === "test"
                          ? { color: "#dc3545" }
                          : { color: "#fff" }
                      }
                    >
                      <FaCheck className="check-icon" />
                      {item.mode}
                    </h5>

                    <span>Mode</span>
                  </div>
                </Col>
              </Row>
            </div>
          ))}
        </Card>
        <Card
          title={"Payment order setting"}
          style={{ borderTop: "3px solid #3498db" }}
        >
          {dataPayment.map((item: any, index) => (
            <div key={index}>
              <Row>
                <Col span={12}>
                  <div className="col-child  border-blue">
                    <h5> {item.paymentTypes}</h5>
                    <span>Payment Types</span>
                  </div>
                </Col>
                <Col span={12}>
                  <div className="col-child  border-blue">
                    <h5> {item.paymentTypenumber}</h5>
                    <span>Payment type number</span>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col span={8}>
                  <div className="col-child  border-red">
                    <h5> {item.fee}</h5>
                    <span>fee</span>
                  </div>
                </Col>
                <Col span={8}>
                  <div className="col-child  border-red">
                    <h5>{item.percentage}</h5>
                    <span>percentage</span>
                  </div>
                </Col>
                <Col span={8}>
                  <div className="col-child border-green">
                    <h5
                      className="flex-align"
                      style={
                        item.useState === "active"
                          ? { color: "#28a745" }
                          : { color: "#fff" }
                      }
                    >
                      <FaCheck className="check-icon" />
                      {item.useState}
                    </h5>
                    <span>Use state</span>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col span={8}>
                  <div className="col-child border-yellow">
                    <h5>{item.minimum}</h5>
                    <span>Minimum amount per transaction</span>
                  </div>
                </Col>
                <Col span={8}>
                  <div className="col-child border-yellow">
                    <h5>{item.maximumtransaction}</h5>
                    <span>Maximum amount per transaction</span>
                  </div>
                </Col>
                <Col span={8}>
                  <div className="col-child border-yellow">
                    <h5>{item.maximumDay}</h5>
                    <span>Maximum amount of the day</span>
                  </div>
                </Col>
              </Row>
              <div className="line-blue"></div>
              <Row>
                <Col span={12}>
                  <div className="col-child  border-blue">
                    <h5>{item.paymentTypes2}</h5>
                    <span>Payment Types</span>
                  </div>
                </Col>
                <Col span={12}>
                  <div className="col-child  border-blue">
                    <h5>{item.paymentTypenumber2}</h5>
                    <span>Payment type number</span>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col span={8}>
                  <div className="col-child  border-red">
                    <h5>{item.fee2}</h5>
                    <span>fee</span>
                  </div>
                </Col>
                <Col span={8}>
                  <div className="col-child  border-red">
                    <h5>{item.percentage2}</h5>
                    <span>percentage</span>
                  </div>
                </Col>
                <Col span={8}>
                  <div className="col-child border-green">
                    <h5
                      className="flex-align"
                      style={
                        item.useState === "active"
                          ? { color: "#28a745" }
                          : { color: "#fff" }
                      }
                    >
                      <FaCheck className="check-icon" />
                      {item.useState}
                    </h5>
                    <span>Use state</span>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col span={8}>
                  <div className="col-child border-yellow">
                    <h5>{item.minimum2}</h5>
                    <span>Minimum amount per transaction</span>
                  </div>
                </Col>
                <Col span={8}>
                  <div className="col-child border-yellow">
                    <h5>{item.maximumtransaction2}</h5>
                    <span>Maximum amount per transaction</span>
                  </div>
                </Col>
                <Col span={8}>
                  <div className="col-child border-yellow">
                    <h5>{item.maximumDay2}</h5>
                    <span>Maximum amount of the day</span>
                  </div>
                </Col>
              </Row>
              <div className="line-blue"></div>

              <Row>
                <Col span={12}>
                  <div className="col-child  border-blue">
                    <h5>{item.paymentTypes3}</h5>
                    <span>Payment Types</span>
                  </div>
                </Col>
                <Col span={12}>
                  <div className="col-child  border-blue">
                    <h5>{item.paymentTypenumber3}</h5>
                    <span>Payment type number</span>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col span={8}>
                  <div className="col-child  border-red">
                    <h5>{item.fee3}</h5>
                    <span>fee</span>
                  </div>
                </Col>
                <Col span={8}>
                  <div className="col-child  border-red">
                    <h5>{item.percentage3}</h5>
                    <span>percentage</span>
                  </div>
                </Col>
                <Col span={8}>
                  <div className="col-child border-green">
                    <h5
                      className="flex-align"
                      style={
                        item.useState === "active"
                          ? { color: "#28a745" }
                          : { color: "#fff" }
                      }
                    >
                      <FaCheck className="check-icon" />
                      {item.useState}
                    </h5>
                    <span>Use state</span>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col span={8}>
                  <div className="col-child border-yellow">
                    <h5>{item.minimum3}</h5>
                    <span>Minimum amount per transaction</span>
                  </div>
                </Col>
                <Col span={8}>
                  <div className="col-child border-yellow">
                    <h5>{item.maximumtransaction3}</h5>
                    <span>Maximum amount per transaction</span>
                  </div>
                </Col>
                <Col span={8}>
                  <div className="col-child border-yellow">
                    <h5>{item.maximumDay3}</h5>
                    <span>Maximum amount of the day</span>
                  </div>
                </Col>
              </Row>
            </div>
          ))}
        </Card>

        <Card title={"Receive payment setting"}>
          {dataPaymentReceive.map((item: any, index) => (
            <div key={index}>
              <Row>
                <Col span={12}>
                  <div className="col-child  border-blue">
                    <h5>{item.paymentTypes}</h5>
                    <span>Payment Types</span>
                  </div>
                </Col>
                <Col span={12}>
                  <div className="col-child  border-blue">
                    <h5>{item.paymentTypenumber}</h5>
                    <span>Payment type number</span>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col span={8}>
                  <div className="col-child  border-red">
                    <h5>{item.fee}</h5>
                    <span>fee</span>
                  </div>
                </Col>
                <Col span={8}>
                  <div className="col-child  border-red">
                    <h5>{item.percentage}</h5>
                    <span>percentage</span>
                  </div>
                </Col>
                <Col span={8}>
                  <div className="col-child border-green">
                    <h5
                      className="flex-align"
                      style={
                        item.useState === "active"
                          ? { color: "#8a745" }
                          : { color: "#fff" }
                      }
                    >
                      <FaCheck className="check-icon" />
                      {item.useState}
                    </h5>
                    <span>Use state</span>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col span={8}>
                  <div className="col-child border-yellow">
                    <h5>{item.minimum}</h5>
                    <span>Minimum amount per transaction</span>
                  </div>
                </Col>
                <Col span={8}>
                  <div className="col-child border-yellow">
                    <h5>{item.maximumtransaction}</h5>
                    <span>Maximum amount per transaction</span>
                  </div>
                </Col>
                <Col span={8}>
                  <div className="col-child border-yellow">
                    <h5>{item.maximumDay}</h5>
                    <span>Maximum amount of the day</span>
                  </div>
                </Col>
              </Row>
              <div className="line-yellow"></div>
            </div>
          ))}
        </Card>
      </div> */}
    </div>
  );
};

export default ChannelInformation;
