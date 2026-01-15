import {createNavigation} from 'next-intl/navigation';
import {routing} from './routing';

/**
 * https://next-intl.dev/docs/routing/setup#i18n-navigation
 */
export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing);