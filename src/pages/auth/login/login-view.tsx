import { Button, Form, type FormProps, Image, Input, Select } from "antd";
import toast from "react-hot-toast";
import { FaGlobe, FaKey, FaLock, FaUser } from "react-icons/fa";

import { useNavigate, useSearchParams } from "react-router-dom";
import { useAppDispatch } from "~store";
import { loginAction } from "~store/actions/auth-action";
import "./login-view.scss";
import { useState } from "react";
import { useTranslation } from "react-i18next";

type FieldType = {
  username?: string;
  password?: string;
  code?: number;
  language?: string;
};

const LoginView = () => {
  const { t, i18n } = useTranslation();
  const [queryParams] = useSearchParams();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onLangChange = (value: string) => {
    i18n.changeLanguage(value);
  };

  const onFinish: FormProps<FieldType>["onFinish"] = async (values: any) => {
    try {
      setLoading(true);
      await dispatch(loginAction(values)).unwrap();
      setLoading(false);
      navigate(queryParams.get("from") || "");
    } catch (error: any) {
      console.log({ error });

      setLoading(false);

      toast.custom(
        (to) => (
          <div
            style={{
              opacity: to.visible ? 1 : 0,
              transition: "opacity 100ms ease-in-out",
            }}
            className="toast-error-login-page"
          >
            <div className="toast-error-login-page__header">
              <b>{t("auth.loginFailedTitle")}</b>
              <button onClick={() => toast.dismiss(to.id)}>×</button>
            </div>
            <div className="toast-error-login-page__body">
              {t("auth.loginFailedContent")}
            </div>
          </div>
        ),
        {
          position: "bottom-left",
        }
      );
    }
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log(errorInfo);

    toast.custom(
      (to) => (
        <div
          style={{
            opacity: to.visible ? 1 : 0,
            transition: "opacity 100ms ease-in-out",
          }}
          className="toast-error-login-page"
        >
          <div className="toast-error-login-page__header">
            <b>{t("auth.loginFailedTitle")}</b>
            <button onClick={() => toast.dismiss(to.id)}>×</button>
          </div>
          <div className="toast-error-login-page__body">
            {t("auth.loginFailedContentValidation")}
          </div>
        </div>
      ),
      {
        position: "bottom-left",
        // duration: ,
      }
    );
  };

  return (
    <div id="login-page">
      <div className="auth-box">
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <div className="form-header">
            <h3>Thor Financial</h3>
          </div>
          <div className="form-logo">
            <Image className="logo-img" src="/logo-thor.png" preview={false} />
          </div>
          <div className="form-footer">
            <div className="form-item">
              <Form.Item<FieldType>
                name="username"
                rules={[
                  { required: true, message: "Please input your account!" },
                ]}
              >
                <Input placeholder="Account" className="form-input" />
              </Form.Item>
              <div className="form-input-right">
                <FaUser className="form-input-icon" />
              </div>
            </div>

            <div className="form-item">
              <Form.Item<FieldType>
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password placeholder="Password" className="form-input" />
              </Form.Item>
              <div className="form-input-right">
                <FaKey className="form-input-icon" />
              </div>
            </div>


            <div className="form-item">
              <Form.Item>
                <Select defaultValue={"en"} onChange={onLangChange}>
                  <Select.Option value="vi">Tiếng việt</Select.Option>
                  <Select.Option value="en">English</Select.Option>
                  <Select.Option value="cn">中文</Select.Option>
                </Select>
              </Form.Item>
              <div className="form-input-right">
                <FaGlobe className="form-input-icon" />
              </div>
            </div>
            <Form.Item style={{ margin: 0 }}>
              <Button
                loading={loading}
                disabled={loading}
                htmlType="submit"
                className="submit-btn"
              >
                Login
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default LoginView;
