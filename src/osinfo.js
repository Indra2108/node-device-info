const os = require('os')

const endian = () => {
    switch (os.endianness()) {
        case 'BE':
            return 'Big Endian'

        case 'LE':
            return 'Little Endian'

        default:
            return 'Unknown'
    }
}

const uptime = () => {
    const sec = os.uptime()
    const hour = Math.floor(sec / 3600)
    const min = Math.floor(sec % 3600 / 60)
    const s = Math.floor(sec % 3600 % 60)

    const hourShow = hour > 0 ? hour + 'H:' : ""
    const minShow = min > 0 ? min + 'M:' : ""
    const sShow = s > 0 ? s + 'S' : ""

    return hourShow + minShow + sShow
}

const cpus = () => {
    const cpu = os.cpus()

    return {
        "Model": cpu[0].model,
        "Speed": cpu[0].speed + " MHz",
        "Core": cpu.length,
        "Endian": endian()
    }

}

module.exports = {
    "NodeJS Version": process.version,
    "System": {
        "Type": os.type(),
        "Platform": os.platform(),
        "Release": os.release(),
        "Architecture": os.arch(),
    },
    "CPUs": cpus(),
    "Memory": {
        "Total Memory": `${Math.floor(os.totalmem() / 1024 / 1024)} MB`,
        "Free Memory": `${Math.floor(os.freemem() / 1024 / 1024)} MB`,
    },
    "Uptime": uptime(),
}