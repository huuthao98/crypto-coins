import { Menu, MenuProps } from 'antd'
import { useMemo, useState } from 'react'
import { FaCircle, FaInfo, FaScroll, FaTools, FaUser, FaUserFriends, FaHeart } from 'react-icons/fa'
import { GoShieldCheck } from "react-icons/go";
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '~store'

import './sidebar.scss'
const defaultIcon = <FaCircle />

type MenuItem = Required<MenuProps>['items'][number]
function getItem(
  label: React.ReactNode,
  key: React.Key,
  options?: {
    icon?: React.ReactNode
    children?: MenuItem[]
    type?: 'group'
    onClick?: Function
  }
): MenuItem {
  const { icon, children, type, onClick } = options ?? {}
  return {
    key,
    label,
    icon,
    children,
    type,
    onClick
  } as MenuItem
}
function Sidebar() {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const collapsed = useAppSelector((state) => state.auth.isSidebar)
  const [selectedKey, setSelectedKey] = useState('/')
  const authState = useSelector((state: any) => state.auth)

  const onMenuItemClick = (info: any) => {
    navigate(info.key)
  }

  const items: MenuItem[] = useMemo(() => {
    let menuItems = [
      getItem(t('labels.reportManagement'), 'reportManagement', {
        icon: <FaScroll />,
        children: [
          getItem(t('labels.summaryReport'), '/reports/summary', {
            icon: defaultIcon
          }),
          getItem(t('labels.receivePaymentReport'), '/reports/pay', {
            icon: defaultIcon
          }),
          getItem(t('labels.paymentReport'), '/reports/apply', {
            icon: defaultIcon
          }),
          getItem(t('labels.manualReport'), '/reports/manual', {
            icon: defaultIcon
          }),
          getItem(t('labels.quotaModifierReport'), '/reports/quota', {
            icon: defaultIcon
          })
        ]
      }),
      // getItem(t("labels.chartManagement"), "chartManagement", {
      //   icon: <FaChartLine />,
      //   children: [
      //     getItem(t("labels.summaryChart"), "/charts/summary", {
      //       icon: defaultIcon,
      //     }),
      //   ],
      // }),

      getItem(t('labels.systemManagement'), 'systemManagement', {
        icon: <FaTools />,
        children: [
          getItem(t('labels.chanelInformation'), '/channel/information', {
            icon: defaultIcon
          })
        ]
      }),

      getItem(t('labels.record'), 'record', {
        icon: <FaInfo />,
        children: [
          getItem(t('labels.loginRecord'), '/records/login', {
            icon: defaultIcon
          })
          // getItem(t("labels.report"), "InterfaceRecord", {
          //   icon: defaultIcon,
          // }),
          // getItem(t("labels.callbackRecord"), "OrderCallbackRecord", {
          //   icon: defaultIcon,
          // }),
        ]
      })
    ]

    const withdrawChild = [
      getItem(t('labels.accountSetting'), 'account/setting', {
        icon: <FaUser />
      }),
      getItem(t('labels.wishlist'), 'account/wishlist', {
        icon: <FaHeart />
      }),
      getItem(t('labels.security'), 'account/security', {
        icon: <GoShieldCheck />
      })
    ]

    // if (["ADMIN", "MERCHANT"].includes(authState.user?.role)) {
    //   withdrawChild.push(
    //     getItem(t("labels.withdrawal"), "/merchant/management/withdraw", {
    //       icon: defaultIcon,
    //     })
    //   );
    // }

    menuItems = [
      getItem(t('Thor Financial'), '/', {
        icon: <img src='/logo-thor2.png' alt='LOGO WEBSITE' className='sidebar-logo-img' />,
      }),
      getItem(t('labels.managementAccounting'), 'managementAccounting', {
        icon: <FaUserFriends />,
        children: withdrawChild
      }),
      ...menuItems
    ]

    // if (authState.user?.role === "ADMIN") {
    //   menuItems = [
    //     getItem("Admin", "admin", {
    //       icon: <FaUserFriends />,
    //       children: [
    //         {
    //           label: "Account create",
    //           key: "admin/account/create",
    //           icon: <FaUser />,
    //         },
    //         {
    //           label: "Account list",
    //           key: "admin/account/list",
    //           icon: <FaUser />,
    //         },
    //         {
    //           label: "Merchant create",
    //           key: "admin/account/merchant",
    //           icon: <FaUser />,
    //         },
    //         {
    //           label: "Merchant list",
    //           key: "admin/account/merchant-list",
    //           icon: <FaUser />,
    //         },
    //       ],
    //     }),
    //     ...menuItems,
    //   ];
    // }

    return menuItems
  }, [authState, t])

  return (
    <div className='sidebar-wrapper'>
      <div className='sidebar-wrapper-inner'>
        {/* <div className='sidebar-logo'>
          <img src='/logo-thor.png' alt='LOGO WEBSITE' className='sidebar-logo-img' />
          <h1 className='sidebar-logo-name'>Thor Financial</h1>
        </div> */}
        <Menu
          className='sidebar-menu'
          mode='inline'
          selectedKeys={[selectedKey]}
          defaultSelectedKeys={[selectedKey]}
          defaultOpenKeys={['managementAccounting', 'reportManagement']}
          items={items}
          onClick={onMenuItemClick}
          inlineCollapsed={collapsed}
        />
      </div>
    </div>
  )
}

export default Sidebar
