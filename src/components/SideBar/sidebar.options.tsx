import { FaCube, FaShoppingBag, FaCodeBranch, FaChartLine, FaStar, FaCartPlus, FaFolderOpen, FaTrademark, FaSlidersH, FaHistory, FaStream, FaReceipt, FaShippingFast, FaShoppingCart, FaShoppingBasket, FaAmazon, FaEbay, FaShopify } from 'react-icons/fa'
import { ReactElement } from 'react';
import { FcCustomerSupport } from 'react-icons/fc';

export interface SidebarOptions {
  title?: string
  optionsEnabled?: boolean
  tooltip?: string
  icon?: ReactElement
  path?: string
  topics?: OptionTopics[] | undefined
}

interface OptionTopics {
  title: string
  tooltip: string
  path?: string,
  icon: ReactElement
}

export const sidebarOptions: SidebarOptions[] = [
  {
    title: 'Dashboard',
    optionsEnabled: false,
    tooltip: 'Admin Dashboard',
    icon: (<FaChartLine size='20'/>),
    path: '/dashboard',
    topics: undefined
  },
  {
    title: 'Products',
    optionsEnabled: true,
    tooltip: 'Product Related Menus',
    icon: (<FaCube size='20'/>),
    path: '/products',
    topics: [
      {
        title: 'My Products',
        tooltip: 'Your registered products',
        path: '/list',
        icon: (<FaStar size='16'/>)
      },
      {
        title: 'Create Product',
        tooltip: 'Add a new product',
        path: '/create',
        icon: (<FaCartPlus size='16'/>)
      },
      {
        title: 'Categories',
        tooltip: 'Your registered categoreis',
        path: '/categories',
        icon: (<FaFolderOpen size='16'/>)
      },
      {
        title: 'Brands',
        tooltip: 'Your registered brands',
        path: '/brands',
        icon: (<FaTrademark size='16'/>)
      },
      {
        title: 'Attributes',
        tooltip: 'Your registered attributes',
        path: '/attributes',
        icon: (<FaSlidersH size='16'/>)
      },
    ]
  },
  {
    title: 'Orders',
    optionsEnabled: true,
    tooltip: 'Orders Related Menu',
    path: '/orders',
    icon: (<FaShoppingBag size='20'/>),
    topics: [
      {
        title: 'History',
        tooltip: 'Your orders history',
        path: '/list',
        icon: (<FaHistory size='16'/>)
      },
      {
        title: 'Recent orders',
        tooltip: 'Your orders for the day',
        path: '/recent',
        icon: (<FaShoppingBasket size='16'/>)
      },
      {
        title: 'Invoicing',
        tooltip: 'Orders with peding invoicing action',
        path: '/invoice-pending',
        icon: (<FaReceipt size='16'/>)
      },
      {
        title: 'Shipping',
        tooltip: 'Orders with peding shipping action',
        path: '/shipping-pending',
        icon: (<FaShippingFast size='16'/>)
      },
      {
        title: 'Customer Messages',
        tooltip: 'Your registered categoreis',
        path: '/support',
        icon: (<FcCustomerSupport size='16'/>)
      }
    ]
  },
  {
    title: 'Integrations',
    optionsEnabled: true,
    tooltip: 'Integration Related Menus',
    icon: (<FaCodeBranch size='20'/>),
    path: '/integrations',
    topics: [
      {
        title: 'Amazon',
        tooltip: 'Your Amazon product listings',
        path: '/amazon',
        icon: (<FaAmazon />)
      },
      {
        title: 'eBay',
        tooltip: 'Your eBay product listings',
        path: '/ebay',
        icon: (<FaEbay />)
      },
      {
        title: 'Shopee',
        tooltip: 'Your Shopee product listings',
        path: '/shopee',
        icon: (<FaShopify />)
      }
    ]
  }
]