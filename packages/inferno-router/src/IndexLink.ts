/**
 * @module Inferno-Router
 */ /** TypeDoc Comment */

import { createVNode, IVNode } from 'inferno';
import VNodeFlags from 'inferno-vnode-flags';
import Link from './Link';

export default function IndexLink(props): IVNode {
	props.to = '/';
	return createVNode(VNodeFlags.ComponentFunction, Link, null, null, props);
}