import chalk from 'chalk';
import color from 'randomColor';

const hueInput = process.argv[2];
const lumInput = process.argv[3];

const randomColor = color.randomColor({
  hue: hueInput,
  luminosity: lumInput,
});

function hexRandomColor(any) {
  console.log(chalk.hex(randomColor).bold(any));
}

const hexOutput = `###############################
###############################
###############################
####                       ####
####      ${randomColor}          ####
####                       ####
###############################
###############################
###############################`;

hexRandomColor(hexOutput);
