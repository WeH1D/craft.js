import React, { cloneElement } from "react";
import { Node, ConnectedNode, NodeRef } from "../interfaces";
import invariant from "invariant";
import { useInternalNode } from "../nodes/useInternalNode";


export function useNode(): ConnectedNode
export function useNode<S = null>(collect?: (node: Node) => S): ConnectedNode<S>
export function useNode<S = null>(collect?: (node: Node) => S): ConnectedNode<S> {
  const { actions: { setRef, setProp, setNodeEvent }, _inNodeContext, ...collected } = useInternalNode(collect);

  return {
    ...collected as any,
    actions: { setProp },
    connectTarget: (render: any, methods: Exclude<NodeRef, 'dom' | 'event'>): React.ReactElement => {
      if (!_inNodeContext) return render;
      const previousRef = render.ref;
      invariant(previousRef !== "string", "Cannot connect to an element with an existing string ref. Please convert it into a callback ref instead.");
     

      if ( methods ) {
        setRef((ref) => {
          Object.keys(methods).forEach((key: keyof Exclude<NodeRef, 'dom'>) => {
              ref[key] = methods[key] as any;
          });
        });
      }

      return cloneElement(render, {
        ref: (dom: HTMLElement) => {
          if (dom) {
            setRef((ref) => ref.dom = dom);
          }
          if (previousRef) previousRef(dom);
        },
        onMouseOver: (e: React.MouseEvent) => {
          e.stopPropagation();
          setNodeEvent('hover');
          if (render.props.onMouseOver) render.props.onMouseOver(e);
        },
        onMouseDown: (e: React.MouseEvent) => {
          e.stopPropagation();
          setNodeEvent('selected');
          setNodeEvent('active');
          if (render.props.onMouseDown) render.props.onMouseDown(e);
        }
      })
    }
  }
}

