export const BandZZTop = (props: {
  line?: string;
  fill?: string;
}) => {
  const line = props.line || "rgba(120,120,120,1)";
  const fill = props.fill || "rgb(255,255,255)";
  const encoded = encodeURI((<SVG line={line} fill={fill} />).toString());

  return (
    <div style="opacity:1">
      <div
        style={`
        height:10px;
        background-repeat:repeat-x;
        background-size:12px 12px;
        background-position:top;
        background-image:url('data:image/svg+xml;utf8,${encoded}');
        `}
      ></div>
    </div>
  );
};

const SVG = (props: { line: string; fill: string }) => {
  const line = props.line || "rgba(120,120,120,1)";
  const fill = props.fill || "rgb(255,255,255)";
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="10 10 240 240"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xml:space="preserve"
      xmlns:serif="http://www.serif.com/"
      style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
    >
      <g transform="matrix(1,0,0,1,-50,-290)">
        <path
          d="M310,290L50,290L50,339.343L177.226,424.16C178.906,425.28 181.094,425.28 182.774,424.16L310,339.343L310,290Z"
          style={`fill:${line};`}
        />
        <path
          d="M310,290L310,327.324L180,413.991L50,327.324L50,290L310,290Z"
          style={`fill:${fill};`}
        />
      </g>
    </svg>
  );
};
