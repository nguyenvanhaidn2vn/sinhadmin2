export const navigations0 = [
    {
        name: 'Dashboard',
        path: '/dashboard/default',
        icon: 'dashboard',
    },
    {
        label: 'PAGES',
        type: 'label',
    },
    {
        name: 'Session/Auth',
        icon: 'security',
        children: [
            {
                name: 'Sign in',
                iconText: 'SI',
                path: '/session/signin',
            },
            {
                name: 'Sign up',
                iconText: 'SU',
                path: '/session/signup',
            },
            {
                name: 'Forgot Password',
                iconText: 'FP',
                path: '/session/forgot-password',
            },
            {
                name: 'Error',
                iconText: '404',
                path: '/session/404',
            },
        ],
    },
    {
        label: 'Components',
        type: 'label',
    },
    {
        name: 'Components',
        icon: 'favorite',
        badge: { value: '30+', color: 'secondary' },
        children: [
            {
                name: 'Auto Complete',
                path: '/material/autocomplete',
                iconText: 'A',
            },
            {
                name: 'Buttons',
                path: '/material/buttons',
                iconText: 'B',
            },
            {
                name: 'Checkbox',
                path: '/material/checkbox',
                iconText: 'C',
            },
            {
                name: 'Dialog',
                path: '/material/dialog',
                iconText: 'D',
            },
            {
                name: 'Expansion Panel',
                path: '/material/expansion-panel',
                iconText: 'E',
            },
            {
                name: 'Form',
                path: '/material/form',
                iconText: 'F',
            },
            {
                name: 'Icons',
                path: '/material/icons',
                iconText: 'I',
            },
            {
                name: 'Menu',
                path: '/material/menu',
                iconText: 'M',
            },
            {
                name: 'Progress',
                path: '/material/progress',
                iconText: 'P',
            },
            {
                name: 'Radio',
                path: '/material/radio',
                iconText: 'R',
            },
            {
                name: 'Switch',
                path: '/material/switch',
                iconText: 'S',
            },
            {
                name: 'Slider',
                path: '/material/slider',
                iconText: 'S',
            },
            {
                name: 'Snackbar',
                path: '/material/snackbar',
                iconText: 'S',
            },
            {
                name: 'Table',
                path: '/material/table',
                iconText: 'T',
            },
        ],
    },
    {
        name: 'Charts',
        icon: 'trending_up',

        children: [
            {
                name: 'Echarts',
                path: '/charts/echarts',
                iconText: 'E',
            },
        ],
    },
    {
        name: 'Documentation',
        icon: 'launch',
        type: 'extLink',
        path: 'http://demos.ui-lib.com/matx-react-doc/',
    },
]
export const navigations = [
    {
        name: 'Sản phẩm',
        icon: 'security',
        children: [
            {
                name: 'Tất cả sản phẩm',
                iconText: 'SI',
                path: '/dashboard/default',
            },
            {
                name: 'Thêm mới sản phẩm',
                iconText: 'SU',
                path: '/material/autocomplete',
            },
            {
                name: 'Chỉnh sửa sản phẩm',
                iconText: 'FP',
                path: '/material/buttons',
            },
            {
                name: 'Danh mục',
                iconText: '404',
                path: '/material/checkbox',
            },
        ],
    },
    {
        name: 'Đơn đặt hàng',
        icon: 'store',
        children: [
            {
                name: 'Chưa đặt',
                path: '/material/autocomplete',
                iconText: 'A',
            },
            {
                name: 'Đang Đặt',
                path: '/material/buttons',
                iconText: 'B',
            },
            {
                name: 'Đã đặt',
                path: '/material/checkbox',
                iconText: 'C',
            },
        ],
    },
    {
        name: 'Tin tức',
        icon: 'trending_up',
        children: [
            {
                name: 'Thêm tin tức mới',
                path: '/material/autocomplete',
                iconText: 'A',
            },
            {
                name: 'Cập nhật tin tức',
                path: '/material/buttons',
                iconText: 'B',
            },
            ],
    },
    {
        name: 'Phản hồi',
        icon: 'favorite',

        children: [
            {
                name: 'Tốt',
                path: '/charts/echarts',
                iconText: 'E',
            },
            {
                name: 'Xấu',
                path: '/material/checkbox',
                iconText: 'C',
            },
        ],
    },
]
