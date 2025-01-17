export const errorMessages = [{
    server: 'integrals is not enough',
    local: '您的积分不足，请先充值'
}, {
    server: 'user_already_exist',
    local: '用户已存在'
}, {
    server: 'enterprise_not_found',
    local: '企业不存在'
}, {
    server: 'hash duplicate',
    local: '文件已存在, 请重新选择'
}, {
    server: 'vault login status expired',
    local: '保险箱金钥已过期'
}, {
    server: 'project_already_exist',
    local: '项目已存在，请修改项目名'
}, {
    server: 'user_not_found',
    local: '用户不存在'
}, {
    server: 'invalid_password',
    local: '密码不正确'
}, {
    server: 'user_already_exist',
    local: '用户已存在'
}, {
    server: 'user_already_exist',
    local: '用户已存在'
}, {
    server: 'user_already_exist',
    local: '用户已存在'
}, {
    server: 'user_already_exist',
    local: '用户已存在'
}, {
    server: 'the operation is too frequent',
    local: '操作太频繁了，请稍后再试'
}, {
    server: 'token is invalid',
    local: 'token已过期，请重新输入邮箱'
}, {
    server: 'GetZkpProofRequest: record not found',
    local: '资产ID不正确'
}, {
    server: 'ZkpVerifyFile: record not found',
    local: '原文件与证明文件不匹配'
}, {
    server: 'ZkpVerifyFile: file hash mismatch',
    local: '原文件与证明文件不匹配'
},
{
    server: 'ZkpVerifyFile: no proof package file ',
    local: '证明文件不存在，可能已失效'
},
{
    server: 'ZkpVerifyFile: gzip: invalid header',
    local: '证明文件格式错误'
},
{
    server: 'identity info is invalid',
    local: '实名认证失败，请核对后重新输入'
},
{
   server:'validation code mismatch',
   local: '手机验证码错误，请核对后重新输入'
},
{
   server:'CreateFileUploadRequest: validation code mismatch',
   local: '手机验证码错误，请核对后重新输入'
},
{
   server:'UpdateFile: validation code mismatch',
   local: '手机验证码错误，请核对后重新输入'
},
{
   server:'CreateAssetsFile: validation code mismatch',
   local: '手机验证码错误，请核对后重新输入'
},
{
   server:'validation code expired',
   local: '验证码已过期，请重新输入'
},
{
   server:'validation code filled',
   local: '验证码请求过于频繁，请一分钟后再试'
},
{
   server:'validation code does not generate',
   local: '验证码未发送，请先发送验证码'
},
{
   server:'enterprise_already_exist',
   local:'企业已存在'
},
{
   server:'enterprise_already_exist',
   local:'企业已存在'
},
{
   server:'enterprise_already_join',
   local:'你已加入企业'
},
{
   server:'employee locked',
   local:'你的账号已被冻结'
}
]

export const UserLoginStatuExpired = "user login status expired"

export default {
    getMessageTypes() {
        return errorMessages
    },
    
    getLocalMessage(server) {
        let label = null
        errorMessages.forEach((message) => {
            if (message.server === server) { label = message.local }
        })
        return label
    },
}