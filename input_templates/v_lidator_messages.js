const validator_messages = {
    password: {
        success: "✅ Success\n🔓 Password verification successful.",
        error: {
            min: "❌ Error\n❓ Password minimum length is [ " + _cfg.min + " ]",
            max: "❌ Error\n📛 Password maximum length is [ " + _cfg.max + " ]",
            chars: "❌ Error\n🔓 Password does not meet the requirements.",
            confirm: "❌ Error\n🚨 Password Confirmation Entry Does Not Match Password Provided."
        }
    },
    email: {
        success: "✅ Success\n🔓 Password verification successful.",
        error: {
            min: "❌ Error\n❓ Password minimum length is [ " + _cfg.min + " ]",
            max: "❌ Error\n📛 Password maximum length is [ " + _cfg.max + " ]",
            chars: "❌ Error\n🔓 Password does not meet the requirements.",
            confirm: "❌ Error\n🚨 Password Confirmation Entry Does Not Match Password Provided."
        }
    },
    username: {
        success: "✅ Success\n🤪 Username verification successful.",
        errors: {
            chars: "🙋‍♂️ Username can only have letters, numbers, underscore and dot.",
            min: "🤯 Username minimum length is [ " + _cfg.min + " ]",
            max: "💥 Username maximum length is [ " + _cfg.max + " ]",
        }
    }
}

module.exports = validator_messages;