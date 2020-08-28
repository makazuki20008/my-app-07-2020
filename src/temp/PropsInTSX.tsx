import React, { Component } from 'react';

interface PageProps {
    innerHTML: string;
  }
  
type PageProps2 = {
    innerHTML: string
}

export default class PropsInTSX extends React.Component<PageProps2> {
    public render(): JSX.Element {
        return (
            <span>Props { this.props.innerHTML }</span>
        );
    }
}