import React from "react";
import styled from "styled-components";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";

const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  overflow: scroll;
`;

const Line = styled.div`

  &.highlight-line {
    background-color: rgb(2, 55, 81);
    border-left: 4px solid rgb(2, 155, 206);
  }
`;

const LineNo = styled.span`
  display: inline-block;
  padding-left: 1em;
  padding-right: 1em;
  width: 1.2em;
  user-select: none;
  opacity: 0.3;
  text-align: center;
  position: relative;

  .highlight-line & {
    opacity: 0.5;
    width: calc(1.2em - 4px);
    left: -2px;
  }
`;

const LineContent = styled.span`

`;

const RE = /{([\d,-]+)}/

const calculateLinesToHighlight = meta => {
  if (!RE.test(meta)) {
    return () => false
  }
  const lineNumbers = RE.exec(meta)[1]
    .split(`,`)
    .map(v => v.split(`-`).map(x => parseInt(x, 10)))
  return index => {
    const lineNumber = index + 1
    const inRange = lineNumbers.some(([start, end]) =>
      end ? lineNumber >= start && lineNumber <= end : lineNumber === start
    )
    return inRange
  }
}

export const Code = (props) => {
  const {metastring, children, className } = props;
  const shouldHighlightLine = calculateLinesToHighlight(metastring)
  const language = className.replace('language-', '')
  return (
    <Highlight {...defaultProps} theme={theme} code={children} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className} style={style}>
          {tokens.map((line, i) => {
            const lineProps = getLineProps({ line, key: i });
            if (shouldHighlightLine(i)) {
              lineProps.className = `${lineProps.className} highlight-line`
            }
            return (
            <Line key={i} {...lineProps}>
              <LineNo>{i + 1}</LineNo>
              <LineContent>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </LineContent>
            </Line>
          )}
          )}
        </Pre>
      )}
    </Highlight>
  );
}
