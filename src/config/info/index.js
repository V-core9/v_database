module.exports = {
    name: "V_Database System",
    title: "Safe, Fast & Intuitive DatabaseSystem",
    description: "V_Database System is a db solution that is built on top of the V_File_System Module thus extending, depending, testing and developing both further.",
    home: "https://v-core9.com/",
    author: "V-core9",
    log_levels: require('./log_levels'),
    home_path: "https://v-core9.com/",
    app_config: {
        live: {
            data_dir: "$_live",
            data_mode: "\"perPost\""
        },
        dev: {
            data_dir: "$_dev",
            data_mode: "\"perPost\""
        },
        test: {
            data_dir: "$_test",
            data_mode: "\"perPost\""
        }
    }
};