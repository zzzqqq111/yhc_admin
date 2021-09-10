const config = [
  {
    path: "/",
    component: BlankLayout, // 空白页布局
    childRoutes: [
      {
        path: "/",
        // exact: true, 
        component: BasicLayout, // 基本布局
        childRoutes: [
          {
            path: "/home",
            name: "home主页",
            icon: <HomeOutlined />,
            component: lazy(() => import("@/pages/Home")),
          },
          {
            path: "/project",
            name: "项目管理",
            icon: <HomeOutlined />,
            childRoutes: [
              {
                path: "/project/budget-summary",
                name: "预算汇总",
                component: lazy(() => import("@/pages/project/budgetSummary")),
              },
              {
                path: "/project/projectMember",
                name: "项目平台人员",
                component: lazy(() => import("@/pages/project/plateformMember")),
              },
              {
                path: "/project/budgetProject",
                name: "项目预算",
                component: lazy(() => import("@/pages/project/budgetProject")),
              },
            ],
          },
          {
            path: "/approval",
            name: "审批管理",
            icon: <HomeOutlined />,
            childRoutes: [
              {
                path: "/approval/list",
                name: "审批列表",
                exact: true,
                icon: <HomeOutlined />,
                component: lazy(() => import("@/pages/approval/List")),
              },
              {
                path: "/approval/processSetting",
                name: "审批流程配置",
                exact: true,
                icon: <HomeOutlined />,
                component: lazy(() => import("@/pages/approval/ProcessSetting")),
              },
            ],
          },
          {
            path: "/purchase",
            name: "订单管理",
            icon: <HomeOutlined />,
            childRoutes: [
              {
                path: "/purchase/list",
                name: "集采订单",
                exact: true,
                icon: <HomeOutlined />,
                component: lazy(() => import("@/pages/purchase/procurementList")),
              },
              {
                path: "/purchase/zlList",
                name: "租赁订单",
                exact: true,
                icon: <HomeOutlined />,
                component: lazy(() => import("@/pages/purchase/zlOrder")),
              },
            ],
          },
          {
            path: "/warehouse",
            name: "仓库管理",
            icon: <HomeOutlined />,
            childRoutes: [
              {
                path: "/warehouse/stock",
                name: "库存管理",
                icon: <HomeOutlined />,
                component: lazy(() => import("@/pages/warehouse/stock")),
              },
              {
                path: "/warehouse/willStock",
                name: "待入库",
                icon: <HomeOutlined />,
                component: lazy(() => import("@/pages/warehouse/willStock")),
              },
              {
                path: "/warehouse/weighingRecord",
                name: "过磅记录",
                icon: <HomeOutlined />,
                component: lazy(() => import("@/pages/warehouse/weighingRecord")),
              },
            ],
          },
          {
            path: "/lease",
            name: "租赁管理",
            icon: <HomeOutlined />,
            childRoutes: [
              {
                path: "/lease/rentingSpu",
                name: "在租商品",
                icon: <HomeOutlined />,
                component: lazy(() => import("@/pages/lease/rentingSpu")),
              },
              // {
              //   path: "/lease/offLease",
              //   name: "退租管理",
              //   icon: <HomeOutlined />,
              //   component: lazy(() => import("@/pages/lease/offLease")),
              // },
              {
                path: "/lease/willReceived",
                name: "待收货",
                icon: <HomeOutlined />,
                component: lazy(() => import("@/pages/lease/willReceived")),
              },
              {
                path: "/lease/maintenanceRecords",
                name: "维保记录",
                icon: <HomeOutlined />,
                component: lazy(() => import("@/pages/lease/maintenanceRecords")),
              }
            ],
          },
          {
            path: "/car",
            name: "车辆管理",
            icon: <HomeOutlined />,
            childRoutes: [
              {
                path: "/car/car-white",
                name: "车辆白名单",
                icon: <HomeOutlined />,
                component: lazy(() => import("@/pages/car/CarWhite")),
              },
              {
                path: "/car/card-record",
                name: "车辆进出记录管理",
                icon: <HomeOutlined />,
                component: lazy(() => import("@/pages/car/CarRecord")),
              }
            ]
          },
          {
            path: "/personnel",
            name: "人员管理",
            icon: <HomeOutlined />,
            childRoutes: [
              {
                path: "/personnel/person-overview",
                name: "人员总览",
                icon: <HomeOutlined />,
                component: lazy(() => import("@/pages/PersonManagerDemand/PersonOverview/PersonOverview")),
              },
              {
                path: "/personnel/team-group",
                name: "班组管理",
                icon: <HomeOutlined />,
                component: lazy(() => import("@/pages/PersonManagerDemand/TeamManager")),
              },
              {
                path: "/personnel/black-list",
                name: "黑名单",
                icon: <HomeOutlined />,
                component: lazy(() => import("@/pages/PersonManagerDemand/BlackList")),
              },
              {
                path: "/personnel/black-mark",
                name: "不良记录",
                icon: <HomeOutlined />,
                component: lazy(() => import("@/pages/PersonManagerDemand/BlackMark")),
              },
              {
                path: "/personnel/attendance-record",
                name: "考勤记录",
                icon: <HomeOutlined />,
                component: lazy(() => import('@/pages/PersonManagerDemand/AttendanceRecord'))
              }
            ],
          },
          {
            path: "/finance",
            name: "财务管理",
            icon: <HomeOutlined />,
            childRoutes: [
              {
                path: "/finance/settlement",
                name: "集采结算管理",
                icon: <HomeOutlined />,
                component: lazy(() => import("@/pages/finance/settlement")),
              },
              {
                path: "/finance/zlSettlement",
                name: "租赁结算管理",
                icon: <HomeOutlined />,
                component: lazy(() => import("@/pages/finance/zlSettlement")),
              },
            ],
          },
          {
            path: "/device",
            name: "设备管理",
            icon: <HomeOutlined />,
            component: lazy(() => import("@/pages/Home")),
          },
          {
            path: "/file",
            name: "文件管理",
            icon: <HomeOutlined />,
            component: lazy(() => import("@/pages/Home")),
          },
          {
            path: "/exception",
            name: "异常页",
            // exact: true,
            icon: <WarningOutlined />,
            childRoutes: [
              {
                path: "/exception/403",
                name: "403",
                icon: <FrownOutlined />,
                component: lazy(() => import("@/pages/Exception/403")),
              },
              {
                path: "/exception/404",
                name: "404",
                exact: true,
                icon: <FrownOutlined />,
                component: lazy(() => import("@/pages/Exception/404")),
              },
              {
                path: "/exception/500",
                name: "500",
                icon: <FrownOutlined />,
                component: null,
                // component: lazy(() => import("@/pages/Exception/500")),
              },
            ],
          },
          { path: "/", exact: true, redirect: "/home" },
          { path: "*", exact: true, redirect: "/exception/404" },
        ],
      },
    ],
  },
];

export default config;