import AccountSectting from "src/pages/account-setting/account-setting-view";

export const en = {
  auth: {
    loginFailedContent: 'Login failed',
    loginFailedTitle: 'ERROR',
    loginSuccess: 'Login success',
    loginFailedContentValidation: 'Please enter the correct information',
    loginBtn: 'Login'
  },
  labels: {
    logout: 'Logout',
    managementAccounting: 'Management accounting',
    accountSetting: 'Account Setting',
    withdrawal: 'Withdrawal',
    reportManagement: 'Report management',
    summaryReport: 'Summary report',
    receivePaymentReport: 'Receive payment report',
    paymentReport: 'Payment report',
    manualReport: 'Manually add points report',
    quotaModifierReport: 'Quota modifier report',
    chartManagement: 'Chart management',
    summaryChart: 'Summary chart',
    systemManagement: 'System management',
    chanelInformation: 'Channel information',
    record: 'Record',
    loginRecord: 'Login records',
    report: 'Interface records',
    callbackRecord: 'Order callback records',
    wishlist: 'Wishlist',
    security: 'Security'
  },
  headerWeb: {
    dashboard: 'Home',
    accountInformation: 'Account information',
    language: 'Language',
    amount: 'Amount',
    income: "Today's income"
  },
  headerPage: {
    homePage: 'Dashboard'
  },
  loginRecord: {
    tableLabels: {
      recordNumber: 'record number',
      memberId: 'member id',
      account: 'account',
      ip: 'IP',
      country: 'country',
      city: 'city',
      area: 'area',
      telecommunications: 'telecommunications',
      token: 'Token',
      status: 'status',
      createdAt: 'Creation time'
    }
  },
  report: {
    tableLabels: {
      transactionid: 'Transaction Number',
      orderid: 'Order ID',
      memo: 'Memo',
      paymentTypes: 'Payment Types',
      account: 'Account',
      existingAmount: 'Existing amount',
      actualAmount: 'Actual amount',
      status: 'Status',
      creationTime: 'Creation time',
      modifiedTime: 'Modified time',
      bank: 'Bank',
      bankAccount: 'Bank account'
    },
    quota: {
      type: 'Type',
      amount: 'Amount',
      balanceBefore: 'Balance before',
      balanceAfter: 'Balance after',
      createdAt: 'Created At',
      transactionId: 'Transaction ID',
      orderId: 'Order ID'
    },
    quickSearch: 'Quick search',
    total: 'Total',
    numberOfSuccessOrders: 'Number of successful orders',
    numberOfFailedOrders: 'Number of failed orders',
    numberOfOrders: 'Number of orders',
    numberOfSuccessPayInOrders: 'Number of pay in successful orders',
    numberOfFailedPayInOrders: 'Number of failed pay in orders',
    amountOfSuccessPayInOrders: 'Amount of successful pay in order',
    numberOfSuccessPayOutOrders: 'Number of pay out successful orders',
    numberOfFailedPayOutOrders: 'Number of failed pay out orders',
    amountOfSuccessPayOutOrders: 'Amount of successful pay out order'
  },
  managementAccounting: {
    withdrawal: {
      applyForWithdrawal: 'Apply for withdrawal',
      bank: 'Bank',
      amount: 'Existing amount',
      accountName: 'Account name',
      account: 'Account',
      withdrawPassword: 'Withdraw password',
      send: 'Send',
      modalTitle: 'Withdrawal Confirmation',
      modalContent: 'Are you sure you want to send the withdrawal request?',
      modalConfirm: 'Confirm',
      modalCancel: 'Cancel',
      success: 'Success',
      error: 'Error'
    },
    accountInfo: {
      accountInformation: 'Account Information'
    },
    accountSecurity: {
      accountSecurity: 'Account Security',
      changeLoginPassword: 'Change Login password',
      changeWithdrawPassword: 'Change Withdraw password',
      oldPassword: 'Old password',
      newPassword: 'New password',
      retypeNewPassword: 'Retype New password',
      oldWithdrawPassword: 'Old withdraw password',
      newWithdrawPassword: 'New withdraw password',
      retypeNewWithdrawPassword: 'Retype New withdraw password',
      send: 'Send'
    },
    accountSetting: {
      title: 'Account Setting'
    }
  },
  admin: {
    userMngt: {
      id: 'id',
      username: 'Username',
      createdAt: 'Created at',
      updatedAt: 'Updated at',
      firstName: 'First name',
      lastName: 'Last name',
      role: 'Role',
      email: 'Email',
      avatar: 'Avatar',
      withdrawPassword: 'withdraw password',
      twoFactorAuthenticationCode: '2fa code',
      isEnable2FA: 'Đã xác thực GA',
      userListTittle: 'User list',
      selectUserType: 'Select user type',
      userType: {
        user: 'User',
        admin: 'Admin',
        merchant: 'Merchant',
        all: 'All'
      },
      errors: {
        requiredFirstName: 'Please enter first name',
        requiredLastName: 'Please enter last name',
        requiredEmail: 'Please enter email',
        requiredUsername: 'Please enter username',
        requiredPassword: 'Please enter password',
        requiredPhone: 'Please enter phone',
        invalidEmail: 'Invalid email',
        invalidPhone: 'Invalid phone'
      },
      createUser: {
        firstName: 'First name',
        lastName: 'Last name',
        username: 'Username',
        email: 'Email',
        password: 'Password',
        phone: 'Phone',
        createUser: 'Create User'
      }
    }
  }
}
