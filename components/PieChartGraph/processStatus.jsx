const statusColor = {
  kids: "#1f66ba",
  mentors: "#FFD700",
  admins: "#FF4500",
  superadmins: "#6A0DAD",
};

const processStatus = (data) => {
  console.log("&&&&&&: ", data);
  const chartData = data.map((item) => ({
    ...item,
    count: item.counts,
    fill: statusColor[item.name],
  }));
  return chartData;
};

export default processStatus;
