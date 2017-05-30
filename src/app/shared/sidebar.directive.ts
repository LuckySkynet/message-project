import { Directive, ElementRef, HostListener } from '@angular/core';

/**
 * 隐藏边栏
 * @export
 * @class SidebarToggleDirective
 */
@Directive({ selector: '[appSidebarToggler]' })
export class SidebarToggleDirective {
  constructor() { }

  @HostListener('click', ['$event'])
  toggleOpen($event: any) {
    $event.preventDefault();
    document.querySelector('body').classList.toggle('sidebar-hidden');
  }
}

/**
 *
 * 最小化时仅显示边栏图标
 * @export
 * @class SidebarMinimizeDirective
 */
@Directive({ selector: '[appSidebarMinimizer]' })
export class SidebarMinimizeDirective {
  constructor() { }

  @HostListener('click', ['$event'])
  toggleOpen($event: any) {
    $event.preventDefault();
    document.querySelector('body').classList.toggle('sidebar-compact');
  }
}


export const SIDEBAR_DIRECTIVE = [
  SidebarToggleDirective,
  SidebarMinimizeDirective
]
