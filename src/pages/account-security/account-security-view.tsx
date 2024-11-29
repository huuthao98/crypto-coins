import toast from "react-hot-toast";
import "./account-security.scss";

import { Button, Form, FormProps, Input } from "antd";
import { useSelector } from "react-redux";
import { authApis } from "~apis/auth.api";
import { useEffect, useState } from "react";
// import { userApis } from "~apis/user.api";
import { useTranslation } from "react-i18next";
import { PageTitle } from "~components/page-title";

type FieldType = {
  old?: string;
  new?: string;
  retype?: string;
};

const AccountSecurity = () => {
  const { t } = useTranslation();
  const user = useSelector((state: any) => state.auth.user);

  const [code, setCode] = useState<string>("");

  const get2FAcode = async () => {
    // const code = await authApis.generate2FA();
    localStorage.setItem("2fa", code);
    setCode(code);
  };

  const onFinishLogin: FormProps<FieldType>["onFinish"] = async (values) => {
    if (values.new !== values.retype) {
      alert("Password not match");
      return;
    }
    // await userApis.updatePassword({
    //   password: values.new,
    // });
  };

  const onFinishFailedLogin: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    toast.custom(
      (t) => (
        <div
          style={{
            opacity: t.visible ? 1 : 0,
            transition: "opacity 100ms ease-in-out",
          }}
          className="toast-error"
        >
          <div className="header">
            <b>ERROR</b>
            <button onClick={() => toast.dismiss(t.id)}>×</button>
          </div>
          <div className="body">ERROR</div>
        </div>
      ),
      {
        position: "bottom-left",
        // duration: ,
      }
    );
  };

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    if (values.new !== values.retype) {
      alert("Password not match");
      return;
    }
    // await userApis.updatePassword({
    //   withdrawPassword: values.new,
    // });
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log(errorInfo);
    toast.custom(
      (t) => (
        <div
          style={{
            opacity: t.visible ? 1 : 0,
            transition: "opacity 100ms ease-in-out",
          }}
          className="toast-error-login-page"
        >
          <div className="header">
            <b>ERROR</b>
            <button onClick={() => toast.dismiss(t.id)}>×</button>
          </div>
          <div className="body">ERROR</div>
        </div>
      ),
      {
        position: "bottom-left",
        // duration: ,
      }
    );
  };

  useEffect(() => {
    const code = localStorage.getItem("2fa");
    if (code) {
      setCode(code);
    }

    if (!code && user && !user?.isEnable2FA) {
      get2FAcode();
    }

    if (user?.isEnable2FA) {
      localStorage.removeItem("2fa");
    }
  }, [user]);

  return (
    <div className="account-information-page">
      
      <PageTitle title={t('managementAccounting.accountSecurity.accountSecurity')} />

      {code && (
        <div className="fa-code">
          <img src={code} alt="2fa code" />
        </div>
      )}
      <div className="form-nav">
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinishLogin}
          onFinishFailed={onFinishFailedLogin}
          autoComplete="off"
          className="form-change-login"
        >
          <h2 className="form-header">
            {t("managementAccounting.accountSecurity.changeLoginPassword")}
          </h2>
          <div className="form-body">
            <div className="form-item">
              <h3>{t("managementAccounting.accountSecurity.oldPassword")}</h3>
              <Form.Item<FieldType>
                name="old"
                rules={[
                  { required: true, message: "Please input your old account!" },
                ]}
              >
                <Input.Password className="form-input" />
              </Form.Item>
            </div>

            <div className="form-item">
              <h3>{t("managementAccounting.accountSecurity.newPassword")}</h3>
              <Form.Item<FieldType>
                name="new"
                rules={[
                  { required: true, message: "Please input your New account!" },
                ]}
              >
                <Input.Password className="form-input" />
              </Form.Item>
            </div>

            <div className="form-item">
              <h3>{t("managementAccounting.accountSecurity.retypeNewPassword")}</h3>

              <Form.Item<FieldType>
                name="retype"
                rules={[
                  {
                    required: true,
                    message: "Please input your Retype New account!",
                  },
                ]}
              >
                <Input.Password className="form-input" />
              </Form.Item>
            </div>
          </div>
          <Form.Item className="form-footer" style={{ margin: 0 }}>
            <Button htmlType="submit" className="submit-btn">
              {t("managementAccounting.accountSecurity.send")}
            </Button>
          </Form.Item>
        </Form>
        <Form
          name="basic1"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className="form-change-withdraw"
        >
          <h2 className="form-header">
            {t("managementAccounting.accountSecurity.changeWithdrawPassword")}
          </h2>
          <div className="form-body">
            <div className="form-item">
              <h3> {t("managementAccounting.accountSecurity.oldWithdrawPassword")}</h3>
              <Form.Item<FieldType>
                name="old"
                rules={[
                  {
                    required: true,
                    message: "Please input your Retype New account!",
                  },
                ]}
              >
                <Input.Password className="form-input" />
              </Form.Item>
            </div>

            <div className="form-item">
              <h3> {t("managementAccounting.accountSecurity.newWithdrawPassword")}</h3>

              <Form.Item<FieldType>
                name="new"
                rules={[
                  {
                    required: true,
                    message: "Please input your Retype New account!",
                  },
                ]}
              >
                <Input.Password className="form-input" />
              </Form.Item>
            </div>

            <div className="form-item">
              <h3>
                {t("managementAccounting.accountSecurity.retypeNewWithdrawPassword")}
              </h3>

              <Form.Item<FieldType>
                name="retype"
                rules={[
                  {
                    required: true,
                    message: "Please input your Retype New account!",
                  },
                ]}
              >
                <Input.Password className="form-input" />
              </Form.Item>
            </div>
          </div>
          <Form.Item className="form-footer" style={{ margin: 0 }}>
            <Button htmlType="submit" className="submit-btn">
              {t("managementAccounting.accountSecurity.send")}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default AccountSecurity;
