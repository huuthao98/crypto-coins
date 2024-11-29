import AccountSecurity from "src/pages/account-setting/account-setting-view";

export const vi = {
  auth: {
    loginFailedContent: "Đăng nhập thất bại",
    loginFailedContentValidation: "Vui lòng nhập thông tin chính xác",
    loginFailedTitle: "LỖI",
    loginBtn: "Đăng nhập",
  },
  labels: {
    logout: 'Đăng xuất',
    managementAccounting: "Quản lý tài khoản",
    accountSetting: 'Cài đăt tài khoản',
    withdrawal: "Rút tiền",
    reportManagement: "Quản lý báo cáo",
    summaryReport: "Báo cáo tổng quan",
    receivePaymentReport: "Báo cáo nạp tiền",
    paymentReport: "Báo cáo rút tiền",
    manualReport: "Báo cáo rút thủ công",
    quotaModifierReport: "Báo cáo sửa đổi hạn ngạch",
    chartManagement: "Quản lý biểu đồ",
    summaryChart: "Biểu đồ tổng quan",
    systemManagement: "Quản lý hệ thống",
    chanelInformation: "Trang thông tin",
    record: "Lịch sử",
    loginRecord: "Lịch sử đăng nhập",
    report: "Báo cáo",
    callbackRecord: "Lịch sử gọi lại",
    wishlist:"Danh sách yêu thích",
    security:"Bảo mật",

  },
  headerWeb: {
    dashboard: "Trang chủ",
    accountInformation: "Thông tin tài khoản",
    language:'Ngôn ngữ',
    amount: "Số tiền",
    income: "Thu nhập hôm nay",
  },
  headerPage:{
    homePage: "Tổng quan"
  },
  loginRecord: {
    tableLabels: {
      recordNumber: "record number",
      memberId: "member id",
      account: "account",
      ip: "IP",
      country: "country",
      city: "city",
      area: "area",
      telecommunications: "telecommunications",
      token: "Token",
      status: "status",
      createdAt: "Creation time",
    },
  },
  report: {
    tableLabels: {
      transactionid: "Transaction number",
      orderid: "Mã order gửi",
      memo: "Ghi chú",
      paymentTypes: "Loại",
      account: "Số tài khoản",
      existingAmount: "Số tiền",
      actualAmount: "Số tiền thực tế",
      status: "Trạng thái",
      creationTime: "Thời gian tạo",
      modifiedTime: "Thời gian cập nhật",
      bank: "Ngân hàng",
      bankAccount: "Số tài khoản",
    },
    quota: {
      type: "Loại",
      amount: "Số tiền",
      balanceBefore: "Tổng trước",
      balanceAfter: "Tổng sau",
      createdAt: "Thời gian",
      transactionId: "Lệnh ID",
      orderId: "Đối soát ID",
    },
    quickSearch: "Quick search",
    total: "Total",
    numberOfSuccessOrders: "Tống số đơn thành công",
    numberOfFailedOrders: "Tổng số đơn thất bại",
    numberOfOrders: "Tổng số đơn",
    numberOfSuccessPayInOrders: "Tổng số đơn nạp thành công",
    numberOfFailedPayInOrders: "Number of failed pay in orders",
    amountOfSuccessPayInOrders: "Amount of successful pay in order",
    numberOfSuccessPayOutOrders: "Number of pay out successful orders",
    numberOfFailedPayOutOrders: "Number of failed pay out orders",
    amountOfSuccessPayOutOrders: "Amount of successful pay out order",
  },
  managementAccounting: {
    withdrawal: {
      applyForWithdrawal: "Tạo lệnh rút tiền",
      bank: "Ngân hàng",
      amount: "Số tiền",
      accountName: "Tên chủ tài khoản",
      account: "Số tài khoản",
      withdrawPassword: "Mật khẩu rút tiền",
      send: "Tạo lệnh",
      modalTitle: "Xác nhận lệch rút",
      modalContent:
        "Bạn đang thực hiện lệnh rút hãy kiểm tra thông tin chính xác",
      modalConfirm: "Xác nhận",
      modalCancel: "Hủy bỏ",
      success: "Thành công",
      error: "Thất bại",
    },
    accountInfo: {
      title: "Thông tin tài khoản",
   
    },
    accountSecurity: {
      accountInformation: "Bảo mật tài khoản",
      changeLoginPassword: "Đổi mật khẩu đăng nhập",
      changeWithdrawPassword: "Đổi mật khẩu rút tiền",
      oldPassword: "Mật khẩu cũ",
      newPassword: "Mật khẩu mới",
      retypeNewPassword: "Nhập lại mật khẩu mới",
      oldWithdrawPassword: "Mật khẩu rút tiền cũ",
      newWithdrawPassword: "Mật khẩu rút tiền mới",
      retypeNewWithdrawPassword: "Nhập lại mật khẩu rút tiền mới",
      send: "Gửi",
    },
    
    accountSetting: {
      title: 'Cài đăt tài khoản'
    }
  },
  cardCoin:{
    name:"Tên",

  }
};
