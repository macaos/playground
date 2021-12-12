import React, { Component, ReactElement } from "react";
import RollingText from "./RollingText";
import { forEach } from "lodash";
import { css } from "emotion";

interface IProps {
  size: string;
  letters: string;
  randomEffect?: boolean;
  restrict: string[];
}

class RollingTexts extends Component<IProps> {
  private RollingTextList: ReactElement[] = [];
  private GuideTextList: ReactElement[] = [];
  private guideRefs: any[] = [];
  private isCalcGuide: boolean = false;

  componentDidMount() {
    this.didUpdate();
  }

  componentDidUpdate() {
    this.didUpdate();
  }

  didUpdate() {
    if (!this.isCalcGuide) {
      setTimeout(() => {
        this.makeRollingTextList();
        this.isCalcGuide = true;
        this.forceUpdate();
        this.isCalcGuide = false;
      });
    }
  }

  makeRollingTextList() {
    this.RollingTextList = [];
    const { letters, size, randomEffect, restrict } = this.props;
    forEach(letters, (item, i) => {
      const ref = this.guideRefs[i];
      const letterWidth = ref && ref ? ref.offsetWidth : 20;
      this.RollingTextList.push(
        <RollingText
          restrict={restrict}
          size={size}
          letterWidth={letterWidth}
          letter={item}
          randomEffect={randomEffect}
        />
      );
    });
  }
  makeGuideTextList() {
    this.GuideTextList = [];
    this.guideRefs = [];
    const { letters, size } = this.props;
    for (let i = 0, len = letters.length; i < len; i++) {
      const item = letters[i];
      this.GuideTextList.push(
        <span
          key={i}
          ref={ref => {
            this.guideRefs[i] = ref;
          }}
          className={css`
            opacity: 0;
            font-size: ${size};
            font-family: "Helvetica Neue", Arial, "Noto Sans", sans-serif;
            font-weight: bold;
          `}
        >
          {item}
        </span>
      );
    }
  }

  render() {
    this.makeGuideTextList();
    return (
      <>
        {this.isCalcGuide && this.RollingTextList}
        {!this.isCalcGuide && this.GuideTextList}
      </>
    );
  }
}

export default RollingTexts;
