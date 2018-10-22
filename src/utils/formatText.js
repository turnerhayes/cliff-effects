import React from 'react';
import marksy from 'marksy';

const compile = marksy({ createElement: React.createElement });

const formatText = ({ text }) => {
  return compile(text).tree;
};

export default formatText;
